console.log('javascript linked')

const parentSection = document.querySelector('.parents')
const kidSection = document.querySelector('.kids')

fetch('http://localhost:3000/kids')
    .then(response => response.json())
    .then(kids => kids.forEach(kid => {
        const kidCard = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h3')
        const age = document.createElement('p')
        
        kidCard.className = 'card'
        image.src = kid.image_url
        name.innerHTML = `<a href="kid.html?kid_id=${kid.id}">${kid.name}</a>`
        age.textContent = `Age: ${kid.age}`

        kidSection.appendChild(kidCard)
        kidCard.append(image, name, age)
    }))


fetch('http://localhost:3000/parents')
    .then(response => response.json())
    .then(parents => parents.forEach(parent => {
        const parentCard = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h3')
        const title = document.createElement('p')
        
        parentCard.className = 'card'
        image.src = parent.image_url
        name.innerHTML = `<a href="parent.html?parent_id=${parent.id}">${parent.name}</a>`
        title.textContent = `${parent.title}`

        parentSection.appendChild(parentCard)
        parentCard.append(image, name, title)
    }))

