import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <!-- <input type="text" [(ngModel)]="name" /> -->
    <input type="text" (input)="onUserInput($event)" [value]="name" />
    <p>Hello {{ name }}!</p>
    <p>User Component</p>
    <app-user-detail></app-user-detail>
  `,
})
export class UserComponent {
  @Input() name = '';
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event: Event) {
    // this.name = (<HTMLInputElement>event.target).value;
    this.nameChanged.emit((<HTMLInputElement>event.target).value);
  }
}
