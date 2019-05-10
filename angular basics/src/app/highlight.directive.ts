import { Directive, ElementRef, OnInit, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: "[highlight]"
})

export class Highlight implements OnInit {
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  // @Input() text: String;
  // @HostBinding('innerText') text: String;
  // @HostListener('mouseover') mouseover() {
  //   this.renderer.setStyle(this.ele.nativeElement, 'color', 'red');
  //   this.text = "I am 5 feet 11 inches tall.";
  //   //console.log(this.text);
  // }

  ngOnInit() {

  }
}
