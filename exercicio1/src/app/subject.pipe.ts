import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subject'
})
export class SubjectPipe implements PipeTransform {

  transform(value: string): string {
    if (value.startsWith('LAB')) {
      value = value.replace('LAB', 'Laboratório de Programação');
    } else if (value.startsWith('TEC')) {
      value = value.replace('TEC', 'Técnicas de Programação');
    }
    return value;
  }

}
