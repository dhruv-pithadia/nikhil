// // Current card index
// let currentCard = 0;
// const totalCards = 6;

// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function () {
//     // Create particles
//     createParticles();

//     // Create hearts
//     createHearts();

//     // Set up event listeners
//     setupEventListeners();
// });

// // Create particles
// function createParticles() {
//     const particlesContainer = document.getElementById('particles');
//     for (let i = 0; i < 50; i++) {
//         const particle = document.createElement('div');
//         particle.classList.add('particle');
//         particlesContainer.appendChild(particle);
//     }
// }

// // Create hearts
// function createHearts() {
//     const heartsContainer = document.getElementById('hearts');
//     for (let i = 0; i < 30; i++) {
//         const heart = document.createElement('div');
//         heart.classList.add('heart');
//         heartsContainer.appendChild(heart);
//     }
// }

// // Set up event listeners
// function setupEventListeners() {
//     // Gift box click event
//     const giftBox = document.getElementById('giftBox');
//     giftBox.addEventListener('click', openGift);

//     // Arrow click events
//     for (let i = 0; i < totalCards - 1; i++) {
//         const arrow = document.getElementById('arrow' + i);
//         if (arrow) {
//             arrow.addEventListener('click', function () {
//                 nextCard();
//             });
//         }
//     }
// }

// // Open gift animation
// function openGift() {
//     console.log("Gift clicked!"); // Debug log

//     const giftContainer = document.getElementById('giftContainer');
//     const lid = document.getElementById('lid');
//     const progressBar = document.getElementById('progressBar');

//     // Add class to animate lid
//     lid.classList.add('lid-open');

//     // Create particles effect
//     animateParticles();

//     // Hide gift container
//     setTimeout(() => {
//         gsap.to(giftContainer, {
//             opacity: 0,
//             duration: 1,
//             onComplete: () => {
//                 giftContainer.style.display = 'none';
//                 showCard(0);

//                 // Show progress bar
//                 gsap.to(progressBar, {
//                     opacity: 1,
//                     duration: 1,
//                     delay: 0.5
//                 });
//             }
//         });
//     }, 1000); // Wait for lid animation to complete
// }

// // Animate particles
// function animateParticles() {
//     const particles = document.querySelectorAll('.particle');
//     particles.forEach((particle) => {
//         // Random position inside the gift
//         const centerX = window.innerWidth / 2;
//         const centerY = window.innerHeight / 2;

//         // Random destination
//         const angle = Math.random() * Math.PI * 2;
//         const distance = 100 + Math.random() * 400;
//         const destX = centerX + Math.cos(angle) * distance;
//         const destY = centerY + Math.sin(angle) * distance;

//         // Animation timeline
//         gsap.timeline()
//             .set(particle, {
//                 x: centerX,
//                 y: centerY,
//                 opacity: 1,
//                 scale: 0.5 + Math.random()
//             })
//             .to(particle, {
//                 x: destX,
//                 y: destY,
//                 opacity: 0,
//                 duration: 1.5 + Math.random(),
//                 delay: Math.random() * 0.5,
//                 ease: "power2.out"
//             });
//     });
// }

// // Show card function
// function showCard(index) {
//     // Hide all cards first
//     const cards = document.querySelectorAll('.card');
//     cards.forEach(card => {
//         card.style.display = 'none';
//         gsap.set(card, { opacity: 0, y: 30 });
//     });

//     // Show the selected card
//     const card = document.getElementById('card' + index);
//     card.style.display = 'block';

//     // Animate the card
//     gsap.to(card, {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power2.out"
//     });

//     // Update progress dots
//     updateProgressDots(index);

//     // If it's the last card, show the final message and animate hearts
//     if (index === totalCards - 1) {
//         const finalMessage = document.getElementById('finalMessage');
//         gsap.to(finalMessage, {
//             opacity: 1,
//             duration: 1,
//             delay: 1
//         });

