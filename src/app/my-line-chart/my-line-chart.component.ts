import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js'; // Import from 'chart.js'

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css'],
})
export class MyLineChartComponent {
  generateRandomData = () => {
		var y  = 1000, dps = [];
		for(var i = 0; i < 1000; i++) {
			y += Math.ceil(Math.random() * 10 - 5);
			dps.push({ y: y});
		}
		return dps;
	}
	chartOptions = {
	  zoomEnabled: true,
	  exportEnabled: true,
	  theme: "light2",
	  title: {
		text: "Transaction Chart"
	  },
	  data: [{
		type: "line",
		dataPoints: this.generateRandomData()
	  }]
	}; // Use ChartType here
}
