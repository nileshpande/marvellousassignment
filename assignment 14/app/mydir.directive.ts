import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
{
this.setcolor('#fcd030');
}
@HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('#9eef41');
  }

setcolor(color:string)
{
  this.ele.nativeElement.style.background=color;
}

} 
