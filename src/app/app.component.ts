import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highmaps";
import * as worldMap from '@highcharts/map-collection/custom/world.topo.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'globetrotter';
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";


  chartOptions: Highcharts.Options = {
    chart: {
      map: worldMap
    },
    title: {
      text: ""
    },
    tooltip: {
      enabled: false
    },
    colorAxis: {
      max: 1,
      maxColor: '#ffaa00'
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    series: [
      {
        type: "map",
        name: "Visited",
        data: [
          ['us', 1], //usa
          ['in', 1], //india
          ['la', 1], //laos
          ['za', 1], //south africa
          ['mu', 1], //mauritius
          ['th', 1], //thailand
          ['de', 1]  //germany
        ],
        dataLabels: {
          enabled: true,
          color: '#000000',
          formatter: function () {
            if (this.point.value) {
              return this.point.name;
            } else return
          }
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.name}'
        }
      }
    ]
  };
}
