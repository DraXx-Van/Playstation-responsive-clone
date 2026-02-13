
// Feature 1 & 6: Sign In Modal
document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.querySelector('.badge-btn');
    const modal = document.getElementById('signin-modal');
    const closeModal = document.querySelector('.close-modal');
    const signinForm = document.getElementById('signin-form');

    if (signInBtn && modal) {
        console.log("Sign In Button and Modal found");
        signInBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default if it's a form submit or link
            console.log("Sign In Button clicked");
            modal.classList.remove('hidden');
        });
    } else {
        console.error("Sign In Button or Modal NOT found", { signInBtn, modal });
    }

    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    // Close on click outside
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.add('hidden');
        }
    });

    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signin-name').value;
            const email = document.getElementById('signin-email').value;

            if (name && email) {
                alert(`Welcome back, ${name}!\nWe have sent a verification code to ${email}.`);
                modal.classList.add('hidden');
                signinForm.reset();
            }
        });
    }

    // Feature 4: Show / Hide Sections (Mobile Menu)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links'); // Changed from .nav-items to .nav-links

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle active on nav-links
            // Toggle icon between bars and times (X)
            if (navLinks.classList.contains('active')) {
                menuToggle.classList.remove('fa-bars');
                menuToggle.classList.add('fa-times');
            } else {
                menuToggle.classList.remove('fa-times');
                menuToggle.classList.add('fa-bars');
            }
        });
    }

    // Feature 3: Dynamic Content Change (Game Grid Toggle)
    const newReleasesBtn = document.getElementById('btn-new-releases');
    const comingSoonBtn = document.getElementById('btn-coming-soon');
    const newReleasesGrid = document.getElementById('grid-new-releases');
    const comingSoonGrid = document.getElementById('grid-coming-soon');

    if (newReleasesBtn && comingSoonBtn && newReleasesGrid && comingSoonGrid) {
        newReleasesBtn.addEventListener('click', () => {
            // Activate button
            newReleasesBtn.style.backgroundColor = 'white';
            newReleasesBtn.style.color = 'black';
            comingSoonBtn.style.backgroundColor = 'transparent';
            comingSoonBtn.style.color = 'white';

            // Show grid
            newReleasesGrid.classList.remove('hidden');
            comingSoonGrid.classList.add('hidden');
        });

        comingSoonBtn.addEventListener('click', () => {
            // Activate button
            comingSoonBtn.style.backgroundColor = 'white';
            comingSoonBtn.style.color = 'black';
            newReleasesBtn.style.backgroundColor = 'transparent';
            newReleasesBtn.style.color = 'white';


            // Show grid
            comingSoonGrid.classList.remove('hidden');
            newReleasesGrid.classList.add('hidden');
        });
    }

    // Feature 2: Form Validation (Newsletter)
    const newsletterForm = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const errorMsg = document.getElementById('newsletter-error');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "") {
                errorMsg.textContent = "Please enter your email address.";
                errorMsg.style.color = "red";
                emailInput.style.borderColor = "red";
                return;
            }

            if (!emailRegex.test(email)) {
                errorMsg.textContent = "Please enter a valid email address.";
                errorMsg.style.color = "red";
                emailInput.style.borderColor = "red";
                return;
            }

            // Success
            errorMsg.textContent = "Thank you for subscribing!";
            errorMsg.style.color = "#0070cc"; // PlayStation Blue
            emailInput.style.borderColor = "#0070cc";
            emailInput.value = "";

            // Optional: clear message after a few seconds
            setTimeout(() => {
                errorMsg.textContent = "";
                emailInput.style.borderColor = "transparent";
            }, 3000);
        });
    }

    // Feature 5: Hero Image Switcher
    const heroSection = document.querySelector('.hero');
    const heroCards = document.querySelectorAll('.cards-hero .card-bg');

    if (heroSection && heroCards.length > 0) {
        heroCards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                if (img) {
                    const newSrc = img.src;
                    // Preserve the gradient defined in CSS
                    const gradient = `linear-gradient(
                        to right,
                        rgba(0,0,0,0.85) 0%,
                        rgba(0,0,0,0.6) 15%,
                        rgba(0,0,0,0.2) 60%,
                        rgba(0,0,0,0) 100%
                    )`;
                    heroSection.style.backgroundImage = `${gradient}, url("${newSrc}")`;
                }
            });
        });
    }
});
