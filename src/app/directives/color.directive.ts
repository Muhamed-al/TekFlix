import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: false
})
export class ColorDirective {

  constructor(private el : ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('dblclick') onDblClick() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('keydown') onKeyDown() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('keyup') onKeyUp() {
    this.el.nativeElement.style.backgroundColor = 'orange';
  }



  @HostListener('scroll') onScroll() {
    this.el.nativeElement.style.backgroundColor = 'pink';
  } 

  @HostListener('mousemove') onMouseMove() {
    this.el.nativeElement.style.backgroundColor = 'cyan';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
  @HostListener('contextmenu') onRightClick() {
    this.el.nativeElement.style.backgroundColor = 'grey';
  }


}
