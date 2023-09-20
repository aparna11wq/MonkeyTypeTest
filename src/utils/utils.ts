import * as wordList from "../words.json";

let displayString = "";
for (let i = 0; i < 10; i++) {
  const randomWord = wordList.words.splice(
    Math.floor(Math.random() * wordList.words.length),
    1
  );
  // console.log("randomWord : ", randomWord);
  displayString = displayString.concat(" ").concat(...randomWord);
}
// console.log(" str : ", displayString);
displayString = displayString.trim();

export default displayString;
