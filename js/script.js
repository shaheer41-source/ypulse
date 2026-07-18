// YMAX JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // Highlight active navigation
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Contact form only
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Thank you! Your message has been received.");

            contactForm.reset();

        });

    }

});
