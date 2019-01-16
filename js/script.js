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
    text: "Tuberkulóza",
    className: "event1",
  }, {
    point: { x: 1945, y: 40, xAxis: 0, yAxis: 0 },
    text: "Válka",
    className: "event2",
  }, {
    point: { x: 1955, y: 60, xAxis: 0, yAxis: 0 },
    text: "Očkování",
    className: "event3",
  }, {
    point: { x: 1968, y: 0, xAxis: 0, yAxis: 0 },
    text: "Novorozenci",
    className: "event4",
  }, {
    point: { x: 2008, y: 20, xAxis: 0, yAxis: 0 },
    text: "Děti",
    className: "event5",
  }, {
    point: { x: 1945, y: 95, xAxis: 0, yAxis: 0 },
    text: "Statistická chyba",
    className: "event6",
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
  }, {
    point: { x: 1944, y: 40, xAxis: 0, yAxis: 0 },
    width: chart.axes[0].toPixels(1946) - chart.axes[0].toPixels(1944),
    height: chart.axes[1].toPixels(10) - chart.axes[1].toPixels(40),
    rx: 20,
    ry: 60,
    type: "rect",
    className: "event2-shape",
    fill: shapeColor,
    strokeWidth: 0,
  }, {
    point: { x: 1950, y: 60, xAxis: 0, yAxis: 0 },
    width: chart.axes[0].toPixels(1960) - chart.axes[0].toPixels(1950),
    height: chart.axes[1].toPixels(20) - chart.axes[1].toPixels(60),
    rx: 70,
    ry: 70,
    type: "rect",
    className: "event3-shape",
    fill: shapeColor,
    strokeWidth: 0,
  }, {
    point: { x: 1920, y: 1, xAxis: 0, yAxis: 0 },
    width: chart.axes[0].toPixels(2017) - chart.axes[0].toPixels(1920),
    height: chart.axes[1].toPixels(-1) - chart.axes[1].toPixels(1),
    rx: 100,
    ry: 100,
    type: "rect",
    className: "event4-shape",
    fill: shapeColor,
    strokeWidth: 0,
  }, {
    point: { x: 2000, y: 20, xAxis: 0, yAxis: 0 },
    width: chart.axes[0].toPixels(2017) - chart.axes[0].toPixels(2000),
    height: chart.axes[1].toPixels(0) - chart.axes[1].toPixels(20),
    rx: 80,
    ry: 80,
    type: "rect",
    className: "event5-shape",
    fill: shapeColor,
    strokeWidth: 0,
  }, {
    point: { x: 1950, y: 100, xAxis: 0, yAxis: 0 },
    width: chart.axes[0].toPixels(1960) - chart.axes[0].toPixels(1950),
    height: chart.axes[1].toPixels(90) - chart.axes[1].toPixels(100),
    rx: 60,
    ry: 60,
    type: "rect",
    className: "event6-shape",
    fill: shapeColor,
    strokeWidth: 0,
  }],
});

// stories
const stories = {
  event1: "Nejčastější příčinou úmrtí byla za první republiky tuberkulóza. Ta si mezi muži a ženami nevybírala. Důvod, proč mezi 20. a 35. rokem života častěji umíraly ženy, byla vysoká porodní úmrtnost.",
  event2: "Během osvobozovacích bojů a bombardování na konci druhé světové války zemřelo 12 tisíc českých civilistů. Třikrát častěji to byli muži než ženy, většinou mladí.",
  event3: "V poválečných letech zaváděla Evropa všeobecnou zdravotní péči a preventivní očkování. Tím se podařilo vymýtit tuberkulózu. Na struktuře úmrtnosti se proto ostřeji projevil životní styl. Muži více riskují, což znamená více autonehod v raném věku. Po padesátce se projeví častější kouření a pití.",
  event4: "Novorození chlapci mají při porodu asi o pětinu vyšší úmrtnost než dívky. Platí to ve většině zemí světa a vysvětluje se obvykle biologicky, tedy tím, že „kluci jsou křehčí“. Podstatnější je ale fakt, že úmrtnost novorozenců klesla za sto let na jednu setinu.",
  event5: "Úmrtí v dětství jsou výjimečná, v celém Česku pouze desítky případů ročně. Tradičně šlo hlavně o chlapce, v posledních dvaceti letech jsou data vyrovnanější.",
  event6: "Jediný okamžik v posledním století, kdy mají české ženy podstatně větší úmrtnost než muži, jsou 50. a 60. léta. Týká se ovšem pouze devadesátiletých a starších, a hlavně: jde o chybu. Statistici v té době zřejmě v ručně psaných tabulkách prohodili čísla pro muže a ženy.",
};

Object.keys(stories).forEach((el) => {
  document.getElementsByClassName(`${el}-shape`)[0].addEventListener("click", () => {
    document.getElementById("story").innerHTML = stories[el];
  });
  document.getElementsByClassName(el)[0].addEventListener("click", () => {
    document.getElementById("story").innerHTML = stories[el];
  });
});
