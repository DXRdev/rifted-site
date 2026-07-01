const carousel = document.getElementById("carousel");
let offset = 0;
let speed = 0.8;
let isPaused = false;

function animate() {
    if (!isPaused) {
        offset += speed;

        if (offset >= carousel.scrollWidth / 2) {
            offset = 0;
        }

        carousel.style.transform = `translateX(${-offset}px)`;
    }
    requestAnimationFrame(animate);
}

animate();

// Pause on hover or touch
carousel.addEventListener("mouseenter", () => isPaused = true);
carousel.addEventListener("mouseleave", () => isPaused = false);

carousel.addEventListener("touchstart", () => isPaused = true, { passive: true });
carousel.addEventListener("touchend", () => isPaused = false, { passive: true });
