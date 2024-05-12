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
    this.options = {
      // data:this.fetchAllBookings() ,
      data:[
        { asset: "Stocks", amount: 60000 },
        { asset: "Bonds", amount: 40000 },
        { asset: "Cash", amount: 7000 },
        { asset: "Real Estate", amount: 5000 },
        { asset: "Commodities", amount: 3000 },
      ],
      title: {
        text: 'Portfolio Composition',
      },
      series: [
        {
          type: 'pie',
          angleKey: 'asset',
          legendItemKey: 'amount',
        },
      ],
    };
  }
  bookings!: any;
  ngOnInit(): void {
    console.log('AdminDashboardComponent');
    this.fetchAllBookings();
  }
  fetchAllBookings() {
    this.adminService.fetchAllBookings().subscribe((res) => {
      console.log(res);
      this.bookings = res;
      return this.bookings;
    });
  }
}
