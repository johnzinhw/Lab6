import { Component, ViewChild } from '@angular/core';
import { States } from './state';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('cepForm', {static:true})
  cepForm: NgForm;

  newStates : States = new States();
  states : States[]=[];

  //botão salvar
  saveCeps(){
    if (!this.newStates.id) {
      this.newStates.id = (new Date()).getTime();
      this.states.push(this.newStates);
    
    } else {
      let oldReg = this.states.find(t => t.id === this.newStates.id);
      oldReg.cep = this.newStates.cep;
      oldReg.cidade = this.newStates.cidade;
      oldReg.estado = this.newStates.estado;
    }
    this.newStates = new States();
    this.cepForm.reset();
  }

  edit(states : States) {
    this.newStates = new States(states.id, states.cep, states.cidade, states.estado)
  }

  delete(states : States) {
    let index = this.states.findIndex(t => t.id === states.id);
    this.states.splice(index, 1);
  }

}
