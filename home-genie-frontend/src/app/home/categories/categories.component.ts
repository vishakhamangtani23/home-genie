import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private cookieService : CookieService , private homeService : HomeService , private activatedRoute : ActivatedRoute){this.activatedRoute.params.subscribe((params) => {
    this.serviceId = params['serviceId'];
    console.log('Slug:', this.serviceId);
    
  });}
  ngOnInit():void
  {
    console.log('CategoriesComponent');
    this.fetchCategories()

  }
  categories:any
  serviceId:any
  fetchCategories()
  {
    this.homeService.getCategories(this.serviceId).subscribe((response)=>{
      console.log(response);
      this.categories = response;
    })
  } 
  userId = this.cookieService.get("userId")
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
