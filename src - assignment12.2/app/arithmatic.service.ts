import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {


  constructor() { }
  checkprime(val1:number)
  {
    let count=0;
    for(var i=0;i<=val1;i++)
    {
      if(val1%i==0)
      {count++;}
      else
      {}
    }
    if(count==2)
    return true;
    else
    return false;
  }
}
