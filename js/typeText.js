const headingText = document.querySelector(".typingText");

const heading = "Full Stack Web Developer";
const TIMING = 50;

export const typeText = () => {
  const removeText = (position, text, perTextInMiliSecond) => {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        const textContent = position.textContent;
        position.innerHTML = textContent.slice(0, textContent.length - 1);
        if (i === text.length - 1) {
          setTimeout(() => {
            typeText(position, text, perTextInMiliSecond);
          }, 1000);
        }
      }, i * perTextInMiliSecond);
    }
  };

  const typeText = (position, text, perTextInMiliSecond) => {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        position.innerHTML += text[i];
        if (i === text.length - 1) {
          setTimeout(() => {
            removeText(position, text, perTextInMiliSecond);
          }, 1000);
        }
      }, i * perTextInMiliSecond);
    }
  };

  typeText(headingText, heading, TIMING);
};
