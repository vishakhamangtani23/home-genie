import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  appointmentForm!: FormGroup;
  constructor(private homeService: HomeService , private router :Router) {}
  timeSlots : String [] = [ "1:00pm" , "2:00pm " , "3:00pm " ];
  proceedToPay() {
    if (this.appointmentForm.valid) {
      const appointmentData = this.appointmentForm.value;
      console.log('Appointment details:', appointmentData);
      // Proceed with payment or other actions
    } else {
      console.error('Form is invalid');
    }
  }
  createForm(): void {
    this.appointmentForm = new FormGroup({
      location: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
    });
  }
  pd!: any;
  ngOnInit(): void {
    this.createForm();
    this.getPayment();
  }
  getPayment(): void {
    this.homeService.getPayment().subscribe((res) => {
      console.log(res);
      this.pd = "../"+res.paymentLinkUrl;
    });
  }
 
}
