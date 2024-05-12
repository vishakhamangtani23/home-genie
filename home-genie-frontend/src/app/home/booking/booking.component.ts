import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  appointmentForm!: FormGroup;
  constructor(
    private homeService: HomeService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  timeSlots: String[] = ['1:00pm', '2:00pm ', '3:00pm '];
  userId = this.cookieService.get('userId');
  createForm(): void {
    this.appointmentForm = new FormGroup({
      location: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
      userId: new FormControl(),
    });
  }
  pd!: any;
  ngOnInit(): void {
    this.createForm();
    this.getPayment();
  }
  proceedToPay(): void {
    if (this.appointmentForm.valid) {
      const appointmentData = this.appointmentForm.value;
      console.log('Appointment details:', appointmentData);
      // Handle payment
      if (this.pd) {
        window.location.href = this.pd;
        if(true){
          this.router.navigate(['/home']);
        } // Redirect to payment link URL
      } else {
        console.error('Payment link not available');
      }
    } else {
      console.error('Payment link not available');
    }
  }

  getPayment(): void {
    this.homeService.getPayment().subscribe((res) => {
      console.log(res);
      this.pd = res.paymentLinkUrl;
    });
  }

  insertBookings():void{
    this.homeService.addBooking(this.appointmentForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
}
