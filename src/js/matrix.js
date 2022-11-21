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
    const rndChars = [];
    // Search for n jp characters\
    for (let i = 0; i < nJapaneseCharacters; i++) {
        const jpIndex = Math.floor(Math.random() * japaneseCharacters.length);
        rndChars.push(japaneseCharacters.at(jpIndex));
    }
    const titleIndex = Math.floor(Math.random() * titleText.length);
    const newTitle =
        titleText.substring(0, titleIndex) +
        `<span>${rndChars.join("")}</span>` +
        titleText.substring(titleIndex + nJapaneseCharacters);
    title.innerHTML = newTitle;
};

setInterval(setMatrixEffect, ms);
