import { Component, ViewChild } from '@angular/core';
import { Clients } from './clients';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('clientForm', {static:true})
  clientForm: NgForm;

  newClients : Clients = new Clients();
  clients : Clients[]=[];

  //botão salvar
  saveClients(){
    if (!this.newClients.id) {
      this.newClients.id = (new Date()).getTime();
      this.clients.push(this.newClients);
    
    } else {
      let oldClients = this.clients.find(t => t.id === this.newClients.id);
      oldClients.name = this.newClients.name;
      oldClients.email = this.newClients.email;
      oldClients.phone = this.newClients.phone;
      oldClients.cpf = this.newClients.cpf;
      oldClients.born = this.newClients.born;
    }
    this.newClients = new Clients();
    this.clientForm.reset();
  }

  edit(clients : Clients) {
    this.newClients = new Clients(clients.id, clients.name, clients.email, clients.phone, 
      clients.cpf, clients.born);
  }

  delete(clients : Clients) {
    let index = this.clients.findIndex(t => t.id === clients.id);
    this.clients.splice(index, 1);
  }

}
