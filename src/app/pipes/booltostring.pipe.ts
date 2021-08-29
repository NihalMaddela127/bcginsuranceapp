import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'boolToString'
})
export class BoolToStringPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    switch (args[0]) {
        case 'toggle':
            return value ? 'Yes' : 'No';
        case 'marital':
            return value ? 'Married' : 'Single';
    }
  }
}