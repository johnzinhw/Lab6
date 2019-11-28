export class Temp{
    
    weather_state_abbr: string;
    applicable_date : Date;
    min_temp : number;
    max_temp: number;

    constructor(weather_state_abbr?:string, applicable_date?:Date, min_temp?:number, max_temp?:number  ){
        this.applicable_date = applicable_date;
        this.weather_state_abbr = weather_state_abbr;
        this.max_temp = max_temp;
        this.min_temp = min_temp;
    }
}
