import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private homeService : HomeService){}
  products : any;
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

}
