import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringHumanize'
})
export class StringHumanizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return null;
    if ((typeof value) !== 'string') {
      return value;
    }
    value = value.split(/(?=[A-Z])/).join(' ');
    value = value[0].toUpperCase() + value.slice(1);
    return value;
  }

}
