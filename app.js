const items = document.querySelectorAll('.item')
const vehicles = document.querySelector('.vehicles')
const energys = document.querySelector('.energy')
const chargings = document.querySelector('.charging')
const discovers = document.querySelector('.discover')
const shops = document.querySelector('.shop')
items[0].addEventListener("mouseenter", ()=>{
    vehicles.style.height = "400px"
}
)

vehicles.addEventListener("mouseleave", ()=>{
    vehicles.style.height = "0"
})

items[1].addEventListener("mouseenter", ()=>{
    energys.style.height = "400px"
}
)

energys.addEventListener("mouseleave", ()=>{
    energys.style.height = "0"
})

items[2].addEventListener("mouseenter", ()=>{
    chargings.style.height = "400px"
}
)

chargings.addEventListener("mouseleave", ()=>{
    chargings.style.height = "0"
})

items[3].addEventListener("mouseenter", ()=>{
    discovers.style.height = "400px"
}
)

discovers.addEventListener("mouseleave", ()=>{
    discovers.style.height = "0"
})

items[4].addEventListener("mouseenter", ()=>{
    shops.style.height = "400px"
}
)

shops.addEventListener("mouseleave", ()=>{
    shops.style.height = "0"
})