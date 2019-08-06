import { Component, OnInit } from '@angular/core';
import {ArithmeticService} from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private math:ArithmeticService) { }

  ngOnInit() {

  }
  public addvalue:number = 0;
  public subvalue:number = 0;
  fun()
  {
    this.addvalue= this.math.addd(12,4);
    this.subvalue= this.math.subb(89,54);
  }

}
