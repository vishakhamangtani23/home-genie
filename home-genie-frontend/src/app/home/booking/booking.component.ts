import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  appointmentForm!: FormGroup;
  constructor(private homeService : HomeService){}
  timeSlots!: string[];
  generateTimeSlots(startHour: number, endHour: number, interval: number): string[] {
    const timeSlots: string[] = [];
    let currentTime = new Date();
    currentTime.setHours(startHour, 0, 0); // Set the starting hour

    const endTime = new Date();
    endTime.setHours(endHour, 0, 0); // Set the ending hour

    while (currentTime <= endTime) {
      const timeString = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      timeSlots.push(timeString);
      currentTime.setMinutes(currentTime.getMinutes() + interval); // Add interval minutes
    }

    return timeSlots;
  }
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
      username: new FormControl(),
      password: new FormControl(),
    });
  }
  pd!:any;
  ngOnInit():void
  {
    this.createForm();
    this.getPayment();
  }
  getPayment():void{
this.homeService.getPayment().subscribe((res)=>{
  console.log(res)
  this.pd=res;
})
  }

}
