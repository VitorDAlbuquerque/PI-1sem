var productsLiked = [];

var productsOnCart = [];

var currentProduct = ''
var currentImage = ''

function setProducts(page){
    const local = JSON.parse(localStorage.getItem('likedItens'))
    if(local){
        productsLiked = local
    }
    const current = localStorage.getItem('currentProduct')

    if(current){
        currentProduct = current
        currentImage = allProducts[current].urlfile
    }

    const productCart = JSON.parse(localStorage.getItem('productsOnCart'))
    if(productCart){
        productsOnCart = productCart
    }
    handleLoadProduct(page)
    onLoadCart(page)
}

var allProducts = [
    {
        id: 0, 
        name: 'colar ocean life',
        description: 'Rastreie uma tartaruga',
        urlfile: '../images/ocean1.png',
        oldValue: 250.00,
        currentValue: 199.99,
        color: 'Prata',
        category: 'Colar',
        inStock: true,
        entireDescription: 'O Colar Ocean Life apresenta um pingente meticulosamente esculpido em forma de Tartatuga. O pingente é banhado a prata 925, proporcionando um brilho duradouro e um toque de sofisticação.',
        specifications: 'Material: Prata 925 e Zircônia. Tamanho: 50 cm.',
        urlfile1: '../images/ocean2.png',
        urlfile2: '../images/ocean3.png',
        urlfile3: '../images/ocean4.png'
    },
    {
        id: 1, 
        name: 'anel sunshine', 
        description: 'Monitorar Golfinho Resgatado',
        urlfile: '../images/sunshine3.jpg',
        oldValue: 120.00,
        currentValue: 79.99,
        color: 'Prata',
        category: 'Anel',
        inStock: true,
        entireDescription: 'Anel dourado deslumbrante, destacando-se pela sua elegância e estilo radiante. O design apresenta um sol intricadamente esculpido no topo. Uma peça que combina o brilho do sol com a sofisticação do metal dourado, resultando em um acessório que simboliza luminosidade e glamour.',
        specifications: 'Material: Prata 925 e Zircônia. Tamanho: único.',
        urlfile1: '../images/sunshine1.jpg',
        urlfile2: '../images/sunshine2.jpg',
        urlfile3: '../images/sunshine4.jpg'
    }, 
    {
        id: 2, 
        name: 'colar shark', 
        description: 'Rastreie Um Tubarão Resgatado',
        urlfile: '../images/shark3.webp',
        oldValue: 299.99,
        currentValue: 149.99,
        color: 'Prata',
        category: 'Colar',
        inStock: true,
        entireDescription: 'Colar com pingente azul em metal banhado, detalhes precisos e fecho ajustável. Elegância e sofisticação marcam este acessório.',
        specifications: 'Material: Prata 925. Tamanho: 45 cm.',
        urlfile1: '../images/shark1.png',
        urlfile2: '../images/shark2.jpg',
        urlfile3: '../images/shark4.jpg'

    },
    {
        id: 3, 
        name: 'colar mermaid', 
        description: '...',
        urlfile: '../images/foto 1.webp',
        oldValue: 179.99,
        currentValue: 147.99,
        color: 'Prata',
        category: 'Colar',
        inStock: true,
        entireDescription: 'O Colar Sereia dos Golfinhos Protetores apresenta um pingente meticulosamente esculpido em forma de sereia, envolto em detalhes intrincados que capturam a beleza e mistério das profundezas do oceano. O pingente é banhado a prata 925, proporcionando um brilho duradouro e um toque de sofisticação.',
        specifications: 'Material: Prata 925 e Zircônia. Tamanho: 50 cm.',
        urlfile1: '../images/foto 2.webp',
        urlfile2: '../images/foto 3.webp',
        urlfile3: '../images/foto 4.webp'
    },

    {
        id: 4, 
        name: 'colar dolphin', 
        description: '...',
        urlfile: '../images/coracao 4.jpg',
        oldValue: 299.99,
        currentValue: 169.69,
        color: 'Prata',
        category: 'Colar',
        inStock: true,
        entireDescription: 'O Colar Sereia dos Golfinhos Protetores apresenta um pingente meticulosamente esculpido em forma de sereia, envolto em detalhes intrincados que capturam a beleza e mistério das profundezas do oceano. O pingente é banhado a prata 925, proporcionando um brilho duradouro e um toque de sofisticação.',
        specifications: 'Material: Prata 925 e Zircônia. Tamanho: 50 cm.',
        urlfile1: '../images/coracao.webp',
        urlfile2: '../images/coracao2.jpg',
        urlfile3: '../images/coracao3.jpg'
    },
    {
        id: 5, 
        name: 'anel sea', 
        description: '...',
        urlfile: '../images/sea3.webp',
        oldValue: 199.00,
        currentValue: 99.99,
        color: 'Prata',
        category: 'Anel',
        inStock: true,
        entireDescription: 'Anel em Prata 925 com Topázio Sky azul no centro, cercado por Topázios Incolor, proporcionando um toque de elegância celestial.',
        specifications: 'Material: Prata 925 e Topázio. Tamanho: único.',
        urlfile1: '../images/sea1.webp',
        urlfile2: '../images/sea2.webp',
        urlfile3: '../images/sea4.webp'
    },
    {
        id: 6, 
        name: 'anel ariel', 
        description: '...',
        urlfile: '../images/ariel1.png',
        oldValue: 199.00,
        currentValue: 99.99,
        color: 'Prata',
        category: 'Anel',
        inStock: true,
        entireDescription: 'Anel "Ariel" em prata, destacando-se pela graciosa cauda de sereia que envolve a base. Uma fusão encantadora de mitologia e elegância, este anel é uma expressão única de estilo marinho em uma peça de joalheria sofisticada.',
        specifications: 'Material: Prata 925. Tamanho: único.',
        urlfile1: '../images/ariel2.png',
        urlfile2: '../images/ariel3.png',
        urlfile3: '../images/ariel4.png'
    },
    {//pronto
        id: 7, 
        name: 'colar light', 
        description: '...',
        urlfile: '../images/light1.webp',
        oldValue: 399.00,
        currentValue: 189.00,
        color: 'Prata',
        category: 'Colar',
        inStock: true,
        entireDescription: 'Colar "Estrelas Marinhas" em prata, onde as estrelas se entrelaçam suavemente, evocando a beleza etérea do céu noturno sobre o oceano. Uma joia que celebra a conexão mágica entre as estrelas e o mar, proporcionando um toque elegante de fascínio marítimo.',
        specifications: 'Material: Prata 925 e Zircônia. Tamanho: 50 cm.',
        urlfile1: '../images/light2.webp',
        urlfile2: '../images/light3.webp',
        urlfile3: '../images/light4.webp'
    },
    {//ok
        id: 8, 
        name: 'pulseira shell', 
        description: '...',
        urlfile: '../images/shell1.png',
        oldValue: 299.99,
        currentValue: 199.99,
        color: 'Prata',
        category: 'Pulseira',
        inStock: true,
        entireDescription: 'Pulseira "Shell" em prata, uma elegante coleção de conchas que envolvem o pulso com graciosidade. Cada elo é uma celebração da beleza marinha, capturando a serenidade do oceano em um design refinado. Uma joia que reflete a sofisticação e a conexão encantadora com o mundo submarino.',
        specifications: 'Material: Prata 925. Tamanho: único.',
        urlfile1: '../images/shell2.png',
        urlfile2: '../images/shell3.png',
        urlfile3: '../images/shell4.png'
    },
    {
        id: 9, 
        name: 'brinco turtle', 
        description: '...',
        urlfile: '../images/turtle1.png',
        oldValue: 99.99,
        currentValue: 79.99,
        color: 'Prata',
        category: 'Brinco',
        inStock: true,
        entireDescription: 'Colar "Turtle" em prata, apresentando uma graciosa tartaruga com detalhes em azul. Uma joia de porte pequeno que captura a serenidade do oceano, proporcionando um toque encantador e elegante.',
        specifications: 'Material: Prata 925 e Zircônia. Tamanho: único.',
        urlfile1: '../images/turtle2.png',
        urlfile2: '../images/turtle3.png',
        urlfile3: '../images/turtle4.png'
    },
    {
        id: 10, 
        name: 'tornozeleira swim', 
        description: '...',
        urlfile: '../images/swim1.webp',
        oldValue: 99.99,
        currentValue: 59.99,
        color: 'Prata',
        category: 'Outro',
        inStock: true,
        entireDescription: 'Tornozeleira "Swim" em Prata 950, adornada com golfinhos esculpidos, transmitindo a graça e a alegria dos oceanos. Uma peça que celebra a liberdade e a fluidez dos movimentos, adicionando um toque encantador e elegante aos seus passos.',
        specifications: 'Material: Prata 950. Tamanho: 24 cm.',
        urlfile1: '../images/swim2.webp',
        urlfile2: '../images/swim3.webp',
        urlfile3: '../images/swim4.webp'
    },
    {
        id: 11, 
        name: 'colar passion', 
        description: '...',
        urlfile: '../images/passion1.webp',
        oldValue: 99.99,
        currentValue: 69.99,
        color: 'Prata',
        category: 'Colar',
        inStock: true,
        entireDescription: 'Colar "Passion" com um toque de elegância marítima, apresentando um pingente em forma de coração em azul marinho profundo. Esta joia reflete a paixão com uma pitada de mistério oceânico, incorporando a profundidade e a intensidade de um sentimento único em um design refinado.',
        specifications: 'Material: Prata Italiana 925. Tamanho: 45 cm.',
        urlfile1: '../images/passion2.webp',
        urlfile2: '../images/passion4.webp',
        urlfile3: '../images/passion.webp'
    }
]

