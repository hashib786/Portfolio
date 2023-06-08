let sections = [...document.getElementsByClassName("section")];
const navLinks = [...document.querySelectorAll(".nav__links ul li")];
const moreAbout = document.getElementById("moreAbout");
const hireMe = document.getElementById("hireMe");

const navContainer = document.querySelector(".nav__container");
const blurArea = document.querySelector(".blur__effect");
const hemburgers = document.querySelector(".hemburgers");
const hemburger = document.querySelector(".hemburger");
const cross = document.querySelector(".cross");

export const navigation = () => {
  const render = (index) => {
    navLinks.forEach((ele) => ele.classList.remove("active"));
    sections[index].classList.add("active");
    navLinks[index].classList.add("active");
    setTimeout(
      (index) => {
        sections.forEach((ele, number) => {
          if (number === index) return;
          ele.classList.remove("active");
        });
      },
      0,
      index
    );
  };

  navLinks.forEach((ele, index) => {
    ele.addEventListener("click", () => {
      render(index);
    });
  });

  moreAbout.addEventListener("click", () => render(1));
  hireMe.addEventListener("click", () => render(4));

  const closeHemburger = () => {
    hemburgers.classList.remove("active");
    navContainer.classList.remove("active");
  };

  hemburger.addEventListener("click", () => {
    hemburgers.classList.add("active");
    navContainer.classList.add("active");
  });

  cross.addEventListener("click", closeHemburger);
  blurArea.addEventListener("click", closeHemburger);
};
