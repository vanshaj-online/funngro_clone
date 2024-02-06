let stripe = document.querySelector('.stripe');
let nav = document.querySelector('nav')
let header = document.querySelector('header')

const observer = new IntersectionObserver((entry) =>{
    entry.forEach((elem) =>{
        nav.style.transform = 'translatey(0px)'
        nav.style.position = 'static'
        if(!elem.intersectionRatio == 1){
            nav.style.position = 'fixed'
            nav.style.transform = 'translatey(-30px)'
            console.log('hey')
        }
    })
})

observer.observe(stripe)