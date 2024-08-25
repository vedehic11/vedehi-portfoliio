

ScrollReveal().reveal('.home-cont,heading',{origin : 'top'});
ScrollReveal().reveal('.home-img, .service-cont,port-box,contact form',{origin:'button'})
ScrollReveal().reveal('.home-cont h1, .about-img',{origin :'left'});
ScrollReveal().reveal('.home-cont p, .about-img',{origin :'right'});

const typed = new Typed('.multiple-text',{
    strings : ['Frontend Developer','Web Designer'],
    typeSpeed : 70,
    backSpeed : 70,
    backDelay : 1000,
    loop: true,
});