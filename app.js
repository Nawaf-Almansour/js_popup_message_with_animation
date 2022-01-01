// gsap.to('.text', {y: 50,opacity: 0, duration: 1})
// gsap.fromTo('.text', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1})


const tl = gsap.timeline({duration: {duration: 0.75, ease: "power2.out"}})

tl.fromTo('.cookie-container', {scale: 0},{scale: 1})
tl.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-54deg'},{opacity: 1,x: 0,rotation: '0deg'})
tl.fromTo('.text', {opacity: 0, x: 30}, {opacity: 1, x: 0})

tl.fromTo('.cookie', {y:0, rotation: '0deg'}, {y: -20, rotation: '-20deg', yoyo: true, repeat: -1})
tl.fromTo('#crumbs', {y:0}, {y: -20, yoyo: true, repeat: -1}, '<')


const button = document.querySelector('button');
button.addEventListener('click', () =>{
    gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 1, ease: "power1.out"})

})
