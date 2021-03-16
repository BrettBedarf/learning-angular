import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" [(ngModel)]="name" />
    <p>Hello {{ name }}!</p>
    <p>User Component</p>
  `,
})
export class UserComponent {
  name = 'Brett';

  onUserInput(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
