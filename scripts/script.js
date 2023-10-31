var productsLiked = [];
var allProducts = [{name: 'colar ocean life', urlfile: 'images/colar ocean life.jpg'},
 {name: 'anel sunshine', urlfile: 'images/anel-sunshine-monitorar-golfinho-resgatado-anel-sunshine-monitorar-golfinho-resgatado-bela-wonder-455883_450x.webp'}, 
 {name: 'colar tubarão', urlfile: 'images/colar ocean life.webp'}]

var foundedProducts = [];

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

function handleHeartIcon1(){
    const heartIcon = document.getElementById('heartIcon1')
    if(heartIcon){
        const list = document.getElementById('listLikes');

        if(heartIcon.classList.contains('fa-solid')){
            heartIcon.classList.add("fa-regular")
            heartIcon.classList.remove("fa-solid")
            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'colar ocean life'))
            productsLiked.splice(index, 1)

            if (list.hasChildNodes()) {
                list.removeChild(list.children[index]);
            }
        } else if(heartIcon.classList.contains('fa-regular')){
            heartIcon.classList.add("fa-solid")
            heartIcon.classList.remove("fa-regular")
            productsLiked.push({name: 'colar ocean life', urfFile: 'images/colar ocean life.jpg'})

            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'colar ocean life'))
            const newLi = document.createElement('li')

            newLi.setAttribute("class", "liLiked")
            newLi.setAttribute("id", 'likedLi')
            newLi.innerHTML = Object.values(productsLiked[index])
            list.appendChild(newLi);
            newLi.innerHTML = `<img src="images/colar ocean life.jpg" alt=""> <p>colar ocean life</p>`

            console.log(newLi)
        }
    }
}

function handleHeartIcon2(){
    const heartIcon = document.getElementById('heartIcon2')
    if(heartIcon){
        const list = document.getElementById('listLikes');

        if(heartIcon.classList.contains('fa-solid')){
            heartIcon.classList.add("fa-regular")
            heartIcon.classList.remove("fa-solid")

            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'anel sunshine'))
            productsLiked.splice(index, 1)

            if (list.hasChildNodes()) {
                list.removeChild(list.children[index]);
            }
        } else if(heartIcon.classList.contains('fa-regular')){
            heartIcon.classList.add("fa-solid")
            heartIcon.classList.remove("fa-regular")
            productsLiked.push({
                name: 'anel sunshine',
                urfFile: 'images/anel-sunshine-monitorar-golfinho-resgatado-anel-sunshine-monitorar-golfinho-resgatado-bela-wonder-455883_450x.webp'
            })
            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'anel sunshine'))
            const newLi = document.createElement('li')
            newLi.setAttribute("id", 'likedLi')
            newLi.setAttribute("class", "liLiked")

            newLi.innerHTML = Object.values(productsLiked[index])
            list.appendChild(newLi);
            newLi.innerHTML = `<img src="images/anel-sunshine-monitorar-golfinho-resgatado-anel-sunshine-monitorar-golfinho-resgatado-bela-wonder-455883_450x.webp" alt=""> <p>anel sunshine</p>`

            console.log(newLi)
        }
    }
}

function handleHeartIcon3(){
    const heartIcon = document.getElementById('heartIcon3')
    if(heartIcon){
        const list = document.getElementById('listLikes');

        if(heartIcon.classList.contains('fa-solid')){
            heartIcon.classList.add("fa-regular")
            heartIcon.classList.remove("fa-solid")
            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'colar tubarão'))
            productsLiked.splice(index, 1)


            if (list.hasChildNodes()) {
                list.removeChild(list.children[index]);
            }

        } else if(heartIcon.classList.contains('fa-regular')){
            heartIcon.classList.add("fa-solid")
            heartIcon.classList.remove("fa-regular")
            productsLiked.push({
                name: 'colar tubarão',
                urfFile: 'images/colar ocean life.webp'
            })

            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'colar tubarão'))
            const newLi = document.createElement('li')
            newLi.setAttribute("id", 'likedLi')
            newLi.setAttribute("class", "liLiked")

            newLi.innerHTML = Object.values(productsLiked[index])
            list.appendChild(newLi);
            newLi.innerHTML = `<img src="images/colar ocean life.webp" alt=""> <p>colar tubarão</p>`

            console.log(newLi)
        }
    }
}

function searchProducts(){
    var searchInputValue = document.getElementById('searchInput').value

    var result = document.getElementById('resultSearch').innerHTML = allProducts.filter((result) => result.name == searchInputValue)
    console.log(searchInputValue)
    for(var i = 0; i < result.length; i++){
        document.getElementById('resultSearch').innerHTML = `<div class='resultLi'><img src="${result[i].urlfile}" alt=""> <p>${result[i].name}</p></div>`
    }
}

function innerResultSearch() {
    const list = document.getElementById('resultSearch');
    
    for(var i = 0; i< allProducts.length; i++){
        const newLi = document.createElement('li')
        newLi.setAttribute("id", 'resultLi')
        newLi.setAttribute("class", 'resultLi')

        
        newLi.innerHTML = `<img src="${allProducts[i].urlfile}" alt=""> <p>${allProducts[i].name}</p>`
        list.appendChild(newLi);
    }
}

function searchFocus(){
    const list = document.getElementById('resultSearch');
    list.style.display = 'flex'
}

function searchOutFocus(){

    const list = document.getElementById('resultSearch');

    list.style.display = 'none'
}