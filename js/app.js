import { colorChange } from "./colorChange.js";
import { navigation } from "./navigation.js";

colorChange();
navigation();

// const progressBars = [...document.getElementsByClassName("bar__container-box")];
// const skillSeciton = document.getElementsByClassName("skill__section")[0];

// // console.log(skillSeciton);
// // skillSeciton.addEventListener("scroll", (e) => {
// //   console.log("first");
// //   progressBars.forEach((element) => {
// //     console.log(element.offsetTop, element, e.target.scrollTop);
// //   });
// // });

// function runFunctionWhenVisible(targetElement, functionToRun) {
//   // Create an intersection observer
//   const observer = new IntersectionObserver((entries) => {
//     // Check if the target element is intersecting the viewport
//     const [entry] = entries;
//     console.log(entry);
//     if (entry.isIntersecting) {
//       // Run the function
//       functionToRun();
//       // Unobserve the element to prevent the function from being run again
//       observer.unobserve(targetElement);
//     }
//   });

//   // Observe the target element
//   observer.observe(targetElement);
// }

// progressBars.forEach((element) => {
//   runFunctionWhenVisible(element, () => console.log(element));
// });
// // document.addEventListener("visibilitychange", () => {
// //   console.log(document.visibilityState);
// //   // Modify behavior…
// // });
