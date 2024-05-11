import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  emailGroupForm!: FormGroup;
  constructor(private authService: AuthService,  private router: Router) {}
  ngOnInit(): void {
    this.emailGroupForm = new FormGroup({
      email: new FormControl(""),
    });
  }
  submit() {
    this.authService.sendMail(this.emailGroupForm.value).subscribe((res)=>{
      console.log(res);
      alert('Check your mail and reset your password please!')
      this.router.navigate(['/login']);
    })
  }
}
