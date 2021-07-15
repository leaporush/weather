export interface DailyForcasts{
    Dates:DateModel[];
}

export interface DateModel {
    Date:Date;
    Temperature:Temperature;
    Day:DayPart;
    Night:DayPart;
    Sources:string[];
    
   
}

export interface Temperature{
    Minimum:TempValues;
    Maximum:TempValues;

}
export interface TempValues{
    Value:number;
    unit:string;
    UnitType:number;
}
export interface DayPart{
    Icon:number;
    IconPhrase:string;
    HasPrecipitation:boolean;
}


