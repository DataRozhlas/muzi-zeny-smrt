import Highcharts from "highcharts";
import Heatmap from "highcharts/modules/heatmap";
import Boost from "highcharts/modules/boost";
import Annotations from "./highcharts-annotations";
import { lst } from "./data";

Annotations(Highcharts);
Heatmap(Highcharts);
Boost(Highcharts);

const shapeColor = "rgba(0, 0, 0, 0.35)";

Highcharts.chart("container", {

  chart: {
    margin: [60, 10, 80, 50],
  },

  annotations: [{
    // search attrsMap to add class names in annotations.js
    labels: [{
      point: { x: 1940, y: 50, xAxis: 0, yAxis: 0 },
      text: "Test",
      className: "event1",
    }],
    shapes: [{
      point: { x: 1940, y: 50, xAxis: 0, yAxis: 0 },
      type: "circle",
      r: 10,
      className: "event1-shape",
      fill: shapeColor,
      strokeWidth: 0,
    }],
  }],

  boost: {
    useGPUTranslations: true,
  },

  title: {
    text: "Test",
    align: "left",
    x: 40,
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
