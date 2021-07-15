import { Component, Input, ViewChild } from '@angular/core';
import { DaysListComponent } from './components/days-list/days-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(DaysListComponent) private dayList: DaysListComponent;
  constructor(private daysList:DaysListComponent){
    this.dayList=daysList;
  }
  title = 'num454-d14-m07-y2021';

  texttopass="";

  //@Input() mytext:string=""

  changeSearchText(text:any):void{
    this.texttopass=text;
    console.log(text);
    this.dayList.changeSearchText(text);

  }
}
