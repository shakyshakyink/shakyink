document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel-container");
    
    carousels.forEach(container => {
        const carousel = container.querySelector(".carousel");
        const prevButton = container.querySelector(".prev");
        const nextButton = container.querySelector(".next");

        let scrollAmount = 0;
        const scrollStep = 320; // Adjust for image size
        
        nextButton.addEventListener("click", () => {
            if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount += scrollStep;
                carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
            }
        });

        prevButton.addEventListener("click", () => {
            if (scrollAmount > 0) {
                scrollAmount -= scrollStep;
                carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
            }
        });
    });
});
