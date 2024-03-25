import React from 'react';

import { useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setColor] = useState();

  function HandleCreateHexColor() {
    let hex = "#";
    const hexValues = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"
    ];

    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length);
      hex += hexValues[index];
    }

    setColor(hex);
  }

  function HandleCreateRgbColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    setColor(rgbColor);
  }
  function handleCopyToClipboard() {
    navigator.clipboard.writeText(color)
      .then(() => alert(`Copied ${color} to clipboard`))
      .catch(error => console.error('Error copying to clipboard:', error));
  }

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <button onClick={() => settypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => settypeOfColor("rgb")}>Create Rgb Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? HandleCreateHexColor : HandleCreateRgbColor
        }
      >
        Generate Color
      </button>
      <button onClick={handleCopyToClipboard}>Copy Color</button>
      <div id="colorDisplay">{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</div>

      <div id="colorDisplay">{color}</div>
    </div>
  );
}
