import { Component, ViewChild } from '@angular/core';
import { Student } from './student';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('studentForm', {static: true})
  myForm: NgForm;


  age=1;
  title = 'UNIVAS';

  name = 'John';
  cpf: number;

  student = {
    name: 'Joao',
    email: 'joao@gmail.com'
  };

  valueA : number;
  valueB : number;
  valueC : number;

  nameA: string ;
  email: string ;
  cpfA : string ;

  newStudent : Student;
  students : Student[] = []; //inicializa com um array vazio para ser usado

  // ngOnInit(){


  //   this.fakeStudent= new Student();
  //   this.fakeStudent.name='Juarez';
  //   this.fakeStudent.email='jua@gmail.com';
  //   this.fakeStudent.cpf='02930293';

    
  //   for (let i=0; i<10; i++){
  //     let newStudent = new Student ();
  //     newStudent.name='Estudante'+i;
  //     newStudent.email='estudante'+i+'@gmail.com';
  //     newStudent.cpf='12312312366'+i;
  //     this.students.push(newStudent);

  //   }

  // }


  sum (){
    this.valueC = this.valueA + this.valueB;
  }


  saveAction(){
    this.age++;
    console.log('CPF Atual:' + this.cpf);
  }

  ngOnInit(){
    this.newStudent = new Student();
  }

  saveClass(){
    if (!this.newStudent.id){
      
      let StudentExerc = new Student();
      
      StudentExerc.nameA=this.nameA;
      StudentExerc.email=this.email;
      StudentExerc.cpfA=this.cpfA;

      StudentExerc.id=(new Date()).getTime();
      this.students.push(StudentExerc);
      
    }else{    

      let oldStudent = this.students.find(s => s.id ===this.newStudent.id);
      oldStudent.nameA = this.nameA;
      oldStudent.email = this.email;
      oldStudent.cpfA = this.cpfA;
    }

    //zerar os campos
     this.nameA = null;
    this.email = null;
    this.cpfA = null;

    //restar os campos com o campo obrigatorio
    this.myForm.reset();

  }

  studentDelete (student: Student){
    let index = this.students.findIndex(s => s.id === student.id);
    this.students.splice(index, 1); //splice pega os elementos da tabela, ql numero e qts a partir do index tal
  }
 
  

  editStudent (student : Student){
    this.newStudent = new Student(student.id, student.nameA, student.email, student.cpfA);
    this.nameA = student.nameA;
    this.email = student.email;
    this.cpfA = student.cpfA;
  }
}

