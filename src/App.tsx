import { useEffect, useState } from "react";
import "./styles.css";
import displayString from "./utils/utils";

export default function App() {
  const [input, setInput] = useState("");
  const [currentChar, setCurrentChar] = useState(displayString[0]);
  const [fontColourClass, setFontColourClass] = useState("mainString");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorCount, setErrorCount] = useState(0);

  const changeFontColour = (colorCode: string) => {
    setFontColourClass(colorCode);
  };

  const verifyInput = (inputChar: string) => {
    console.log(inputChar, currentChar);
    if (inputChar[inputChar.length - 1] === currentChar) {
      // change font colour of currentChar to green
      changeFontColour("greenFont");
    } else {
      // change font colour of currentChar to red
      setErrorCount((prevCount) => prevCount + 1);
      changeFontColour("redFont");
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const inputChar = event.target.value;
    setInput(inputChar);

    // verify with currentChar
    verifyInput(inputChar);

    // increment currentChar
    setCurrentIndex((prevIndex) => prevIndex + 1);
    event.target.value = "";
  };

  useEffect(() => {
    if (input.length > 1) {
      setInput(input[input.length - 1]);
    }
  }, [input]);

  useEffect(() => {
    setCurrentChar(displayString[currentIndex]);
  }, [currentIndex]);

  const underlineCurrentChar = () => {
    return (
      <span className={fontColourClass}>
        <span>{displayString.slice(0, currentIndex)}</span>
        <mark>{displayString.charAt(currentIndex)}</mark>
        <span>{displayString.slice(currentIndex + 1)}</span>
      </span>
    );
  };

  return (
    <div className="App">
      <h1>MonkeyType Test</h1>
      <h3>
        Read through the paragraph given below and type the same from your
        keyboard.
      </h3>
      {underlineCurrentChar()}
      <div className="inputBox">
        <input
          type="text"
          placeholder={
            currentIndex === 0
              ? "Enter first character"
              : "Enter next character"
          }
          value={input}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="errorCount">Error Count : {errorCount}</div>
    </div>
  );
}
