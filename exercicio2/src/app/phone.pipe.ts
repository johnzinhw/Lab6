import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: number, torf: boolean): string {
    let tel : string = value.toString();

    //LOGS
    console.log(torf);
    console.log(tel.length);

    if (torf){
      tel = "(35)" + tel.substring(0,5)+
      "-" + tel.substring(5);
    }else{
      tel = tel.substring(0,5) +
      "-" + tel.substring(5);
    }

    return tel;
    
  }
  }

