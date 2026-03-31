export const projects = [
  {
    imageSrc: "./images/projects/future_tech.png",
    imageAlt: "Future-tech wallpaper",
    stack: ["HTML", "SCSS", "JS", "BEM", "Adaptive"],
    stackSwiperID: "stack-swiper-Future-tech",
    stackSwiperBtnPrevID: "stack-swiper-btn-prev-Future-tech",
    stackSwiperBtnNextID: "stack-swiper-btn-next-Future-tech",
    name: "Future-tech",
    openLink: "https://lilusia-li.github.io/future-tech",
    githubLink: "https://github.com/lilusia-li/future-tech",
  },
  {
    imageSrc: "./images/projects/test_project_sepium.png",
    imageAlt: "Kitchen shop wallpaper",
    stack: ["HTML", "CSS", "JS", "Swiper", "Fancybox", "BEM", "Adaptive"],
    stackSwiperID: "stack-swiper-Kitchen-shop",
    stackSwiperBtnPrevID: "stack-swiper-btn-prev-Kitchen-shop",
    stackSwiperBtnNextID: "stack-swiper-btn-next-Kitchen-shop",
    name: "Kitchen shop",
    openLink: "https://lilusia-li.github.io/test-project-sepium",
    githubLink: "https://github.com/lilusia-li/test-project-sepium",
  },
  {
    imageSrc: "./images/projects/todo_react.png",
    imageAlt: "Todo-list",
    stack: ["React", "Tailwind", "LocalStorage", "BEM", "Adaptive"],
    stackSwiperID: "stack-swiper-Todo-list",
    stackSwiperBtnPrevID: "stack-swiper-btn-prev-Todo-list",
    stackSwiperBtnNextID: "stack-swiper-btn-next-Todo-list",
    name: "Todo-list",
    openLink: "https://todo-react-two-delta.vercel.app/",
    githubLink: "https://github.com/lilusia-li/todo-react",
  },
];

const createProjectCard = function (project) {
  const stackItems = project.stack
    .map((tech) => `<li class="swiper-slide stack__item">${tech}</li>`)
    .join("");

  return `
    <div class="project-card">
      <img
        class="project-card__image"
        src="${project.imageSrc}"
        alt="${project.imageAlt}"
        width="330"
        height="201"
        loading="lazy"
      />
      <div class="project-card__stack stack">
        <div class="swiper stack__swiper" id=${project.stackSwiperID}>
          <ul class="swiper-wrapper stack__list">
            ${stackItems}
          </ul>
        </div>
        <div
          class="swiper-button-prev stack__button-prev"
          id=${project.stackSwiperBtnPrevID}
        ></div>
        <div
          class="swiper-button-next stack__button-next"
          id=${project.stackSwiperBtnNextID}
        ></div>
      </div>
      <div class="project-card__specification">
        <h3 class="project-card__name">${project.name}</h3>
        <div class="project-card__links">
          <a
            class="project-card__link project-card__link_accent"
            href="${project.openLink}"
            target="_blank"
          >
            Open
          </a>
          <a
            class="project-card__link project-card__link_gray"
            href="${project.githubLink}"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  `;
};

export const projectsLayout = projects
  .map((project) => {
    return createProjectCard(project);
  })
  .join("");
