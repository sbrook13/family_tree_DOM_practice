console.log('javascript linked')

const parentDetails = document.querySelector('#parent-details')
const queryParams = new URLSearchParams(window.location.search);
const parentId = queryParams.get('parent_id')
const parentOf = document.querySelector('.parent-of')

fetch(`http://localhost:3000/parents/${parentId}`)
    .then(response => response.json())
    .then(parent => {
        const header = document.createElement('h1')
        const image = document.createElement('img')
        const name = document.createElement('h3')
        const title = document.createElement('p')
        const kids = document.createElement('p')
        
        header.textContent = `Meet ${parent.name}`
        image.src = parent.image_url
        name.textContent = `${parent.name}`
        title.textContent = `${parent.title}`

        parentDetails.prepend(header, image, name, title)

        kids.textContent = parent.kids.forEach(kid => {
            const kidCard = document.createElement('div')
            const kidName = document.createElement('h4')
            const kidAge = document.createElement('p')
            const image = document.createElement('img')
        
            image.src = kid.image_url
            kidName.innerHTML = `<a href="kid.html?kid_id=${kid.id}">${kid.name}</a>`
            kidAge.textContent = `Age: ${kid.age}`

            parentOf.appendChild(kidCard)
            kidCard.append(image, kidName, kidAge)
        })

    })
