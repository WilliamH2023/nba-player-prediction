import React, { Component } from "react";
// import { ScatterBoard, Lazy } from "react-scatter-board";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

let xData1 = [];
let yData1 = [];
let zData1 = [];
let zData2 = [];
let xData2 = [];
let yData2 = [];
let xData3 = [];
let yData3 = [];
let zData3 = [];
let colors = [];
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i = 0; i < 20; i++) {
  if (i <= 6) {
    xData1.push(randomIntFromInterval(8, 10));
    yData1.push(randomIntFromInterval(8, 10));
    zData1.push(randomIntFromInterval(8, 10));
  } else if (i > 6 && i <= 12) {
    xData2.push(randomIntFromInterval(4, 7));
    yData2.push(randomIntFromInterval(4, 7));
    zData2.push(randomIntFromInterval(4, 7));
  } else {
    xData3.push(randomIntFromInterval(1, 3));
    yData3.push(randomIntFromInterval(1, 3));
    zData3.push(randomIntFromInterval(1, 3));
  }
}

let cluster1 = {
  x: xData1,
  y: yData1,
  z: zData1,
  mode: "markers",
  type: "scatter3d",
  marker: {
    color: "gold",
    size: 12,
    symbol: "circle",
  },
  text: [
    "Your Potential Player",
    "Your Potential Player",
    "Your Potential Player",
    "Draymond Green",
  ],
  legendgrouptitle: "All-Star",
  name: "All-Star",
  hovertemplate:
    "%{text} <br>" +
    "<b>Career Length</b>: %{x}" +
    "<br><b>Offensive +/-</b>: %{y}<br>" +
    "<b>Defensive +/-</b>: %{z}<br>",
};

let cluster2 = {
  x: xData2,
  y: yData2,
  z: zData2,
  mode: "markers",
  type: "scatter3d",
  marker: {
    color: "blue",
    size: 12,
    symbol: "circle",
  },
  text: [
    "LeBron James",
    "Kyrie Irving",
    "James Harden",
    "Kevin Love",
    "Kawhi Leonard",
  ],
  name: "Average",
  hovertemplate:
    "%{text} <br>" +
    "<b>Career Length</b>: %{x}" +
    "<br><b>Offensive +/-</b>: %{y}<br>" +
    "<b>Defensive +/-</b>: %{z}<br>",
};

let cluster3 = {
  x: xData3,
  y: yData3,
  z: zData3,
  mode: "markers",
  type: "scatter3d",
  marker: {
    color: "red",
    size: 12,
    symbol: "circle",
    width: 0.5,
  },
  opacity: 0.8,
  /* bad players in NBA history */
  text: [
    "Kwame Brown",
    "Greg Oden",
    "Anthony Bennett",
    "Devin Harris",
    "Hasheem Thabeet",
    "LaRue Martin",
  ],
  name: "Bust",
  hovertemplate:
    "%{text} <br>" +
    "<b>Career Length</b>: %{x}" +
    "<br><b>Offensive +/-</b>: %{y}<br>" +
    "<b>Defensive +/-</b>: %{z}<br>",
};

// const data = {
//   type: "scatter3d",
//   mode: "markers",
//   x: xData,
//   y: yData,
//   z: zData,
//   // text with twenty NBA player names
//   text: [
//     "Stephen Curry",
//     "Kyrie Irving",
//     "Kevin Durant",
//     "James Harden",
//     "Kawhi Leonard",
//     "Draymond Green",
//     "Giannis Antetokounmpo",
//     "Klay Thompson",
//     "Devin Booker",
//     "Paul George",
//     "DeMarcus Cousins",
//     "Damian Lillard",
//     "Kemba Walker",
//     "Goran Dragic",
//     "Jimmy Butler",
//     "Paul Millsap",
//     "Blake Griffin",
//   ],
//   color: colors,
// };

var layout = {
  width: 550,
  height: 550,
  scene: {
    xaxis: { title: "Career Length" },
    yaxis: { title: "Offensive +/-" },
    zaxis: { title: "Defensive +/-" },
  },
  title: {
    text: "Comparison Against Other NBA Players",
    font: {
      family: "Courier New, monospace",
      size: 14,
    },
    xref: "paper",
    x: 0.05,
  },
  xaxis: {
    title: {
      text: "Career Length",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f",
      },
    },
  },
  yaxis: {
    title: {
      text: "Offensive +/-",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f",
      },
    },
  },
  zaxis: {
    title: {
      text: "Defensive +/-",
      font: {
        family: "Courier New, monospace",
        size: 18,
        color: "#7f7f7f",
      },
    },
  },
};

const Scatterplot = () => {
  return (
    <div className="App">
      {React.createElement(Plot, {
        data: [cluster1, cluster2, cluster3],
        layout: layout,
        responsiveness: true,
      })}
    </div>
  );
};
export default Scatterplot;
