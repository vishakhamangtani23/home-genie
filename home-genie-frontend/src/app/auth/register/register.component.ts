import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl(),
      fullname: new FormControl(),
    });
  }
  constructor(private authService: AuthService, private router: Router) {}
  submit(): void {
    let registeredOrNot!: boolean; // Declare the variable
    console.log(this.registerForm.value);
    this.authService.registerUser(this.registerForm.value).subscribe((res) => {
      console.log(res);
      res ? (registeredOrNot = true) : (registeredOrNot = false);
    });
    if (registeredOrNot == true) {
      this.router.navigate(['/login']);
    }
    alert(
      'Oops! Something went wrong. Please try again. Maybe u r already registered try logging in '
    );
  }
}
