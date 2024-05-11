import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private cookieService : CookieService , private homeService : HomeService){}
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

}
