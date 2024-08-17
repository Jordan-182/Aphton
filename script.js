//  GESTION DU RESPONSIVE DE LA NAV //

const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
}

hamburgerToggler.addEventListener("click" , toggleNav)

new ResizeObserver(entries =>{
    if(entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"}
    else{navLinksContainer.style.transition = "none"}
}).observe(document.body)

// ------------------------------- //

// ----- ANIMATIONS GSAP ----- //

document.addEventListener("DOMContentLoaded", function() {
    // Initialisation de Splitting.js pour séparer les lettres
    Splitting();

    // Animation de chaque lettre avec GSAP
    gsap.from(".slogan span", {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.03,
        ease: "power2.out",
        onStart: function() {
            // Faire apparaître le texte globalement au début de l'animation
            gsap.set(".slogan", { opacity: 1 });
        }
    });
});

//---//

$(document).ready(function(){
    $('.avis-list').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });