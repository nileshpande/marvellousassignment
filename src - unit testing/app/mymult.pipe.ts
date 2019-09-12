import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult'
})
export class MymultPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var temp = value;

    return temp*args[0];
  }

}
