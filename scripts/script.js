var productsLiked = [];

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
            productsLiked.push({name: 'colar ocean life', urfFile: '/images/colar ocean life.jpg'})

            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'colar ocean life'))
            const newLi = document.createElement('li')

            newLi.setAttribute("class", "liLiked")
            newLi.setAttribute("id", 'likedLi')
            newLi.innerHTML = Object.values(productsLiked[index])
            list.appendChild(newLi);
            newLi.innerHTML = `<img src="/images/colar ocean life.jpg" alt=""> <p>colar ocean life</p>`

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
                urfFile: '/images/anel-sunshine-monitorar-golfinho-resgatado-anel-sunshine-monitorar-golfinho-resgatado-bela-wonder-455883_450x.webp'
            })
            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'anel sunshine'))
            const newLi = document.createElement('li')
            newLi.setAttribute("id", 'likedLi')
            newLi.setAttribute("class", "liLiked")

            newLi.innerHTML = Object.values(productsLiked[index])
            list.appendChild(newLi);
            newLi.innerHTML = `<img src="/images/anel-sunshine-monitorar-golfinho-resgatado-anel-sunshine-monitorar-golfinho-resgatado-bela-wonder-455883_450x.webp" alt=""> <p>anel sunshine</p>`

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
                urfFile: '/images/colar ocean life.webp'
            })


            const index = productsLiked.indexOf(productsLiked.find(({name}) => name === 'colar tubarão'))
            const newLi = document.createElement('li')
            newLi.setAttribute("id", 'likedLi')
            newLi.setAttribute("class", "liLiked")

            newLi.innerHTML = Object.values(productsLiked[index])
            list.appendChild(newLi);
            newLi.innerHTML = `<img src="/images/colar ocean life.webp" alt=""> <p>colar tubarão</p>`


            console.log(newLi)
        }
    }
}