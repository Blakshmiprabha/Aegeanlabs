// ============================
// 1. MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// ============================
// 2. INTERACTIVE TRADE JOURNEY
// ============================

const journeyData = {
    order: {
        label: "01 / ORDER",
        title: "Every trade starts with an order.",
        description:
            "A client order flows from a trading platform: MT4, MT5, cTrader or your own."
    },

    harmony: {
        label: "02 / HARMONY",
        title: "Validated in-flight.",
        description:
            "Toxic flow and stale price hits are blocked, and the rest is routed around LP limits."
    },

    riskman: {
        label: "03 / RISKMAN",
        title: "Intelligent algorithmic decisions.",
        description:
            "The algorithm decides within a millisecond how to handle the flow."
    },

    echo: {
        label: "04 / ECHO",
        title: "Everything becomes visible.",
        description:
            "P&L, exposure and client behavior appear on your dashboard in under five milliseconds."
    }
};

const journeySteps = document.querySelectorAll(".journey-step");

journeySteps.forEach(step => {

    step.addEventListener("click", () => {

        // Remove active class from all steps
        journeySteps.forEach(item => {
            item.classList.remove("active");
        });

        // Activate selected step
        step.classList.add("active");

        // Get selected journey data
        const selected = journeyData[step.dataset.step];

        // Update content
        document.getElementById("journeyLabel").textContent =
            selected.label;

        document.getElementById("journeyTitle").textContent =
            selected.title;

        document.getElementById("journeyDescription").textContent =
            selected.description;
    });

});


// ============================
// 3. SCROLL REVEAL ANIMATION
// ============================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}


// ============================
// 4. COPYRIGHT YEAR
// ============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ============================
// 5. WEBSITE LOADED
// ============================

console.log("AegeanLabs website loaded successfully!");