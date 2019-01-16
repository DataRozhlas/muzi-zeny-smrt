import Highcharts from "highcharts";
import Heatmap from "highcharts/modules/heatmap";
import Boost from "highcharts/modules/boost";
import Annotations from "./highcharts-annotations";
import { lst } from "./data";

Annotations(Highcharts);
Heatmap(Highcharts);
Boost(Highcharts);

const shapeColor = "rgba(0, 0, 0, 0.35)";


const chart = Highcharts.chart("heatchart", {
  chart: {
    margin: [60, 10, 80, 50],
  },

  boost: {
    useGPUTranslations: true,
  },

  title: {
    text: "",
  },

  subtitle: {
    text: "",
    align: "left",
    x: 40,
  },

  xAxis: {
    labels: {
      align: "left",
      x: 5,
      y: 14,
    },
  },

  yAxis: {
    title: {
      text: null,
    },
    minPadding: 0,
    maxPadding: 0,
    startOnTick: false,
    endOnTick: false,
    tickPositions: [0, 15, 30, 60, 90],
  },

  colorAxis: {
    stops: [
      [0, "#c4463a"],
      [0.5, "#fffbbc"],
      [1, "#3060cf"],
    ],
    min: -60,
    max: 60,
    startOnTick: false,
    endOnTick: false,
    labels: {
      format: "{value}",
    },
  },

  series: [{
    type: "heatmap",
    boostThreshold: 100,
    borderWidth: 0,
    nullColor: "#EFEFEF",
    data: lst,
    turboThreshold: Number.MAX_VALUE, // #3404, remove after 4.0.5 release
  }],

  credits: [{
    enabled: false,
  }],

  tooltip: {
    enabled: false,
  },
});

chart.addAnnotation({
  // search attrsMap to add class names in annotations.js
  labels: [{
    point: { x: 1925, y: 30, xAxis: 0, yAxis: 0 },
    text: "Test",
    className: "event1",
  }],
  shapes: [{
    point: { x: 1920, y: 30, xAxis: 0, yAxis: 0 },
    width: chart.axes[0].toPixels(1930) - chart.axes[0].toPixels(1920),
    height: chart.axes[1].toPixels(20) - chart.axes[1].toPixels(30),
    rx: 60,
    ry: 20,
    type: "rect",
    className: "event1-shape",
    fill: shapeColor,
    strokeWidth: 0,
  }],
});

// stories
const stories = {
  event1: "Nejčastější příčinou úmrtí byla za první republiky tuberkulóza. Ta si mezi muži a ženami nevybírala. Důvod, proč mezi 20. a 35. rokem života častěji umíraly ženy, byla vysoká porodní úmrtnost.",
};

Object.keys(stories).forEach((el) => {
  document.getElementsByClassName(`${el}-shape`)[0].addEventListener("click", () => {
    document.getElementById("story").innerHTML = stories[el];
  });
  document.getElementsByClassName(el)[0].addEventListener("click", () => {
    document.getElementById("story").innerHTML = stories[el];
  });
});
