// YMAX JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to YMAX");

    // Highlight current navigation link
    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    // Contact form (demo)
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Thank you! Your message has been received.");

            form.reset();
        });
    }
});
