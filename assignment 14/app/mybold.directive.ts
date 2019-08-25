import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appMybold]'
})
export class MyboldDirective {

  constructor(private ele:ElementRef) { }

  @HostListener('mouseenter') onmouseenter()
{
this.setcolor('#fcd030','200');
}
@HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('#9eef41','600');
  }

setcolor(color:string,style:string)
{
  this.ele.nativeElement.style.background=color;
  this.ele.nativeElement.style.fontWeight=style;
}

}
