var productsLiked = [];

var productsOnCart = [];

var currentProduct = ''

function setProducts(){
    const local = JSON.parse(localStorage.getItem('likedItens'))
    if(local){
        productsLiked = local
    }
    const current = localStorage.getItem('currentProduct')

    if(current){
        currentProduct = current
    }

    const productCart = JSON.parse(localStorage.getItem('productsOnCart'))
    if(productCart){
        productsOnCart = productCart
    }
    handleLoadProduct()
    onLoadCart()
}

var allProducts = [
    {
        id: 0, 
        name: 'colar ocean life',
        description: 'Rastreie uma tartaruga',
        urlfile: '../images/colar ocean life.jpg',
        oldValue: 199.00,
        currentValue: 147.00,
        color: 'Prata',
        category: 'Colar',
        inStock: true
    },
    {
        id: 1, 
        name: 'anel sunshine', 
        description: 'Monitorar Golfinho Resgatado',
        urlfile: '../images/anel-sunshine-monitorar-golfinho-resgatado-anel-sunshine-monitorar-golfinho-resgatado-bela-wonder-455883_450x.webp',
        oldValue: 199.00,
        currentValue: 147.00,
        color: 'Prata',
        category: 'Anel',
        inStock: true
    }, 
    {
        id: 2, 
        name: 'colar tubarão', 
        description: 'Rastreie Um Tubarão Resgatado',
        urlfile: '../images/colar ocean life.webp',
        oldValue: 199.00,
        currentValue: 147.00,
        color: 'Prata',
        category: 'Colar',
        inStock: true
    },
    {
        id: 3, 
        name: 'Colar de Prata com Pingente de Sereia', 
        description: '...',
        urlfile: '../images/foto 1.webp',
        oldValue: 199.00,
        currentValue: 147.00,
        color: 'Prata',
        category: 'Colar',
        inStock: true
    }
]

var quant = 1;

//DESLIZAR MENUS LATERAIS
function slideBag(){
    const bag = document.getElementById('bag');

    if(bag){
        bag.style.width = '300px'
    }
}

function closeBag(){
    const bag = document.getElementById('bag');
    if(bag){
        bag.style.width = '0'
    }
}

function slideLikes(){
    const likes = document.getElementById('likes');

    if(likes){
        likes.style.width = '300px'
    }
}

function closeLikes(){
    const likes = document.getElementById('likes');
    if(likes){
        likes.style.width = '0'
    }
}
//DESLIZAR MENUS LATERAIS


//FAVORITAR E DESFAVORITAR PRODUTO
function handleHeartIcon(indice){
    const heartIcon = document.getElementById(`heartIcon${indice}`)
    if(heartIcon){
        const list = document.getElementById('listLikes');

        if(heartIcon.classList.contains('fa-solid')){
            heartIcon.classList.add("fa-regular")
            heartIcon.classList.remove("fa-solid")
            const index = productsLiked.indexOf(productsLiked.find(({id}) => id === indice))
            productsLiked.splice(index, 1)

            localStorage.setItem('likedItens', JSON.stringify(productsLiked))

            if (list.hasChildNodes()) {
                list.removeChild(list.children[index]);
            }
        } else if(heartIcon.classList.contains('fa-regular')){
            heartIcon.classList.add("fa-solid")
            heartIcon.classList.remove("fa-regular")
            
            productsLiked.push({
                id: indice,
                name: allProducts[indice].name,
                urfFile: allProducts[indice].urlfile
            })

            const index = productsLiked.indexOf(productsLiked.find(({id}) => id === indice))
            const newLi = document.createElement('li')
            newLi.setAttribute("id", 'likedLi')
            newLi.setAttribute("class", "liLiked")

            newLi.innerHTML = Object.values(productsLiked[index])

            list.appendChild(newLi);
            for(var i = 0; i<productsLiked.length; i++){
                newLi.innerHTML = `<img src="${productsLiked[index].urfFile}" alt=""> <p>${productsLiked[i].name}</p>`
            }
            localStorage.setItem('likedItens', JSON.stringify(productsLiked))
        }
    }
}
//FAVORITAR E DESFAVORITAR PRODUTO

