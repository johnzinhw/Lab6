import { Component, ViewChild } from '@angular/core';
import { Student } from './student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('studentForm', { static: true })
  myForm : NgForm;
  
  age = 1;
  title : string = 'Univás';
  name = 'Rodrigo';
  email = 'rodrigo@gmail.com';
  cpf : number;
  student = {
    name: 'João',
    email: 'jone@gmail.com'
  };
  valueA : number;
  valueB : number;
  valueC : number;

  fakeStudent : Student;
  students : Student[] = [];

  ngOnInit() {
    this.newStudent = new Student();
    this.studentList = [];

    console.log('INICIALIZAÇÃO!!!');

    this.fakeStudent = new Student();
    this.fakeStudent.name = 'Juarez';
    this.fakeStudent.email = 'juarez@gmail.com';
    this.fakeStudent.cpf = '123.123.123-24';
    
    for (let i = 0; i < 10; i++) {
      let newStudent = new Student();
      newStudent.name = 'Estudante ' + i;
      newStudent.email = 'estudante' + i + '@gmail.com';
      newStudent.cpf = '123.123.123-0' + i;
      this.students.push(newStudent);
    }
  }

  saveAction() {
    this.age++;
    console.log('CPF atual:::' + this.cpf);
  }

  sum() {
    this.valueC = this.valueA + this.valueB;
  }







  ////////////NEW PART///////////////
  newStudent: Student;
  studentList: Student[];

  saveStudent() {
    if (!this.newStudent.id) {
      this.newStudent.id = (new Date()).getTime();
      this.studentList.push(this.newStudent);
    } else {
      let oldStudent = this.studentList.find(s => s.id === this.newStudent.id);
      oldStudent.name = this.newStudent.name;
      oldStudent.email = this.newStudent.email;
      oldStudent.cpf = this.newStudent.cpf;
    }

    this.newStudent = new Student();
    this.myForm.reset();
  }

  deleteStudent(student : Student) {
    let index = this.studentList.findIndex(s => s.id === student.id);
    this.studentList.splice(index, 1);
  }

  editStudent(student : Student) {
    this.newStudent = new Student(student.id, student.name, student.email, student.cpf);
  }
}
