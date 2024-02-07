let stripe = document.querySelector('.stripe');
let nav = document.querySelector('nav')
let header = document.querySelector('header')
let prevBtn = document.querySelector('[data-left-btn]')
let nextBtn = document.querySelector('[data-right-btn]')
let slides = document.querySelectorAll('.project-section-slides')
let counter = 0;


prevBtn.addEventListener('click', () => {
    slides.forEach((e) =>{
         e.scrollBy({
             left : -27 * 16,
             behavior: "smooth"
         });
     })
})
nextBtn.addEventListener('click', () => {
    slides.forEach((e) =>{
         e.scrollBy({
             left : 27 * 16,
             behavior: "smooth"
         });
     })
})



const observer = new IntersectionObserver((entry) =>{
    entry.forEach((elem) =>{
        nav.style.transform = 'translatey(0px)'
        nav.style.position = 'static'
        if(!elem.intersectionRatio == 1){
            nav.style.position = 'fixed'
            nav.style.transform = 'translatey(-30px)'
        }
    })
})

observer.observe(stripe)
