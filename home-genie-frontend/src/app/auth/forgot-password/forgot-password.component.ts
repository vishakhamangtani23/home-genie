import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  emailGroupForm!: FormGroup;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.emailGroupForm = new FormGroup({
      email: new FormControl(""),
    });
  }
  submit() {
    this.authService.sendMail(this.emailGroupForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
}
