import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit{

  constructor(private http:HttpClient,private homeService:HomeService,private cookieService : CookieService){

  }

  userId = this.cookieService.get("userId");
  bookings!:any
  ngOnInit(): void {
    this.getBookings(this.userId)
  }

  getBookings(userId:any)
  {this.homeService.getBookings(userId).subscribe((bookings:any)=>{
    this.bookings=bookings
  })
  }

  
  
}
