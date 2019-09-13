import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(estado :string ) : string{
    if ( estado =='mg' || estado =="MG"){
      estado = "Minas Gerais";
    }

    if ( estado =='sp' || estado =="SP"){
      estado = "São Paulo";
    }

    if ( estado =='es' || estado =="ES"){
      estado = "Espirito Santo";
    }

    if ( estado =='rj' || estado =="RJ"){
      estado = "Rio De Janeiro";
    }

    return estado;
    
  }

}
