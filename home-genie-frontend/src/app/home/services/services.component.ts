import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private cookieService : CookieService, private homeService : HomeService) {}
  ngOnInit(): void {
    console.log('ServicesComponent');
    this.fetchServices()
  }
  services : any;
  fetchServices()
  {
    this.homeService.fetchAllServices().subscribe((response)=>{
      console.log(response);
      this.services = response;
    })
  }
  addToCart(body:any){
    body = {
      userId : this.cookieService.get("userId"),
      serviceId :body.id,
      quantity:1
    }
    console.log(body)
    this.homeService.addToCart(body).subscribe((res)=>{
      console.log(res);
      alert('Service added to cart')
    })

  }
  

}
