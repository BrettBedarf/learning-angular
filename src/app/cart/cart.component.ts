import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() items: string[] = [];
  @Output() cartChanged = new EventEmitter<string>();
  addItemInput = '';

  onAddToCartInput(event: Event) {}

  onAddToCart() {
    this.cartChanged.emit(this.addItemInput);
    this.addItemInput = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
