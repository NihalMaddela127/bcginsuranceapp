import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from '../pipes/pipes.module';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    PipesModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [DashboardService],
  exports: [DashboardComponent]
})
export class DashboardModule { }
