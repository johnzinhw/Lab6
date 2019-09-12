import { Component, ViewChild } from '@angular/core';
import { Students } from './students';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('studentForm', {static:true})
  studentForm: NgForm;

  newStudents : Students = new Students();
  students : Students[]=[];

  //botão salvar
  saveStudents(){
    if (!this.newStudents.id) {
      this.newStudents.id = (new Date()).getTime();
      this.students.push(this.newStudents);
    
    } else {
      let oldStudents = this.students.find(t => t.id === this.newStudents.id);
      oldStudents.name = this.newStudents.name;
      oldStudents.email = this.newStudents.email;
      oldStudents.phone = this.newStudents.phone;
    }
    this.newStudents = new Students();
    this.studentForm.reset();
  }

  edit(students : Students) {
    this.newStudents = new Students(students.id, students.name, students.email, students.phone);
  }

  delete(students : Students) {
    let index = this.students.findIndex(t => t.id === students.id);
    this.students.splice(index, 1);
  }

}
