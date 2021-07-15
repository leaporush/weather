import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.scss']
})
export class SearchWeatherComponent implements OnInit {

  @Input()  text!: string ;
  @Output() textChange = new EventEmitter<string>();
  
 
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  keyPress($event: KeyboardEvent){
    if($event.key=="Enter"){
       this.emit();
       console.log("you press enter");
      }

  }

  emit():void{
    console.log("emit!")
    this.textChange.emit(this.text);
  }

}
