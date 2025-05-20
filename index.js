const containerEl = document.querySelector(".container");

const careers = ["Youtuber", "Web Developer", "Freelancer", "Instractor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  containerEl.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  characterIndex++;
  if (characterIndex === careers[careerIndex].length + 1) {
    careerIndex++;
    characterIndex = 0;
    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
  }
  setTimeout(updateText, 400);
}
