let imgNumber = 0;

class CompleteProject {
  constructor(city, aria, time, imgUrl, id) {
    this.city = city;
    this.aria = aria;
    this.time = time;
    this.imgUrl = imgUrl;
    this.id = id;
  }
}
const admiral = new CompleteProject(
  "Rostov-on-Don<br>LCD admiral",
  "81 m2",
  "3.5 months",
  "img/interiorImageProjectsSection1.jpg",
  0
);
const thieves = new CompleteProject(
  "Sochi<br> Thieves",
  "105 m2",
  "4 months",
  "img/interiorImageProjectsSection2.jpg",
  1
);
const patriotic = new CompleteProject(
  "Rostov-on-Don<br> Patriotic",
  "93 m2",
  "3 months",
  "img/interiorImageProjectsSection3.jpg",
  2
);

const completeProjectsArr = [admiral, thieves, patriotic];
console.log(completeProjectsArr);

const completeProjectImage = document.querySelector(".projects-image-screen");
const completeProjectName = document.querySelector("#complete-project-name");
const completeProjectAria = document.querySelector("#complete-project-aria");
const completeProjectTime = document.querySelector("#complete-project-time");
const navigationDotsList = document.querySelectorAll(".nav-dot");
const projectsListContainer = document.querySelector(".projects-nav");
const navDots = document.querySelector(".nav-dots");
const projectNavArrow = document.querySelector(".projects-nav-arrow");

function switchCompleteProjects(obj) {
  imgNumber = obj.id;
  completeProjectImage.setAttribute("src", obj.imgUrl);
  completeProjectName.innerHTML = obj.city;
  completeProjectAria.textContent = obj.aria;
  completeProjectTime.textContent = obj.time;
  navigationDotsList.forEach((dot) => {
    dot.src = "img/svg/disactivNavigationDot.svg";
  });
  navigationDotsList[obj.id].src = "img/svg/activeNavigationDot.svg";
}

function slideNextProject(number) {
  let index;
  number === completeProjectsArr.length - 1
    ? (index = 0)
    : (index = number + 1);
  switchCompleteProjects(completeProjectsArr[index]);
}
function slidePreviusProject(number) {
  let index;

  number === 0
    ? (index = completeProjectsArr.length - 1)
    : (index = number - 1);
  switchCompleteProjects(completeProjectsArr[index]);
}

projectsListContainer.addEventListener("click", (e) => {
  e.preventDefault();
  let isProjectsNavLink = e.target.closest(".projects-nav-item");
  if (isProjectsNavLink) {
    switch (isProjectsNavLink.id) {
      case "project-nav-link-1":
        switchCompleteProjects(admiral);
        break;
      case "project-nav-link-2":
        switchCompleteProjects(thieves);
        break;
      case "project-nav-link-3":
        switchCompleteProjects(patriotic);
        break;
    }
  }
});

navDots.addEventListener("click", (e) => {
  e.preventDefault();
  const isDot = e.target.closest(".nav-dot");
  if (isDot) {
    switch (isDot.id) {
      case "nav-dot-1":
        switchCompleteProjects(admiral);
        break;
      case "nav-dot-2":
        switchCompleteProjects(thieves);
        break;
      case "nav-dot-3":
        switchCompleteProjects(patriotic);
        break;
    }
  }
});

projectNavArrow.addEventListener("click", (e) => {
  e.preventDefault();
  const isArrow = e.target.closest(".nav-arrow");
  if (isArrow) {
    isArrow.id === "right-nav-arrow"
      ? slideNextProject(imgNumber)
      : slidePreviusProject(imgNumber);
  }
});