//         animateHearts();
//     }
// }

// // Next card function
// function nextCard() {
//     currentCard++;
//     if (currentCard < totalCards) {
//         showCard(currentCard);
//     }
// }

// // Update progress dots
// function updateProgressDots(index) {
//     const dots = document.querySelectorAll('.progress-dot');
//     dots.forEach((dot, i) => {
//         if (i <= index) {
//             dot.classList.add('active');
//         } else {
//             dot.classList.remove('active');
//         }
//     });
// }

// // Animate hearts
// function animateHearts() {
//     const hearts = document.querySelectorAll('.heart');
//     hearts.forEach((heart) => {
//         const delay = Math.random() * 5;
//         const duration = 3 + Math.random() * 3;
//         const x = Math.random() * window.innerWidth;
//         const startY = window.innerHeight + 20;
//         const destY = -100;

//         gsap.set(heart, {
//             x: x,
//             y: startY,
//             scale: 0.5 + Math.random() * 1.5,
//             opacity: 0
//         });

//         gsap.to(heart, {
//             y: destY,
//             opacity: 0.7,
//             duration: duration,
//             delay: delay,
//             repeat: -1,
//             repeatDelay: Math.random() * 3,
//             ease: "power1.out",
//             onStart: () => {
//                 gsap.to(heart, {
//                     opacity: 0,
//                     duration: duration * 0.3,
//                     delay: duration * 0.7 + delay,
//                     ease: "power1.in"
//                 });
//             }
//         });
//     });
// }

// // --- In your script.js --- //

// // Modify the end of openGift():
// function openGift() {
//     console.log("Gift clicked!");
//     const giftContainer = document.getElementById('giftContainer');
//     const lid = document.getElementById('lid');
//     const progressBar = document.getElementById('progressBar');

//     gsap.to(lid, {
//         rotateX: -110,
//         duration: 1,
//         ease: "back.out(1.7)",
//     });

//     // Animate particles (as before)
//     animateParticles();

//     // Hide gift container then start slider sequence
//     gsap.to(giftContainer, {
//         opacity: 0,
//         duration: 1,
//         delay: 1,
//         onComplete: () => {
//             giftContainer.remove();
//             showSlider();  // NEW: show the emotional slider
//             // Optionally, show progressBar here if needed:
//             if (progressBar) {
//                 gsap.to(progressBar, {
//                     opacity: 1,
//                     duration: 1,
//                     delay: 0.5
//                 });
//             }
//         }
//     });
// }

// // NEW: Function to show the emotional slider sequence
// function showSlider() {
//     const slider = document.getElementById("sliderContainer");
//     slider.style.display = "flex";
//     const sliderText = document.querySelector(".slider-text");
//     const images = document.querySelectorAll(".slider-image");

//     // Create a timeline: first, fade in the text, then animate each image
//     let tl = gsap.timeline({
//         onComplete: () => {
//             // Remove slider once done and show cards
//             slider.remove();
//             showCard(0);
//         }
//     });
//     // Animate text
//     tl.fromTo(sliderText, { opacity: 0 }, { opacity: 1, duration: 1 })
//         .to(sliderText, { opacity: 0, duration: 1, delay: 1 });

//     // Cycle through each image in sequence
//     images.forEach((img) => {
//         tl.fromTo(img, { opacity: 0 }, { opacity: 1, duration: 1 });
//         tl.to(img, { opacity: 0, duration: 1, delay: 1 });
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const sliderContainer = document.getElementById('sliderContainer');
//     const slides = document.querySelectorAll('.slider-content');
//     const indicators = document.querySelectorAll('.indicator');
//     const prevBtn = document.getElementById('prevSlide');
//     const nextBtn = document.getElementById('nextSlide');
//     const continueBtn = document.getElementById('continueAfterSlider');

//     let currentSlide = 0;
//     let isAnimating = false;
//     const totalSlides = slides.length;

