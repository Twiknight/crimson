import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toPercent'})
export class ToPercentPipe implements PipeTransform {
  transform(value: Decimal): any {
    if (!value) return '0%'
    return `${value.times(100).toString()}%`;
  }
}