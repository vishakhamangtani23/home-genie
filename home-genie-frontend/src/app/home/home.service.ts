import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  fetchAllServices(): Observable<any> {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'services');
  }
  fetchAllProducts(): Observable<any> {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'products');
  }
  fetchAllReviews(): Observable<any> {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'reviews');
  }
  addToCart(body: any): Observable<any> {
    console.log(body);
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'add-to-cart', body);
  }
  fetchToCart(): Observable<any> {
    return this.http.get(
      APP_CONSTANTS.BACKEND_URL + 'cart/' + this.cookieService.get('userId')
    );
  }
  getCategories(serviceId:any):Observable<any>
  {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'categories/'+serviceId);
  }
  getPayment():Observable<any>{
    return this.http.get(APP_CONSTANTS.BACKEND_URL+"payments")
  }
}
