const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c HI', 'color: firebrick')
    const ul = document.querySelector("#dog-breeds")
    
    // adds random 4 photos to DOM
    fetch(imgUrl)
        .then(r => r.json())
        .then(images => {
            const dogs = images.message
            const imgContainer = document.getElementById("dog-image-container")

            dogs.forEach(dog => {
                // makes a new img tag for each element
                const img = document.createElement('img')
                // adds the URL we get from the JSON object as the img src
                img.src = dog
                // appends to the dog image container
                imgContainer.appendChild(img)
            })
        })
    
    // adds list of breeds to DOM
    fetch(breedUrl)
        .then(r => r.json())
        .then(breedList => {
            const ul = document.querySelector("#dog-breeds")
            const breeds = breedList.message
            for (const breed in breeds) {
                const li = document.createElement('li')
                li.innerHTML = breed
                ul.appendChild(li)
            }
    })

    // changes color of clicked element in dog-breeds list
    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI'){
            e.target.setAttribute('style', 'color: red;')
        }
    })

})
