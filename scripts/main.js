import { projects, projectsLayout } from "./projectsLayout.js";

const projectsContainer = document.querySelector("#projects-container");
projectsContainer.insertAdjacentHTML("beforeend", projectsLayout);

projects.forEach((project) => {
  const swiper = new Swiper(`#${project.stackSwiperID}`, {
    direction: "horizontal",
    slidesPerView: "auto",
    slidesPerGroup: 2,
    spaceBetween: 10,

    navigation: {
      nextEl: `#${project.stackSwiperBtnNextID}`,
      prevEl: `#${project.stackSwiperBtnPrevID}`,
    },
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("#header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
