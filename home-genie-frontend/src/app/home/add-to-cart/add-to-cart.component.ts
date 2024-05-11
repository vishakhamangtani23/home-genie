import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.fetchCart();
  }
  cart: any;
  total = 0;
  fetchCart() {
    this.homeService.fetchToCart().subscribe((response) => {
      console.log(response);
      this.cart = response;
      this.doTotal();
    });
  }
  doTotal() {
    this.cart.forEach((element: any) => {
      console.log(element);
      if (element.price) {
        this.total = this.total + element.price;
      }
      if (element.product_price) {
        this.total = this.total + element.product_price;
      }
    });
    console.log(this.total + 'Total');
  }
}
