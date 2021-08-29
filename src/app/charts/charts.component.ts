import { Component, OnInit, ElementRef } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  selectedRegion;
  public barChartLabels: Label[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  regions = [
    {value: 'North', viewValue: 'North'},
    {value: 'South', viewValue: 'South'},
    {value: 'East', viewValue: 'East'},
    {value: 'West', viewValue: 'West'}
  ];
  public barChartData: ChartDataSets[] = [];

  constructor(private readonly dashboardService: DashboardService) {
   }
  
  ngOnInit() {
    this.dashboardService.getAllClients(1200).subscribe((res: any) => {
      this.renderChartData(res);    
    });
  }

  fetchData() {
    this.dashboardService.getAllClientsByRegion(this.selectedRegion).subscribe((res: any) => {
      console.log(res);
      
      this.renderChartData(res);
    });
  }

  renderChartData(res) {
    this.barChartData = [];
    const aggregated = res.data.map(response => {
        return (new Date(JSON.stringify(response.Date_of_Purchase))).getMonth();
      });
      let data = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0};
      console.log(data);
      
      aggregated.forEach(mon => {
        if (data.hasOwnProperty(mon)) {
          data[mon]++;
        }
      });
      
      this.barChartData.push({ data: Object.values(data), label: 'Policies per month' } as ChartDataSets);
  }

}
