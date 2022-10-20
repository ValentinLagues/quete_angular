import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.color') myColor:string | undefined;
  @HostBinding('style.fontSize') myFontSize:string | undefined;

  constructor() {}

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myColor = 'red';
  }

  @HostListener('mouseleave') mouseleaveEvent (eventData:Event) {
    this.myColor = 'black';
  }
}
