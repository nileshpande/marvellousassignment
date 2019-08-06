import { Component, OnInit } from '@angular/core';
import {ArithmaticService} from '../arithmatic.service';
import {StringyService} from '../stringy.service';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private asd:ArithmaticService,private qwe:StringyService) { }
  public answer:boolean;
  public answer2:number;
  
  ngOnInit() {
  }

  fun()
  {
    this.answer= this.asd.checkprime(5);
    this.answer2= this.qwe.countcapital('Nilesh Pande');
  }
}
