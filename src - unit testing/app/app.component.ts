import { Component,OnInit } from '@angular/core';
import {MyrevPipe} from './myrev.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assisnment13';

  public mystr:string ="Nilesh Pande";
  public password:string = "NILeshPande123$";
  public arr = [12,34,67,89];

  CountCapital(mystrval:any)
  {
    var upper:any=0;
    for (var i = 0; i < mystrval.length; i++) 
    { 
        if (mystrval[i] >= 'A' &&  
            mystrval[i] <= 'Z') 
            upper++; 
    } 
    console.log(upper);
    return upper ;
  }
  CheckPassword()
  {
    var upper:any=0;
    var lower:any=0;
    var digit:any=0;
    var splsymbol:any=0;
    for (var i = 0; i < this.password.length; i++) 
    { 
        if (this.password[i] >= 'A' &&  
            this.password[i] <= 'Z') 
            upper++; 
        if (this.password[i] >= 'a' &&  
            this.password[i] <= 'z') 
            lower++;  
        if (this.password[i] >= '0' &&  
            this.password[i] <= '9') 
            digit++;
        if (this.password[i] >= '!' &&  
            this.password[i] <= '@') 
            splsymbol++;  
    } 
    if(upper>1 && lower >2 && digit >1 && splsymbol >0)
    {
      console.log('Good');
      return "Good" ;
    }
    else
    {
      console.log('bad');
      return "Bad" ;
    }
    
  }
  ArrayAddition()
  {
    var count:any=0;
    for (var i = 0; i < this.arr.length; i++) 
    { 
        count=count+this.arr[i];
    } 
    console.log(count);
    return count ;
  } 
  ngOnInit()
  {
    this.CountCapital('NILesh Pande');
    this.CheckPassword();
    this.ArrayAddition();
  }

}
