import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidates.service'
import { Candidate } from '../candidates';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public labels: string[] = [];
  public results: number[] = [];


  constructor(private candi : CandidatesService ) { }

   getCandies(){
    let lab = [];
    let res = [];
    this.candi.getcandidates().forEach(function (value) {
      lab.push(value.name);
      res.push(value.results);
    });

    this.labels = lab;
    this.results = res;
    console.log(this.labels)
    
  }


  // public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public doughnutChartData = [120, 150, 180, 90];
  // public doughnutChartType = 'doughnut';
  

  ngOnInit() {
    this.getCandies();

    var chart = new Chart('canvas', {
      // The type of chart we want to create
      type: 'line',
  
      // The data for our dataset
      data: {
          labels: this.labels,
          datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(2, 99, 132)',
              data: this.results
          }]
      },
  
      // Configuration options go here
      options: {}
  });
  }

}
