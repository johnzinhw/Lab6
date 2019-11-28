import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temp } from './temp';

const httpOption = {
  headers : new HttpHeaders({"Content-Type" : "application/json"})
};
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'https://pacific-wave-50441.herokuapp.com/api/weather';


  constructor(private http: HttpClient) { }

  getAll(id : string) : Observable<Object[]> {
    return this.http.get<Object[]>(this.url +'/'+ id);
  }
}
