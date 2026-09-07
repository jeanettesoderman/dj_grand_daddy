// DJ Grand Daddy Website JavaScript

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Add active class to current navigation link
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

// Glitch effect for hero title
const glitchText = document.querySelector(".glitch");

if (glitchText) {
    setInterval(() => {
        glitchText.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #00ffff,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff00ff
        `;

        setTimeout(() => {
            glitchText.style.textShadow = `
                0 0 10px var(--primary-color),
                0 0 20px var(--primary-color),
                0 0 30px var(--primary-color)
            `;
        }, 50);
    }, 3000);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe elements for animation
document
    .querySelectorAll(".genre-card, .video-card, .stat-card")
    .forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(el);
    });

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.style.background = "rgba(10, 10, 10, 0.98)";
        } else {
            navbar.style.background = "rgba(10, 10, 10, 0.95)";
        }
    });
}