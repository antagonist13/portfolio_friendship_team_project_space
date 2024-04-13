
const faqs = document.querySelectorAll(".faq-accordion");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
