Highcharts.chart('container', {

  chart: {
      type: 'heatmap',
      margin: [60, 10, 80, 50]
  },

  boost: {
      useGPUTranslations: true
  },

  title: {
      text: 'heatmapa úmrtí',
      align: 'left',
      x: 40
  },

  subtitle: {
      text: '',
      align: 'left',
      x: 40
  },

  xAxis: {
      labels: {
          align: 'left',
          x: 5,
          y: 14,
      },
  },

  yAxis: {
      title: {
          text: null
      },
      minPadding: 0,
      maxPadding: 0,
      startOnTick: false,
      endOnTick: false,
      tickPositions: [0, 15, 30, 60, 90],
  },

  colorAxis: {
      stops: [
          [0, '#c4463a'],
          [0.5, '#fffbbc'],
          [1, '#3060cf'],
      ],
      min: -60,
      max: 60,
      startOnTick: false,
      endOnTick: false,
      labels: {
          format: '{value}'
      }
  },

  series: [{
      boostThreshold: 100,
      borderWidth: 0,
      nullColor: '#EFEFEF',
      data: lst,
      tooltip: {
          headerFormat: 'Úmrtí<br/>',
          pointFormatter: function () {
              return "V roce " + this.x + " zemřelo o " + (this.value > 0 ? this.value + " % více " + this.y + "letých mužů než žen." : -this.value + " % více " + this.y + "letých žen než mužů.") +
               "<br>Úmrtí mužů: " + muzi[this.y][this.x-1919] + "<br>Úmrtí žen: " + zeny[this.y][this.x-1919];
          }
      },
      turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
  }]

});
