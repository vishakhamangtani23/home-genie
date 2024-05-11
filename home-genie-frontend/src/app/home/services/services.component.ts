import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private homeService : HomeService) {}
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
  

}
