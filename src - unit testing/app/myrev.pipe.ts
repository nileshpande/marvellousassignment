import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myrev'
})
export class MyrevPipe implements PipeTransform {

  transform(value: string): string
 {
 let temp: string = "";
 temp = value;
 var splitString = temp.split("");  
 var reverseArray = splitString.reverse(); 
 var joinArray = reverseArray.join(""); 
 return joinArray; 
}

}
