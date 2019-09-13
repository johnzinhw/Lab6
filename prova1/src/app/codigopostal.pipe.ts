import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep'
})
export class CodigopostalPipe implements PipeTransform {

  transform(value: number): string{
    
    let cod : string = value.toString();

    //LOGS
    console.log(cod);
    console.log(cod.length);

    //37.540-000
      cod = cod.substring(0,2) + 
      "." + cod.substring(2,5) +
      "-" + cod.substring(5) + 
       console.log(cod);
       
  return cod;
    }

    
    
  }
