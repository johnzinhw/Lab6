import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { verifyHostBindings } from '@angular/compiler';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  
  transform(value: number): string{
    
    let vv : string = value.toString();
    console.log(vv);
    console.log(vv.length);
    if(vv.length===11){
      vv = value.toString();
      vv = vv.substring(0,3) + 
      "." + vv.substring(3,6) +
      "." + vv.substring(6,9) + 
      "-" + vv.substring(9,11);
       console.log(vv);
    }

    
  return vv;
  }

}