//     // Function to show slider with animation
//     function showSlider() {
//         sliderContainer.style.display = 'flex';
//         setTimeout(() => {
//             sliderContainer.classList.add('visible');
//         }, 100);

//         // Animate the first slide elements
//         showSlide(0);
//     }

//     // Function to go to a specific slide
//     function showSlide(index) {
//         if (isAnimating) return;
//         isAnimating = true;

//         // Remove active class from all slides
//         slides.forEach((slide, i) => {
//             slide.classList.remove('active');
//             if (i < index) {
//                 slide.classList.add('prev');
//             } else {
//                 slide.classList.remove('prev');
//             }
//             indicators[i].classList.remove('active');
//         });

//         // Add active class to current slide
//         slides[index].classList.add('active');
//         indicators[index].classList.add('active');

//         currentSlide = index;

//         // Enable animation for next slide
//         setTimeout(() => {
//             isAnimating = false;
//         }, 800);
//     }

//     // Next slide function
//     function nextSlide() {
//         const next = (currentSlide + 1) % totalSlides;
//         showSlide(next);
//     }

//     // Previous slide function
//     function prevSlide() {
//         const prev = (currentSlide - 1 + totalSlides) % totalSlides;
//         showSlide(prev);
//     }

//     // Add event listeners
//     nextBtn.addEventListener('click', nextSlide);
//     prevBtn.addEventListener('click', prevSlide);

//     // Indicator click events
//     indicators.forEach((indicator, index) => {
//         indicator.addEventListener('click', () => {
//             showSlide(index);
//         });
//     });

//     // Continue button event - connect to your next section
//     continueBtn.addEventListener('click', function () {
//         // Fade out slider
//         sliderContainer.classList.remove('visible');

//         // Wait for fade out animation
//         setTimeout(() => {
//             sliderContainer.style.display = 'none';

//             // Show gift container (or your next section)
//             const giftContainer = document.getElementById('giftContainer');
//             if (giftContainer) {
//                 giftContainer.style.display = 'block';
//                 setTimeout(() => {
//                     giftContainer.style.opacity = 1;
//                 }, 100);
//             }
//         }, 1000);
//     });

//     // Auto slide change every 5 seconds
//     let slideInterval = setInterval(nextSlide, 5000);

//     // Pause auto slide on hover
//     sliderContainer.addEventListener('mouseenter', () => {
//         clearInterval(slideInterval);
//     });

//     // Resume auto slide on mouse leave
//     sliderContainer.addEventListener('mouseleave', () => {
//         slideInterval = setInterval(nextSlide, 5000);
//     });

//     // Initialize the slider with a slight delay
//     setTimeout(showSlider, 500);
// });


// // Current card index
// let currentCard = 0;
// const totalCards = 6;

// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function () {
//     createParticles();
//     createHearts();
//     setupEventListeners();
// });

// // Create particles
// function createParticles() {
//     const particlesContainer = document.getElementById('particles');
//     for (let i = 0; i < 50; i++) {
//         const particle = document.createElement('div');
//         particle.classList.add('particle');
//         particlesContainer.appendChild(particle);
//     }
// }

// // Create hearts
// function createHearts() {
//     const heartsContainer = document.getElementById('hearts');
//     for (let i = 0; i < 30; i++) {
//         const heart = document.createElement('div');
//         heart.classList.add('heart');
//         heartsContainer.appendChild(heart);
//     }
// }

// // Set up event listeners
// function setupEventListeners() {
//     // Gift box click event
//     const giftBox = document.getElementById('giftBox');
//     giftBox.addEventListener('click', openGift);

//     // Arrow click events for cards
//     for (let i = 0; i < totalCards - 1; i++) {
//         const arrow = document.getElementById('arrow' + i);
//         if (arrow) {
//             arrow.addEventListener('click', function () {
//                 nextCard();
//             });
//         }
//     }
// }

