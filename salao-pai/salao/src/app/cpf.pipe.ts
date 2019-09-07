import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { verifyHostBindings } from '@angular/compiler';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  
  transform(value: number): string{
    
    let insert : string = value.toString();
    console.log(insert);
    console.log(insert.length);
    if(insert.length===11){

      insert = value.toString();
      insert = insert.substring(0,3) + "." + insert.substring(3,6) +
      "." + insert.substring(6,9) +    "-" + insert.substring(9,11);
      
       console.log(insert);
    }

  return insert;
  }

}
