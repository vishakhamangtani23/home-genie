import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private homeService : HomeService , private cookieService : CookieService){}
  products : any;
  userId = this.cookieService.get("userId")
  ngOnInit():void{
    this.fetchProducts()
  }
  fetchProducts()
  {
    this.homeService.fetchAllProducts().subscribe((response)=>{
      console.log(response);
      this.products= response;
    })
  }
  addToCart(product:any)
  {
    console.log(product)
    const body = {
      userId : this.userId,
      productId : product.id,
      quantity:1
    }
    this.homeService.addToCart(body).subscribe((res)=>{
      console.log(res);
      alert('Product added to cart')
    })
  }
}
