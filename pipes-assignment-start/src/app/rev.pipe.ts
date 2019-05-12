import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rev'
})
export class RevPipe implements PipeTransform {
  transform(value: any) {
    let revStr = '';
    for (let i = 0; i < value.length; i++) {
      revStr = value.charAt(i) + revStr;
    }
    return revStr;
  }
}
