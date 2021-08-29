import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoolToStringPipe } from '../pipes/booltostring.pipe';

@NgModule({
  declarations: [BoolToStringPipe],
  imports: [
    CommonModule
  ],
  exports: [BoolToStringPipe]
})
export class PipesModule { }
