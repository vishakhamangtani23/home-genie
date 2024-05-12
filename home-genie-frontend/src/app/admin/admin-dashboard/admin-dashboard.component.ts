import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  options!:any;
  constructor(private adminService: AdminService) {

  }
  bookings!: any;
  ngOnInit(): void {
    console.log('AdminDashboardComponent');
    
  }
  fetchAllBookings() {
    this.adminService.fetchAllBookings().subscribe((res) => {
      console.log(res);
      this.bookings = res;
      this.makeChart(this.bookings);
    });
  }
  makeChart(data:any){
    this.options = {
      data:data ,
      
      title: {
        text: 'Portfolio Composition',
      },
      series: [
        {
          type: 'pie',
          angleKey: 'amount',
          legendItemKey: 'location',
        },
      ],
    };
  }
}