// // Open gift animation
// function openGift() {
//     console.log("Gift clicked!");
//     const giftContainer = document.getElementById('giftContainer');
//     const lid = document.getElementById('lid');
//     const progressBar = document.getElementById('progressBar');

//     gsap.to(lid, {
//         rotateX: -110,
//         duration: 1,
//         ease: "back.out(1.7)",
//     });

//     animateParticles();

//     // Hide gift container then start the slider sequence
//     gsap.to(giftContainer, {
//         opacity: 0,
//         duration: 1,
//         delay: 1,
//         onComplete: () => {
//             giftContainer.remove();
//             showSlider(); // Show emotional slider after gift
//             if (progressBar) {
//                 gsap.to(progressBar, {
//                     opacity: 1,
//                     duration: 1,
//                     delay: 0.5
//                 });
//             }
//         }
//     });
// }

// // Animate particles (as before)
// function animateParticles() {
//     const particles = document.querySelectorAll('.particle');
//     particles.forEach((particle) => {
//         const centerX = window.innerWidth / 2;
//         const centerY = window.innerHeight / 2;
//         const angle = Math.random() * Math.PI * 2;
//         const distance = 100 + Math.random() * 400;
//         const destX = centerX + Math.cos(angle) * distance;
//         const destY = centerY + Math.sin(angle) * distance;

//         gsap.timeline()
//             .set(particle, {
//                 x: centerX,
//                 y: centerY,
//                 opacity: 1,
//                 scale: 0.5 + Math.random()
//             })
//             .to(particle, {
//                 x: destX,
//                 y: destY,
//                 opacity: 0,
//                 duration: 1.5 + Math.random(),
//                 delay: Math.random() * 0.5,
//                 ease: "power2.out"
//             });
//     });
// }

// // Show slider sequence
// function showSlider() {
//     const slider = document.getElementById("sliderContainer");
//     slider.style.display = "flex";
//     // Fade in slider
//     gsap.to(slider, { opacity: 1, duration: 1 });

//     const sliderText = document.querySelector(".slider-text");
//     const images = document.querySelectorAll(".slider-image");

//     let tl = gsap.timeline({
//         onComplete: showContinueButton  // Instead of auto-removing, show a continue button
//     });

//     // Animate the text of the first slide
//     tl.fromTo(sliderText, { opacity: 0 }, { opacity: 1, duration: 1 })
//         .to(sliderText, { opacity: 0, duration: 1, delay: 1 });

//     // Cycle through each slider image sequentially
//     images.forEach((img) => {
//         tl.fromTo(img, { opacity: 0 }, { opacity: 1, duration: 1 });
//         tl.to(img, { opacity: 0, duration: 1, delay: 1 });
//     });
// }

// // Show a "Continue" button at the end of the slider
// function showContinueButton() {
//     const slider = document.getElementById("sliderContainer");
//     const btn = document.createElement("button");
//     btn.classList.add("continue-button");
//     btn.textContent = "Continue";
//     btn.addEventListener("click", () => {
//         // Remove slider and show cards
//         gsap.to(slider, {
//             opacity: 0,
//             duration: 0.5,
//             onComplete: () => {
//                 slider.remove();
//                 showCard(0);
//             }
//         });
//     });
//     slider.appendChild(btn);
//     // Reveal the button with animation
//     gsap.to(btn, { opacity: 1, duration: 0.5, delay: 0.2 });
// }

// // Show card function
// function showCard(index) {
//     const cards = document.querySelectorAll('.card');
//     cards.forEach(card => {
//         card.style.display = 'none';
//         gsap.set(card, { opacity: 0, y: 30 });
//     });
//     const card = document.getElementById('card' + index);
//     card.style.display = 'block';
//     gsap.to(card, {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power2.out"
//     });
//     updateProgressDots(index);
//     if (index === totalCards - 1) {
//         const finalMessage = document.getElementById('finalMessage');
//         gsap.to(finalMessage, { opacity: 1, duration: 1, delay: 1 });
//         animateHearts();
//     }
// }

