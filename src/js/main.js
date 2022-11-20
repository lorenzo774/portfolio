import "../scss/style.scss";

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

// Matrix effect
const ms = 100;
const title = document.querySelector("#title");
const titleText = title.textContent;
const maxJapaneseCharacters = 3;
const japaneseCharacters =
    "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶ";

const setMatrixEffect = function () {
    const nJapaneseCharacters =
        Math.floor(Math.random() * maxJapaneseCharacters) + 1;
    console.log(nJapaneseCharacters);
    const rndChars = [];
    // Search for n jp characters\
    for (let i = 0; i < nJapaneseCharacters; i++) {
        const jpIndex = Math.floor(Math.random() * japaneseCharacters.length);
        rndChars.push(japaneseCharacters.at(jpIndex));
    }
    const titleIndex = Math.floor(Math.random() * titleText.length);
    title.innerHTML =
        titleText.substring(0, titleIndex - nJapaneseCharacters + 1) +
        `<span>${rndChars.join("")}</span>` +
        titleText.substring(titleIndex + nJapaneseCharacters);
    console.log(title.textContent);
};

setInterval(setMatrixEffect, ms);
