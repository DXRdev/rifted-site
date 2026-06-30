const carousel=document.getElementById("carousel");

let speed=0.6;

let offset=0;

function animateCarousel(){

    offset+=speed;

    if(offset>=carousel.scrollWidth/2){

        offset=0;

    }

    carousel.style.transform=
    `translateX(${-offset}px)`;

    requestAnimationFrame(animateCarousel);

}

animateCarousel();

carousel.addEventListener("mouseenter",()=>{

    speed=0;

});

carousel.addEventListener("mouseleave",()=>{

    speed=.6;

});
