const nav = document.getElementById("nav");
const toggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const iconMenu = document.getElementById("icon-menu");
const iconClose = document.getElementById("icon-close");
const backTop = document.getElementById("back-top");

const revealObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
                revealObs.unobserve(e.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -36px 0px" },
);

document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObs.observe(el));

window.addEventListener(
    "scroll",
    () => {
        const y = window.scrollY;
        nav.classList.toggle("scrolled", y > 40);
        backTop.classList.toggle("visible", y > 500);
    },
    { passive: true },
);

function openMenu(open) {
    navLinks.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    iconMenu.style.display = open ? "none" : "";
    iconClose.style.display = open ? "" : "none";
    document.body.style.overflow = open ? "hidden" : "";
}

toggle.addEventListener("click", () =>
    openMenu(!navLinks.classList.contains("open")),
);
navLinks
    .querySelectorAll("a")
    .forEach((a) =>
        a.addEventListener("click", () => openMenu(false)),
    );

backTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
);