//PROCURAR PRODUTOS
function searchProducts(){
    var searchInputValue = document.getElementById('searchInput').value

    var result = document.getElementById('resultSearch').innerHTML = allProducts.filter((result) => result.name == searchInputValue)
    console.log(searchInputValue)
    for(var i = 0; i < result.length; i++){
        document.getElementById('resultSearch').innerHTML = `<div class='resultLi'><img src="${result[i].urlfile}" alt=""> <p>${result[i].name}</p></div>`
    }
}
//PROCURAR PRODUTOS

//MOSTRAR PESQUISA DE PRODUTOS
function searchFocus(){
    const list = document.getElementById('resultSearch');
    list.style.display = 'flex'
}
//MOSTRAR PESQUISA DE PRODUTOS

//OCULTAR PESQUISA DE PRODUTOS
function searchOutFocus(){
    const list = document.getElementById('resultSearch');
    list.style.display = 'none'
}
//OCULTAR PESQUISA DE PRODUTOS

/*
function innerResultSearch() {
    const list = document.getElementById('resultSearch');
    
    for(var i = 0; i< allProducts.length; i++){
        const newLi = document.createElement('li')
        newLi.setAttribute("id", 'resultLi')
        newLi.setAttribute("class", 'resultLi')
        
        newLi.innerHTML = `<img src="${allProducts[i].urlfile}" alt=""> <p>${allProducts[i].name}</p>`
        list.appendChild(newLi);
    }
}*/




//CARREGAR PRODUTOS FAVORITOS
function handleLoadProduct(){
    const list = document.getElementById('listLikes');
    console.log(productsLiked)

    for(var i = 0; i <allProducts.length;i++){
        if(productsLiked[i]){
            const heartIcon = document.getElementById(`heartIcon${productsLiked[i].id}`)
            if(heartIcon){
                if(heartIcon.classList.contains('fa-regular')){
                    heartIcon.classList.add("fa-solid")
                    heartIcon.classList.remove("fa-regular")

                    const newLi = document.createElement('li')
                    const newA = document.createElement('a')

                    newLi.setAttribute("id", 'likedLi')
                    newLi.setAttribute("class", "liLiked")
                    newA.setAttribute("onclick", `attCurrentProduct(${productsLiked[i].id})`)

                    newA.setAttribute("href", "product.html")

                    newLi.innerHTML = Object.values(productsLiked[i])

                    list.appendChild(newA);
                    newA.appendChild(newLi)
                    newLi.innerHTML = `<img src="${productsLiked[i].urfFile}" alt=""> <p>${productsLiked[i].name}</p>`
                }
            }else {
                const newLi = document.createElement('li')
                const newA = document.createElement('a')

                newLi.setAttribute("id", 'likedLi')
                newLi.setAttribute("class", "liLiked")
                newLi.innerHTML = Object.values(productsLiked[i])
                newA.setAttribute("onclick", `attCurrentProduct(${productsLiked[i].id})`)
                newA.setAttribute("href", "product.html")

                list.appendChild(newA);
                newA.appendChild(newLi)
                newLi.innerHTML = `<img src="${productsLiked[i].urfFile}" alt=""> <p>${productsLiked[i].name}</p>`
            }
        }
    }
}
//CARREGAR PRODUTOS FAVORITOS


//MOSTRAR PRODUTOS
function innerProductsHtml(page){
    const mainProducts = document.getElementById('mainProducts')
    for(var i = 0; i <allProducts.length;i++){
        const newDivProduct = document.createElement('div')
        newDivProduct.setAttribute('id', 'newDivProduct')
        if(page == 'home'){
            newDivProduct.innerHTML = `
            <div>
                <a href="./pages/product.html"><img class="productImg" onclick="attCurrentProduct(${allProducts[i].id})" src="${allProducts[i].urlfile}" alt=""></a>
            </div>
            <div class="productInfo">
                <p class="heartIcon" ><i id="heartIcon${allProducts[i].id}" onclick="handleHeartIcon(${allProducts[i].id})" class="fa-regular fa-heart product"></i></p>

                <h2 class="productTitle" onclick="attCurrentProduct(${allProducts[i].id})"><a href="./pages/product.html">${allProducts[i].name}</a></h2>
                <p class="productDescription">${allProducts[i].description}</p>
            </div>
            `
            if(i == 3){
                setProducts()
                return;
            }
        } else if(page == 'homeProducts'){
            newDivProduct.innerHTML = `
            <div>
                <a href="product.html"><img class="productImg" onclick="attCurrentProduct(${allProducts[i].id})" src="${allProducts[i].urlfile}" alt=""></a>
            </div>
            <div class="productInfo">
                <p class="heartIcon" ><i id="heartIcon${allProducts[i].id}" onclick="handleHeartIcon(${allProducts[i].id})" class="fa-regular fa-heart product"></i></p>

                <h2 class="productTitle" onclick="attCurrentProduct(${allProducts[i].id})"><a href="product.html">${allProducts[i].name}</a></h2>
                <div class="productValue">
                    <p class="oldValue"><del>R$ ${allProducts[i].oldValue.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</del></p>
                    <p>R$ ${allProducts[i].currentValue.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    <p>ou apenas <strong>6x</strong> de <strong>R$ ${(allProducts[i].currentValue/6).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></p>
                </div>
            </div>
            `
        }
        
        mainProducts.appendChild(newDivProduct);
        //localStorage.removeItem('likedItens')
        //console.log(`heartIcon${allProducts[i].id}`)
    }
    setProducts()
}
//MOSTRAR PRODUTOS

