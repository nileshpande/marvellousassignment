import { Component, OnInit } from '@angular/core';
import {StringyService} from '../stringy.service';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private asd:StringyService) { }
  public answer:number;
  ngOnInit() {
  }

  fun()
  {
    this.answer= this.asd.countcapital('Hello');
  }
}
