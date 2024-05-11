import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardServiceService {
  isLoginPage!:any;
  constructor(private cookieService: CookieService) {}
  canActivate(): boolean {
    if (this.cookieService.get('userRole') !== APP_CONSTANTS.ADMIN_ROLE) {
      //redirect
    }
    return this.cookieService.get('userRole') === APP_CONSTANTS.ADMIN_ROLE;
  }
}