function getProductsByCategoty(category){   
    const checkbox = document.getElementById(`checkbox${category}`)
    const mainProducts = document.getElementById('mainProducts')

    if(checkbox.checked){
        mainProducts.innerHTML = ''
        for(var i = 0; i < allProducts.length; i++){
            
            if(allProducts[i].category == category){
                const newDivProduct = document.createElement('div')

                newDivProduct.innerHTML = `
                <div>
                    <a href="product.html"><img class="productImg" onclick="attCurrentProduct(${allProducts[i].id})" src="${allProducts[i].urlfile}" alt=""></a>
                </div>
                <div class="productInfo">
                    <p class="heartIcon" ><i id="heartIcon${allProducts[i].id}" onclick="handleHeartIcon(${allProducts[i].id})" class="fa-regular fa-heart product"></i></p>
    
                    <h2 class="productTitle" onclick="attCurrentProduct(${allProducts[i].id})"><a href="product.html">${allProducts[i].name}</a></h2>
                    <div class="productValue">
                        <p class="oldValue"><del>R$ ${allProducts[i].oldValue.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</del></p>
                        <p>R$ ${allProducts[i].currentValue.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                        <p>ou apenas <strong>6x</strong> de <strong>R$ ${(allProducts[i].currentValue/6).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></p>
                    </div>
                </div>
                `
                mainProducts.appendChild(newDivProduct);

            }

        }
        handleLoadProduct()
    } else {
        mainProducts.innerHTML = ''
        innerProductsHtml('homeProducts')
    }
}

//ALTERAR PRODUTO DA PAGINA ATUAL
function attCurrentProduct(currentProductProp){
    currentProduct = currentProductProp
    localStorage.setItem('currentProduct', currentProduct)
}
//ALTERAR PRODUTO DA PAGINA ATUAL

