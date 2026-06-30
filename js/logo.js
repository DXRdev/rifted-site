const wrapper = document.getElementById("logo-wrapper");
const mask = document.getElementById("logo-mask");

wrapper.addEventListener("mousemove", (e)=>{

    const rect = wrapper.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mask.style.clipPath =
        `circle(90px at ${x}px ${y}px)`;

});

wrapper.addEventListener("mouseleave", ()=>{

    mask.style.clipPath = "circle(0px at 50% 50%)";

});

wrapper.dispatchEvent(new Event("mouseleave"));
