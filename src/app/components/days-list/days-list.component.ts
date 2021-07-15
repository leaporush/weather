
import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyForcasts, DateModel } from '../../Models/date-model';
import { DaysWeatherService } from '../../services/days-weather.service';
@Component({
  selector: 'app-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.scss']
})
export class DaysListComponent implements OnInit {

  public data!:DateModel[];
  public datajson:string="";
  @Input() myText:string="";

  numberToDisplay:number=5;

  public iconPhrase=["Sunny","Mostly sunny","Clear"]

  public daysToDisplay: DateModel[] = [];

  public maxTemperature:number=0;

  constructor(private daysWeatherService:DaysWeatherService) {

    
   }

   initDefaultDays():void{
    this.daysToDisplay=this.data.filter(d=> new Date(d.Date).getDate()-new Date().getDate()<=5
     && new Date(d.Date).getDate()-new Date().getDate()>0);
     var t=Math.max.apply(Math,this.daysToDisplay.map(d=>d.Temperature.Maximum.Value));
     this.maxTemperature=t;
   }

  ngOnInit(): void {

    this.daysWeatherService.getAll().pipe(
      
    ).subscribe(res=>{
      this.data=res['DailyForecasts']; 

      this.initDefaultDays();
    
      this.datajson = JSON.stringify( res);

     
    })
   
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('change!!');
    if(this.myText!="")
      this.changeSearchText(this.myText);

  }

  changeSearchText(text:string):void{
    
    if(this.iconPhrase.includes(text)){
      console.log('text');
     this.daysToDisplay=this.data.filter(d=>(d.Day.IconPhrase==text||d.Night.IconPhrase==text)&& new Date(d.Date).getDate()-new Date().getDate()<=this.numberToDisplay
     && new Date(d.Date).getDate()-new Date().getDate()>0).slice(0,this.numberToDisplay)
     }
     else if(!isNaN(Number(text)))
     {
      console.log('number');
       this.daysToDisplay=this.data.filter(d=>d.Temperature.Maximum.Value>=Number(text)&& new Date(d.Date).getDate()-new Date().getDate()<=this.numberToDisplay
              && new Date(d.Date).getDate()-new Date().getDate()>0);
     }
     else{

      console.log('init default days');
      this.initDefaultDays();
     }
    
      } 
   } 

  

  


