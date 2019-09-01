import { Component, ViewChild } from '@angular/core';
import { Professor } from './professor';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Professor por Disciplina';

  @ViewChild('teacherForm', {static: true})
  myForm: NgForm;

  novoProfessor: Professor;
  professores: Professor[]=[];

  name: string;
  disciplina: string;
  professor: string;
  ano : string;
  semestre: string;


  saveClass(){
    if (!this.novoProfessor.id){
      
      let Prof = new Professor();
      
      Prof.name=this.name;
      Prof.disciplina=this.disciplina;
      Prof.professor=this.professor;
      Prof.ano=this.ano;
      Prof.semestre=this.semestre;


      Prof.id=(new Date()).getTime();
      this.professores.push(Prof);
      
    }else{    

      let oldTeacher = this.professores.find(s => s.id ===this.novoProfessor.id);
      oldTeacher.name = this.name;
      oldTeacher.disciplina=this.disciplina;
      oldTeacher.professor=this.professor;
      oldTeacher.ano=this.ano;
      oldTeacher.semestre=this.semestre;
    }

    //zerar os campos
    this.name = null;
    this.professor = null;
    this.disciplina = null;
    this.professor = null;
    this.ano = null;
    this.semestre = null;

    //restar os campos com o campo obrigatorio
    this.myForm.reset();

  }

teacherDelete (professor: Professor){
  let index = this.professores.findIndex(s => s.id === professor.id);
  this.professores.splice(index, 1); //splice pega os elementos da tabela, ql numero e qts a partir do index tal
}



teacherEdit (professor : Professor){
  this.novoProfessor = new Professor(professor.id, professor.disciplina, professor.name,
                                    professor.professor, professor.ano, professor.semestre);
  this.name = professor.name;                        
  this.disciplina = professor.disciplina;
  this.professor = professor.professor;
  this.ano = professor.ano;
  this.semestre = professor.semestre;
} 

}