var quant = 1;

//DESLIZAR MENUS LATERAIS
function slideBag(){
    const bag = document.getElementById('bag');

    if(bag){
        if(window.screen.width>450){
            bag.style.width = '300px'
        } else {
            bag.style.width = '100%'
        }
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
        if(window.screen.width>450){
            likes.style.width = '300px'
        } else {
            likes.style.width = '100%'
        }
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
function searchProducts(page){
    var searchInputValue = document.getElementById('searchInput').value

    var result = document.getElementById('resultSearch').innerHTML = allProducts.filter((result) => result.name == searchInputValue)
    console.log(searchInputValue)
    for(var i = 0; i < result.length; i++){
        if(page == "index"){
            document.getElementById('resultSearch').innerHTML = `<div class='resultLi' onclick="attCurrentProduct(${result[i].id})"><a href="./pages/product.html"><img src="${result[i].urlfile}" alt=""> <p>${result[i].name}</p></div>`
        } else {
            document.getElementById('resultSearch').innerHTML = `<div class='resultLi' onclick="attCurrentProduct(${result[i].id})"><a href="product.html"><img src="${result[i].urlfile}" alt=""> <p>${result[i].name}</p></div>`
        }
    }
}
//PROCURAR PRODUTOS

//MOSTRAR PESQUISA DE PRODUTOS
function searchFocus(){
    const list = document.getElementById('resultSearch');
    const mask = document.getElementById('maskSearch');

    list.style.display = 'flex'
    mask.style.display = 'block'

}
//MOSTRAR PESQUISA DE PRODUTOS

//OCULTAR PESQUISA DE PRODUTOS
function searchOutFocus(){
    const list = document.getElementById('resultSearch');
    const mask = document.getElementById('maskSearch');

    list.style.display = 'none'
    mask.style.display = 'none'
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
function handleLoadProduct(page){
    const list = document.getElementById('listLikes');

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
                    if(page == "home"){
                        newA.setAttribute("href", "./pages/product.html")
                    } else {
                        newA.setAttribute("href", "product.html")
                    }

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

                if(page == "home"){
                    newA.setAttribute("href", "./pages/product.html")
                } else {
                    newA.setAttribute("href", "product.html")
                }

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
                setProducts(page)
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
    setProducts(page)
}
//MOSTRAR PRODUTOS

function getProductsByCategoty(category){   
    const checkbox = document.getElementById(`checkbox${category}`)
    const mainProducts = document.getElementById('mainProducts')

    if(checkbox.checked){
        if(checkbox.id != 'checkboxAll'){
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
    setProducts()

    newDivProduct.innerHTML = `
    <div>
        <div class="urlProd">
            <p><a href="homeProducts.html"><u>Produtos</u></a> / ${allProducts[current].name}</p>
        </div>
        <div class="productContent">
        
            <div class="nextPhoto">
                <img class="nextImage" src="${allProducts[current].urlfile}" onclick="alterCurrentImage('${allProducts[current].urlfile}')" alt="">
                <img class="nextImage" src="${allProducts[current].urlfile1}" onclick="alterCurrentImage('${allProducts[current].urlfile1}')" alt="">
                <img class="nextImage" src="${allProducts[current].urlfile2}" onclick="alterCurrentImage('${allProducts[current].urlfile2}')" alt="">
                <img class="nextImage" src="${allProducts[current].urlfile3}" onclick="alterCurrentImage('${allProducts[current].urlfile3}')" alt="">
            </div>
            <div class="currentPhoto" id="currentPhoto">
                <img src="${allProducts[current].urlfile}" alt="">
            </div>
            <div class="prodTitle">
                <h1>${allProducts[current].name}</h1>

                <h3>Cor:</h3>
                <p class="colorProd">${allProducts[current].color}</p>

                <div>
                    <p><del>R$ ${allProducts[current].oldValue.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</del></p>
                    <div class="currentValue"><h1>R$ ${allProducts[current].currentValue.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</h1> <p class="promotePercent">- ${(100-(allProducts[current].currentValue/allProducts[current].oldValue)*100).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0})}%</p></div>
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
                    <td>1x de R$ ${(allProducts[current].currentValue).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})} sem juros</td>
                    <td>4x de R$ ${(allProducts[current].currentValue/4).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                </tr>
                <tr>
                    <td>2x de R$ ${(allProducts[current].currentValue/2).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})} sem juros</td>
                    <td>5x de R$ ${(allProducts[current].currentValue/5).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                </tr>
                <tr>
                    <td>3x de R$ ${(allProducts[current].currentValue/3).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})} sem juros</td>
                    <td>6x de R$ ${(allProducts[current].currentValue/6).toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                </tr>
            </table>
        </div>

        <div class='descriptionProd'>
            <div>
                <p><strong>Descrição:</strong></p>
                <p>
                    ${allProducts[current].entireDescription}
                </p>
            </div>
            <div>
                <p><strong>Especificações:</strong></p>
                <p>
                    ${allProducts[current].specifications}
                </p>
            </div>
        </div>
    </div>
    `
    divProduct.appendChild(newDivProduct)

}
//MOSTRAR INFORMAÇÕES NA PAGINA DO PRODUTO

function alterCurrentImage(image){
    const newImage = document.getElementById('currentPhoto')
    newImage.innerHTML = ''
    newImage.innerHTML = `<img src="${image}" alt=""> `
}



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
function onLoadCart(page) {
    const listCart = document.getElementById('listCart')
    
    for(var i = 0; i < productsOnCart.length; i++){
        const newA = document.createElement('a')
        const newLi = document.createElement('li')
        newLi.setAttribute("class", "liLiked")
        if(page == 'home'){
            newA.setAttribute("href", "./pages/product.html")
        }else {
            newA.setAttribute("href", "product.html")
        }
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

function learnAboutButton(){
    window.location.href = "./pages/aboutDonations.html";
}


