import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import {ChartsModule} from "ng2-charts";
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    MatSelectModule
  ],
  exports: [ChartsComponent]
})
export class ChartModule { }
