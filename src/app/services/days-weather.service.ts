import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { DailyForcasts,DateModel } from '../Models/date-model';
import { map } from 'rxjs/operators';
const baseUrl = '../assets/dailyForecasts.json';


@Injectable({
  providedIn: 'root'
})

export class DaysWeatherService {

  //public data:any;

 /* constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.data=data;
        console.log(data);
    });
}

public getJSON(): Observable<DailyForcasts> {
    return this.http.get<Observable<DailyForcasts>>();
}
}*/


constructor(private http: HttpClient) { }
   
getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
}

}
