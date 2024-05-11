import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  emailGroupForm!: FormGroup;
  email!: FormControl;
  ngOnInit(): void {
    this.emailGroupForm = new FormGroup({
      email: new FormControl(),
    });
  }
  submit() {
    console.log(this.email.value);
  }
}
