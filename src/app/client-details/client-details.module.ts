import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailsComponent } from './client-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BoolToStringPipe } from '../pipes/booltostring.pipe';

@NgModule({
  declarations: [ClientDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [BoolToStringPipe],
  exports: [ClientDetailsComponent]
})
export class ClientDetailsModule { }
