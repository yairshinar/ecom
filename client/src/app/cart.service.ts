import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // If you have a Product type, use Product[] instead of any[]
  private cart: any[] = [];

  // Define the product parameter type. Replace 'any' with your 'Product' type if you have one
  addToCart(product: any) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  // Define the product parameter type. Replace 'any' with your 'Product' type if you have one
  removeFromCart(product: any) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
