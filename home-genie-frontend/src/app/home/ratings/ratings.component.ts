import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit{
  ratings:any
  constructor(private homeService:HomeService){}
  ngOnInit(): void {
    this.getRatings()
    
  }

  getRatings(){
    this.homeService.fetchAllReviews().subscribe((rating:any)=>{
      console.log(rating)
      this.ratings=rating
    })
  }


}
