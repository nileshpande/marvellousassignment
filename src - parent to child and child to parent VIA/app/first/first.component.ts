import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { eventNames } from 'cluster';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input() public parentmsg;
  @Output() public obj = new EventEmitter();
  public bychild:string = "Hello By Child";
  constructor() { }

  ngOnInit() {
  }

  SendEvent()
  {
    this.obj.emit(this.bychild);
  }

}
