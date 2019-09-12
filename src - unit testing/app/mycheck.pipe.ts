import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycheck'
})
export class MycheckPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let param = args[0];
  
    switch(param)
    {
      case "prime": {
        var i=2;
        var c=0;
        for(; i < value; i++)
        {
        if(value % i === 0) 
        c++
        }
        if(c>1)
        return "Not Prime";
        else
        return "No is Prime";
        break;
      }
      case "even": {
        if(value%2==0)
        return "No is EVEN";
        else
        return "No is Not EVEN";
        break;
      }
      case "odd": {
        if(value%2==0)
        return "No is Not Odd";
        else
        return "No is Odd";
        break;
      }
      case "perfect": {
        var temp = 0;
        for(var i=1;i<=value/2;i++)
          {
              if(value%i === 0)
              {
                temp += i;
              }
          }

          if(temp === value && temp !== 0)
            {
              return "This is perfect Number";
            } 
          else
            {
              return "This is Not perfect Number";
            }  
        break;
      }
    }
    return "Invalid";
  }

}
