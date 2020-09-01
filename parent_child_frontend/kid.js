console.log('javascript linked')

const kidDetails = document.querySelector('#kid-details')
const queryParams = new URLSearchParams(window.location.search);
const kidId = queryParams.get('kid_id')
const childOf = document.querySelector('.child-of')

fetch(`http://localhost:3000/kids/${kidId}`)
    .then(response => response.json())
    .then(kid => {
        const title = document.createElement('h1')
        const image = document.createElement('img')
        const name = document.createElement('h3')
        const age = document.createElement('p')
        const parents = document.createElement('p')
        
        title.textContent = `Meet ${kid.name}`
        image.src = kid.image_url
        name.textContent = `${kid.name}`
        age.textContent = `Age: ${kid.age}`

        kidDetails.prepend(title, image, name, age)

        parents.textContent = kid.parents.forEach(parent =>{
            const parentCard = document.createElement('div')
            const parentName = document.createElement('h4')
            const parentTitle = document.createElement('p')
            const image = document.createElement('img')
        
            image.src = parent.image_url
            parentName.innerHTML = `<a href="parent.html?parent_id=${parent.id}">${parent.name}</a>`
            parentTitle.textContent = `${parent.title}`

            childOf.appendChild(parentCard)
            parentCard.append(image, parentName, parentTitle)
        })

    })
