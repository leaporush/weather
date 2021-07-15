import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DateModel } from '../../Models/date-model';
import { DaysWeatherService } from '../../services/days-weather.service';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss']
})
export class DayCardComponent implements OnInit {

  @Input() dayCard!:DateModel;
  @Input() maxTemperature:number=0;
  
  constructor() {

    
   }

  ngOnInit(): void {
  
  }

}
