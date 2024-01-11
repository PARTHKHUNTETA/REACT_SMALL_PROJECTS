import { useEffect, useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [colorCoding, setColorCoding] = useState("HEX");
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    if (colorCoding === "HEX") {
      generateHexColor();
    } else {
      generateRGBColor();
    }
  }, [colorCoding]);

  function generateRandomCode(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
      hexCode += hex[generateRandomCode(hex.length)];
    }
    setColor(hexCode);
  }

  function generateRGBColor() {
    const red = generateRandomCode(256);
    const green = generateRandomCode(256);
    let blue = generateRandomCode(256);
    // Ensure the color is not too similar to either the red or green color
    if (Math.abs(red - green) < 50 || Math.abs(red - green) > 150) {
      blue = generateRandomCode(255);
    }
    setColor(`rgb(${red}, ${green}, ${blue})`);
  }
  return (
    <div>
      <div>
        <button className="random_button" onClick={() => setColorCoding("HEX")}>
          Set HEX ColorCoding
        </button>
        <button className="random_button" onClick={() => setColorCoding("RGB")}>
          Set RGB ColorCoding
        </button>
        <button
          className="random_button"
          onClick={colorCoding === "HEX" ? generateHexColor : generateRGBColor}
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          width: "80vw",
          height: "50vh",
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <h1>
          {colorCoding} :: {color}{" "}
        </h1>
      </div>
    </div>
  );
};

export default RandomColor;
