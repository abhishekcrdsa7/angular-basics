import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any) {
    for ( let i = 1; i < value.length; i++ ) {
      let j = i;
      while (j >= 1 && value[j].name.localeCompare(value[j - 1].name) === -1) {
        const temp = value[j];
        value[j] = value[j - 1];
        value[j - 1] = temp;
        j--;
      }
    }
    return value;
  }
}
