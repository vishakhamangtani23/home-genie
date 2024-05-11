import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }
  fetchAllServices():Observable<any>
  {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'services');
  }
  fetchAllProducts():Observable<any>
  {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'products');
  }
  fetchAllReviews():Observable<any>{
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'reviews');
  }
}
