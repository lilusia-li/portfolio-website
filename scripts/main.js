import { projectsLayout } from "./projectsLayout.js";

const projectsContainer = document.querySelector("#projects-container");
projectsContainer.insertAdjacentHTML("beforeend", projectsLayout);
