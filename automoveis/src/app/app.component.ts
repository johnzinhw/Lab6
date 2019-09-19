import { Component, ViewChild } from '@angular/core';
import { Veiculos } from './veiculos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('autForm', {static:true})
  autForm: NgForm;

  newVeiculos : Veiculos = new Veiculos();
  veiculos : Veiculos[]=[];

  //botão salvar
  saveItem(){
    if (!this.newVeiculos.id) {
      this.newVeiculos.id = (new Date()).getTime();
      this.veiculos.push(this.newVeiculos);
    
    } else {
      let oldReg = this.veiculos.find(t => t.id === this.newVeiculos.id);
      oldReg.tipo = this.newVeiculos.tipo;
      oldReg.marca = this.newVeiculos.marca;
      oldReg.modelo = this.newVeiculos.modelo;
      oldReg.cor = this.newVeiculos.cor;
      oldReg.ano = this.newVeiculos.ano;
    }
    this.newVeiculos = new Veiculos();
    this.autForm.reset();
  }

  edit(veiculos : Veiculos) {
    this.newVeiculos = new Veiculos(veiculos.id, veiculos.tipo, veiculos.marca, veiculos.modelo,
       veiculos.cor, veiculos.ano)
  }

  delete(veiculos : Veiculos) {
    let index = this.veiculos.findIndex(t => t.id === veiculos.id);
    this.veiculos.splice(index, 1);
  }

}
