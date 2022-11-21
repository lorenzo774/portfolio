import "../scss/style.scss";
import "./matrix";

// Elements
const cards = document.querySelector(".cards");
let counter = 0;
let projectsNumber = 0;

/** Fill projects from pinned repos */
(async function () {
    const data = await fetch(
        `https://gh-pinned-repos.egoist.dev/?username=lorenzo774`
    );
    const projects = await data.json();
    projectsNumber = projects.length;
    cards.innerHTML = projects
        .map(
            ({ repo, description, image, link }, i) => `
        <div data-id="${i}" class="project ${i != counter ? "hidden" : ""}">
            <div style="background-image: url('${image}')">
                <a onpointerdown="event.stopPropagation()" target="_blank" href="${link}">
                    <h3><i>${repo}</i></h3>
                </a>
                <p>${description}</p>
            </div>
        </div>
    `
        )
        .join("");
})();

// Move to the next card
const showNextCard = function () {
    counter += 1;
    if (counter >= projectsNumber) {
        counter = 0;
    }
    const card = cards.querySelector(`[data-id="${counter}"]`);
    Array.from(cards.children).forEach((element) => {
        element.classList.add("hidden");
    });
    card.classList.remove("hidden");
};

cards.addEventListener("pointerdown", showNextCard);
