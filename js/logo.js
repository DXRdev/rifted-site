const wrapper = document.getElementById("logo-wrapper");
const white = document.getElementById("logo-white");
const glow = document.getElementById("logo-reveal");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

wrapper.addEventListener("mousemove", e => {

    const rect = wrapper.getBoundingClientRect();

    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

});

wrapper.addEventListener("mouseleave",()=>{

    mouseX = wrapper.offsetWidth/2;
    mouseY = wrapper.offsetHeight/2;

});

function animateLogo(){

    currentX += (mouseX-currentX)*0.15;
    currentY += (mouseY-currentY)*0.15;

    white.style.webkitMaskImage =
    `radial-gradient(circle 90px at ${currentX}px ${currentY}px,
    transparent 0,
    transparent 90px,
    black 110px)`;

    white.style.maskImage =
    `radial-gradient(circle 90px at ${currentX}px ${currentY}px,
    transparent 0,
    transparent 90px,
    black 110px)`;

    glow.style.left=(currentX-90)+"px";
    glow.style.top=(currentY-90)+"px";

    const rotateY=((currentX-wrapper.offsetWidth/2)/wrapper.offsetWidth)*6;

    const rotateX=((currentY-wrapper.offsetHeight/2)/wrapper.offsetHeight)*-6;

    wrapper.style.transform=
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    requestAnimationFrame(animateLogo);

}

mouseX=wrapper.offsetWidth/2;
mouseY=wrapper.offsetHeight/2;

animateLogo();
