import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
  addd(number1:number,number2:number)
  {
    return number1+number2;
  }
  subb(number1:number,number2:number)
  {
    return number1-number2;
  }
}
