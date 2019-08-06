import { Component, OnInit } from '@angular/core';
import {ArithmaticService} from '../arithmatic.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private asd:ArithmaticService) { }
  public answer:boolean;
  ngOnInit() {
  }

  fun()
  {
    this.answer= this.asd.checkprime(5);
  }
}
