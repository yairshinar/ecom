import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products:any = [];
  cartItems:any = [];
  title = 'Your App Name'; // You can replace 'Your App Name' with whatever you prefer.

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });

    this.cartItems = this.cartService.getCart();
  }

  addToCart(product:any) {
    this.cartService.addToCart(product);
  }
}
