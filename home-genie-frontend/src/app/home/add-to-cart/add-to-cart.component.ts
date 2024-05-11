import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
constructor(private homeService :HomeService){}
ngOnInit():void{
this.fetchcart()
}
cart:any

fetchcart()
{
  this.homeService.fetchToCart().subscribe((response)=>{
    console.log(response);
    this.cart = response;
  })
}
}
