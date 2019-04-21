import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})

export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('mouseover') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseout') toggleClose() {
    this.isOpen = !this.isOpen;
  }

}
