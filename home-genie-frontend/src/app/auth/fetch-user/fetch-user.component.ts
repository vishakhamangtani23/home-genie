import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/home/home.service';
import { User } from 'src/app/shared/interfaces/User.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-fetch-user',
  templateUrl: './fetch-user.component.html',
  styleUrls: ['./fetch-user.component.css']
})
export class FetchUserComponent {
  constructor(private cookieService : CookieService, private authService : AuthService) {}
  ngOnInit(): void {
    console.log('FetchUserComponent');
    this.fetchUser()
  }
  user: any
  userId = this.cookieService.get("userId");
  fetchUser()
  {
    this.authService.fetchUser(this.userId).subscribe((response)=>{
      console.log(response);
      this.user = response;
    })
  }
}
