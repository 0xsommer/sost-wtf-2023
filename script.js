const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    if (sectionTop < window.innerHeight / 2 && sectionBottom >= window.innerHeight / 2) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});

// Set the first section to be active by default
sections[0].classList.add("active");
