import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent {
  constructor(private authService : AuthService , private router : Router){
    console.log('AddWorkComponent');
  }
  ngOnInit(): void {
    console.log('AddWorkComponent');
    this.createForm()
  }
  addWorkForm!:FormGroup;
  createForm(){
    this.addWorkForm = new FormGroup({
      username : new FormControl(),
      email : new FormControl(),
      qualification : new FormControl(),
      yearofexp : new  FormControl(),
      age: new FormControl(),
      dob : new FormControl()
    });
  }
  onSubmit(){
    console.log(this.addWorkForm.value);
    this.authService.addWork(this.addWorkForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(["/success"])
    });
  }

}
