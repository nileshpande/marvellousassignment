import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {

  public defaulttext:string = "Marvellous";
  constructor() { }

  ngOnInit() {
  }

  showdetail()
  {
    return "Marvellous";
  }
  chaangetext()
  {
    this.defaulttext = "Marvellous changed"  ;
  }
}