//MOSTRAR INFORMAÇÕES NA PAGINA DO PRODUTO
function innerProductInfoHtml(){
    const current = localStorage.getItem('currentProduct')

    const divProduct = document.getElementById("product")

    const newDivProduct = document.createElement('div')

    newDivProduct.innerHTML = `
    <div>
        <div class="urlProd">
            <p><u>Home</u> / Colar - Sereia - (Monitorar Golfinho)</p>
        </div>
        <div class="productContent">
        
            <div class="nextPhoto">
                <img src="../images/foto 2.webp" alt="">
                <img src="../images/foto 3.webp" alt="">
                <img src="../images/foto 4.webp" alt="">
                <img src="../images/foto 5.webp" alt="">
            </div>
            <div class="currentPhoto">
                <img src="${allProducts[current].urlfile}" alt="">
            </div>
            <div class="prodTitle">
                <h1>${allProducts[current].name}</h1>

                <h3>Cor:</h3>
                <p class="colorProd">${allProducts[current].color}</p>

                <div>
                    <p><del>R$ ${allProducts[current].oldValue.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</del></p>
                    <div class="currentValue"><h1>R$ ${allProducts[current].currentValue.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</h1> <p class="promotePercent">-26%</p></div>
                    <p>Ou apenas <strong>6x</strong> de <strong>R$ ${(allProducts[current].currentValue/6).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></p>
                </div>
                <div class="buttonsProduct">
                    <button class="minus" id="minusQuant" onclick="lessQuant()"><i class="fa-solid fa-minus"></i></button>
                    <input id="quant" class="btnQuant" type="number" value="${quant}" max="5" disabled>
                    <button class="plus" onclick="plusQuant()"><i class="fa-solid fa-plus"></i></button>
                   
                    <button class="btnAddCart" onclick="addProductsOnCart()">ADICIONE AO CARRINHO</button>
                </div>
            </div>
        </div>
        <div class="parcelas">
            <table class="tablePar">
                <tr>
                    <th></th>
                    <th class="titlePar"><u>PARCELAS</u></th>
                </tr>
                <tr>
                    <td>1x de R$ 147,00 sem juros</td>
                    <td>4x de R$ 40,75</td>
                </tr>
                <tr>
                    <td>2x de R$ 73,50 sem juros</td>
                    <td>5x de R$ 33,02</td>
                </tr>
                <tr>
                    <td>3x de R$ 49,00 sem juros</td>
                    <td>6x de R$ 27,84</td>
                </tr>
            </table>
        </div>

        <div class='descriptionProd'>
            <div>
                <p><strong>Descrição:</strong></p>
                <p>
                    O Colar Sereia dos Golfinhos Protetores apresenta um pingente meticulosamente esculpido em forma de sereia, envolto em detalhes
                    intrincados que capturam a beleza e mistério das profundezas do oceano. O pingente é banhado a prata 925, proporcionando um
                    brilho duradouro e um toque de sofisticação.
                </p>
            </div>
            <div>
                <p><strong>Especificações:</strong></p>
                <p>
                    Material: Prata 925 e Zircônia.
                    Tamanho: 50 cm.
                </p>
            </div>
        </div>
    </div>
    `
    divProduct.appendChild(newDivProduct)

    setProducts()
}
//MOSTRAR INFORMAÇÕES NA PAGINA DO PRODUTO

//DIMINUIR QUANTIDADE
function lessQuant(){
    const quant = document.querySelector('#quant')
    
    if(quant.value > 1 ){
        quant.value -= 1
    }
}
//DIMINUIR QUANTIDADE

//ALMENTAR QUANTIDADE
function plusQuant(){
    const quant = document.querySelector('#quant')
    
    if(quant.value < 10){
        quant.value = Number(quant.value)+1
    }
}
//ALMENTAR QUANTIDADE

//ADICIONAR PRODUTOS AO CARRINHO
function addProductsOnCart(){
    const listCart = document.getElementById('listCart')
    productsOnCart.push({
        id: currentProduct,
        name: allProducts[currentProduct].name,
        urlfile: allProducts[currentProduct].urlfile
    })
    localStorage.setItem('productsOnCart', JSON.stringify(productsOnCart))

    const newLi = document.createElement('li')
    newLi.setAttribute("class", "liLiked")

    listCart.appendChild(newLi);
    for(var i = 0; i < productsOnCart.length; i++){
        newLi.innerHTML = `<img src="${productsOnCart[i].urlfile}" alt=""><p>${productsOnCart[i].name}</p>`
    }


    console.log(productsOnCart)
}
//ADICIONAR PRODUTOS AO CARRINHO

//CARREGAR CARRINHO
function onLoadCart() {
    const listCart = document.getElementById('listCart')
    
    for(var i = 0; i < productsOnCart.length; i++){
        const newA = document.createElement('a')
        const newLi = document.createElement('li')
        newLi.setAttribute("class", "liLiked")
        newA.setAttribute("href", "product.html")
        newA.setAttribute("onclick", `attCurrentProduct(${productsOnCart[i].id})`)

        newLi.innerHTML = `<img onclick="attCurrentProduct(${productsOnCart[i].id})" src="${productsOnCart[i].urlfile}" alt=""> <p>${productsOnCart[i].name}</p></a>`
        
        listCart.appendChild(newA);
        newA.appendChild(newLi)
    }
    //localStorage.removeItem('productsOnCart') 
}
//CARREGAR CARRINHO

//DESLIZAR MENU RESPONSIVO
function slideMobileMenu(){
    const mobileMenuSide = document.getElementById('mobileMenuSide')
    if(mobileMenuSide){
        mobileMenuSide.style.width = '100%'
    }
}

function closeMobileMenu(){
    const mobileMenuSide = document.getElementById('mobileMenuSide')
    if(mobileMenuSide){
        mobileMenuSide.style.width = '0'
    }
}
//DESLIZAR MENU RESPONSIVO


