
gsap.registerPlugin(ScrollTrigger);
Shery.mouseFollower();
Shery.makeMagnet(".magnet, .logo", {
    ease: 0.8,
    duration: 1
});
Shery.hoverWithMediaCircle(".headings h1", {
    videos: [
        "./vedios/0.mp4",
        "./vedios/2.mp4",
        "./vedios/3.mp4"
    ]
});


// HOME ANIMATIONS

gsap.from("#homemain h5", {
    y: 40,
    opacity: 0,
    duration: 1
});

gsap.from(".headings h1", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

gsap.from("#homelast p", {
    y: 40,
    opacity: 0,
    duration: 1
});


// FEATURED PROJECTS
// FEATURED PROJECTS + SHERY WAVE EFFECT

const sections = document.querySelectorAll(".fleftelm");

// Left side scroll and pin animation
gsap.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: "none",

    scrollTrigger: {
        trigger: "#fimages",
        start: "top top",
        end: () => "+=" + window.innerHeight * (sections.length - 1),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
    }
});

// Shery wave effect
Shery.imageEffect(".images", {
    style: 4,

    config: {
        onMouse: {
            value: 1
        }
    },

    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: 1,

                onUpdate: function (progress) {
                    setScroll(index + progress.progress);
                }
            });

        });
    }
});
// FEATURED HEADING

gsap.from(".fheading h1", {
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#featured",
        start: "top 70%"
    }
});


// DEVELOPMENT ANIMATION

gsap.from("#dev h1", {
    y: 70,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#dev",
        start: "top 80%"
    }
});

gsap.from("#dev p", {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#dev",
        start: "top 75%"
    }
});


// RESOURCE CARDS

gsap.from(".slide", {
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#slides",
        start: "top 80%"
    }
});


// MAGNET HOVER EFFECT

document.querySelectorAll(".magnet").forEach((element) => {

    element.addEventListener("mousemove", function (event) {

        const rect = element.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(element, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3
        });

    });

    element.addEventListener("mouseleave", function () {

        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.3
        });

    });

});


// REFRESH SCROLLTRIGGER

window.addEventListener("load", function () {
    ScrollTrigger.refresh();
});

// FULL SCREEN MENU ANIMATION

const menu = document.querySelector("#full");
const menuIcon = document.querySelector("#nav .ri-menu-line");
const closeBtn = document.querySelector("#close");

const menuTimeline = gsap.timeline({
    paused: true
});

menuTimeline.to("#full", {
    right: 0,
    duration: 0.8,
    ease: "power3.inOut"
});

menuTimeline.from(".menu-links h1", {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15
}, "-=0.3");

menuIcon.addEventListener("click", function () {
    menuTimeline.play();
});

closeBtn.addEventListener("click", function () {
    menuTimeline.reverse();
});
// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".menu-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        menuTimeline.reverse();
    });

});

// CONTACT FORM

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const message = document.querySelector("#message").value;

    const subject = encodeURIComponent("New Website Inquiry");

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\nMessage: " + message
    );

    window.location.href =
        "mailto:your@email.com?subject=" + subject + "&body=" + body;
});