// // Next card function
// function nextCard() {
//     currentCard++;
//     if (currentCard < totalCards) {
//         showCard(currentCard);
//     }
// }
// window.nextCard = nextCard; // Ensure nextCard is globally accessible

// // Update progress dots
// function updateProgressDots(index) {
//     const dots = document.querySelectorAll('.progress-dot');
//     dots.forEach((dot, i) => {
//         if (i <= index) {
//             dot.classList.add('active');
//         } else {
//             dot.classList.remove('active');
//         }
//     });
// }

// // Animate hearts
// function animateHearts() {
//     const hearts = document.querySelectorAll('.heart');
//     hearts.forEach((heart) => {
//         const delay = Math.random() * 5;
//         const duration = 3 + Math.random() * 3;
//         const x = Math.random() * window.innerWidth;
//         const startY = window.innerHeight + 20;
//         const destY = -100;
//         gsap.set(heart, { x: x, y: startY, scale: 0.5 + Math.random() * 1.5, opacity: 0 });
//         gsap.to(heart, {
//             y: destY,
//             opacity: 0.7,
//             duration: duration,
//             delay: delay,
//             repeat: -1,
//             repeatDelay: Math.random() * 3,
//             ease: "power1.out",
//             onStart: () => {
//                 gsap.to(heart, {
//                     opacity: 0,
//                     duration: duration * 0.3,
//                     delay: duration * 0.7 + delay,
//                     ease: "power1.in"
//                 });
//             }
//         });
//     });
// }

// Current card index
let currentCard = 0;
const totalCards = 6;
let currentSlide = 0;
const totalSlides = 4; // Based on your HTML structure

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    createHearts();
    setupEventListeners();
    setupSlider();
});

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particlesContainer.appendChild(particle);
    }
}

// Create hearts
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heartsContainer.appendChild(heart);
    }
}

// Set up event listeners
function setupEventListeners() {
    // Gift box click event
    const giftBox = document.getElementById('giftBox');
    giftBox.addEventListener('click', openGift);

    // Arrow click events for cards
    for (let i = 0; i < totalCards - 1; i++) {
        const arrow = document.getElementById('arrow' + i);
        if (arrow) {
            arrow.addEventListener('click', nextCard);
        }
    }
}

// Set up slider navigation
function setupSlider() {
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const indicators = document.querySelectorAll('.indicator');

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Add click events to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
}

// Open gift animation
function openGift() {
    console.log("Gift clicked!");

    // Play background music on loop
    const audio = document.getElementById('backgroundMusic');
    audio.play();

    const giftContainer = document.getElementById('giftContainer');
    const lid = document.getElementById('lid');
    const progressBar = document.getElementById('progressBar');

    gsap.to(lid, {
        rotateX: -110,
        duration: 1,
        ease: "back.out(1.7)",
    });

    animateParticles();

    // Hide gift container then start the slider sequence
    gsap.to(giftContainer, {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete: () => {
            giftContainer.style.display = 'none';
            showSlider();  // Show emotional slider after gift
            if (progressBar) {
                gsap.to(progressBar, {
                    opacity: 1,
                    duration: 1,
                    delay: 0.5
                });
            }
        }
    });
}

// Animate particles
function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 400;
        const destX = centerX + Math.cos(angle) * distance;
        const destY = centerY + Math.sin(angle) * distance;

        gsap.timeline()
            .set(particle, {
                x: centerX,
                y: centerY,
                opacity: 1,
                scale: 0.5 + Math.random()
            })
            .to(particle, {
                x: destX,
                y: destY,
                opacity: 0,
                duration: 1.5 + Math.random(),
                delay: Math.random() * 0.5,
                ease: "power2.out"
            });
    });
}

