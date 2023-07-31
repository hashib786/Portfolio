const settingBtn = document.querySelector(".setting");
const backgroundChange = document.querySelector(".backgroundChange");
const essentialContainer = document.querySelector(".essential__container");
const colorItem = [...document.getElementsByClassName("colors__item")];

// checking default background
const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
matches && document.body.classList.add("dark");

export const colorChange = () => {
  const closeSettingButton = () => {
    essentialContainer.classList.remove("active");
  };

  settingBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    essentialContainer.classList.toggle("active");
    const classes = [...essentialContainer.classList];
    classes.forEach((ele) =>
      ele === "active"
        ? document.addEventListener("click", closeSettingButton)
        : document.removeEventListener("click", closeSettingButton)
    );
  });

  colorItem.forEach((ele, index) => {
    ele.addEventListener("click", (e) => {
      e.stopPropagation();
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
