import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ClientData } from '../types/client';
import { ClientColumnNames } from '../shared/utils/constants';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // clients = [];
  searchTerm = '';
  userDetails;
  displayedColumns: string[] = Object.keys(ClientColumnNames)
  dataSource: MatTableDataSource<ClientData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private readonly dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.userDetails = JSON.parse(JSON.stringify(localStorage.getItem('userDetails')));
    this.dashboardService.getAllClients(100).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data);
      console.log(this.dataSource.paginator);
      
      this.paginator.pageSize = 100;
      this.paginator.length = res.totalCount;
      this.dataSource.paginator = this.paginator;
    });
  }

  updateFilter(searchTerm) {
    this.dashboardService.searchClientsByIds(this.searchTerm).subscribe((data: any[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

}