// Show slider
function showSlider() {
    const sliderContainer = document.getElementById('sliderContainer');
    sliderContainer.style.display = 'flex';

    // Fade in the slider
    gsap.to(sliderContainer, {
        opacity: 1,
        duration: 1,
        onComplete: () => {
            // Set first slide as active
            goToSlide(0);

            // Add continue button to the slider
            addContinueButton();
        }
    });
}

// Add continue button to slider
function addContinueButton() {
    const sliderContainer = document.getElementById('sliderContainer');
    if (!document.querySelector('.continue-button')) {
        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-button');
        continueBtn.textContent = 'Continue to Cards';
        continueBtn.addEventListener('click', () => {
            // Transition from slider to cards
            const sliderContainer = document.getElementById('sliderContainer');
            gsap.to(sliderContainer, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    sliderContainer.style.display = 'none';
                    showCard(0);
                }
            });
        });

        // Position the button at the bottom
        continueBtn.style.position = 'absolute';
        continueBtn.style.bottom = '20px';
        continueBtn.style.left = '50%';
        continueBtn.style.transform = 'translateX(-50%)';
        continueBtn.style.padding = '12px 24px';
        continueBtn.style.backgroundColor = '#ff6b81';
        continueBtn.style.color = 'white';
        continueBtn.style.border = 'none';
        continueBtn.style.borderRadius = '30px';
        continueBtn.style.cursor = 'pointer';
        continueBtn.style.fontFamily = 'Montserrat, sans-serif';
        continueBtn.style.fontWeight = 'bold';
        continueBtn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        continueBtn.style.transition = 'all 0.3s ease';

        sliderContainer.appendChild(continueBtn);

        // Animate button in
        gsap.from(continueBtn, {
            opacity: 1,
            y: 20,
            duration: 0.5,
            delay: 0.5
        });
    }
}

// Navigate to a specific slide
function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    // Update current slide index
    currentSlide = index;

    // Update all slides and indicators
    const slides = document.querySelectorAll('.slider-content');
    const indicators = document.querySelectorAll('.indicator');

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show current slide
    slides[index].classList.add('active');

    // Update indicators
    indicators.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Animate content of the current slide
    const currentText = slides[index].querySelector('.slider-text');
    const currentImage = slides[index].querySelector('.slider-image');

    // Reset and animate text
    gsap.fromTo(currentText,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Reset and animate image
    gsap.fromTo(currentImage,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: "power2.out" }
    );
}

// Go to next slide
function nextSlide() {
    goToSlide((currentSlide + 1) % totalSlides);
}

// Go to previous slide
function prevSlide() {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

// Show card function
function showCard(index) {
    // Hide all cards first
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'none';
        gsap.set(card, { opacity: 0, y: 30 });
    });

    // Show the selected card
    const card = document.getElementById('card' + index);
    card.style.display = 'block';

    // Animate the card
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    // Update progress dots
    updateProgressDots(index);

    // If it's the last card, show final message and animate hearts
    if (index === totalCards - 1) {
        const finalMessage = document.getElementById('finalMessage');
        gsap.to(finalMessage, {
            opacity: 1,
            duration: 1,
            delay: 1
        });
        animateHearts();
    }
}

// Next card function
function nextCard() {
    currentCard++;
    if (currentCard < totalCards) {
        showCard(currentCard);
    }
}

// Update progress dots
function updateProgressDots(index) {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, i) => {
        if (i <= index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Animate hearts
function animateHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart) => {
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 3;
        const x = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 20;
        const destY = -100;

        gsap.set(heart, {
            x: x,
            y: startY,
            scale: 0.5 + Math.random() * 1.5,
            opacity: 0
        });

        gsap.to(heart, {
            y: destY,
            opacity: 0.7,
            duration: duration,
            delay: delay,
            repeat: -1,
            repeatDelay: Math.random() * 3,
            ease: "power1.out",
            onStart: () => {
                gsap.to(heart, {
                    opacity: 0,
                    duration: duration * 0.3,
                    delay: duration * 0.7 + delay,
                    ease: "power1.in"
                });
            }
        });
    });
}

