import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private homeService : HomeService){}
  ngOnInit():void{
    this.fetchProducts()
  }
  fetchProducts()
  {
  }

}
