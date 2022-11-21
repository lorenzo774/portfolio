// Matrix effect
const ms = 200;
const title = document.querySelector("#title");
const txt = title.textContent;
const maxJapaneseCharacters = 2;
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
    const titleIndex = Math.floor(Math.random() * txt.length);
    const newTitle =
        txt.substring(0, titleIndex) +
        `${rndChars
            .map((char) => {
                const rndColor = Math.random() > 0.5 ? "#0f0" : "#090";
                return `<span style="color: ${rndColor}">${char}</span>`;
            })
            .join("")}` +
        txt.substring(titleIndex + nJapaneseCharacters);
    title.innerHTML = newTitle;
};

setInterval(setMatrixEffect, ms);
