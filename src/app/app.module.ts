import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';
import { DayCardComponent } from './components/day-card/day-card.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { DaysWeatherService } from './services/days-weather.service';
import { FormsModule } from '@angular/forms';
import { DaysListComponent } from './components/days-list/days-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchWeatherComponent,
    DayCardComponent,
    DaysListComponent,
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [DaysWeatherService,DaysListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
