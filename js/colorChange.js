const settingBtn = document.querySelector(".setting");
const backgroundChange = document.querySelector(".backgroundChange");
const essentialContainer = document.querySelector(".essential__container");
const colorItem = [...document.getElementsByClassName("colors__item")];

export const colorChange = () => {
  settingBtn.addEventListener("click", () => {
    essentialContainer.classList.toggle("active");
  });

  colorItem.forEach((ele, index) => {
    ele.addEventListener("click", () => {
      const classVal = index + 1;
      if (classVal > 5 && classVal < 1) return;
      const classes = [...document.body.classList].filter(
        (ele) => !ele.includes("color")
      );
      document.body.classList = `${classes.join(" ")} color${classVal}`;
    });
  });

  backgroundChange.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
};
