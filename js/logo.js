const wrapper = document.getElementById("logo-wrapper");
const mask = document.getElementById("logo-mask");

function updateMask(x, y) {
    mask.style.clipPath = `circle(145px at ${x}px ${y}px)`;   // slightly bigger
}

// Mouse support
wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    updateMask(x, y);
});

wrapper.addEventListener("mouseleave", () => {
    mask.style.clipPath = "circle(0px at 50% 50%)";
});

// Touch support
wrapper.addEventListener("touchmove", (e) => {
    if (e.touches.length === 0) return;
    const rect = wrapper.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    updateMask(x, y);
}, { passive: true });

// Mobile: show full colored logo
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    mask.style.clipPath = "circle(1500px at 50% 50%)";
}
