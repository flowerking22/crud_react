
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WhetherService {
  base = 'https://api.openweathermap.org/data/2.5/weather?q=';
  unit = '&units=' + 'matric';
  appid = '&appid=' + 'e9eaf9d604219f755f1d7b9da5ffad64';
  constructor(private http: HttpClient) { }
  get(city: string): Observable<any> {
    //alert(this.base + city + this.appid + this.unit);
    //console.log(this.base + city + this.appid + this.unit);
    return this.http.get<any>(this.base + city + this.appid + this.unit);
  }
  // return this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=Kumbakonam&appid=e9eaf9d604219f755f1d7b9da5ffad64&units=matric');
}