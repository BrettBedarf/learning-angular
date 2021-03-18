import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-essentials-udemy';
  rootName = 'BrettRoot';
  rootItems = ['Apples', 'Bananas', 'Cherries'];
  number = 0;

  onNameChanged(newName: string) {
    this.rootName = newName;
  }

  onCartChanged(cartItem: string) {
    this.rootItems.push(cartItem);
    console.log(this.rootItems);
  }
  onIncreaseClick() {
    this.number++;
  }
}
