import { Component } from '@angular/core';
import { Teacher } from './teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTeacher: Teacher = new Teacher();
  teachers : Teacher[] =[];

  saveTeacher(){
    if (!this.newTeacher.id){
      this.newTeacher.id= (new Date()).getTime();
      this.teachers.push(this.newTeacher);

    }else{
      let oldTeacher = this.teachers.find(t => t.id === this.newTeacher.id);
      oldTeacher.course = this.newTeacher.course;
      oldTeacher.subject = this.newTeacher.subject;
      oldTeacher.name = this.newTeacher.name;
      oldTeacher.year = this.newTeacher.year;
      oldTeacher.semester = this.newTeacher.semester;
    }

    this.newTeacher=new Teacher();
  }

  edit (teacher: Teacher){
    this.newTeacher = new Teacher(teacher.id, teacher.course, teacher.subject,
       teacher.name, teacher.year, teacher.semester)

  }

  delete(teacher: Teacher){
    let index = this.teachers.findIndex( t => t.id===teacher.id); // achando o teacher X
    this.teachers.splice(index, 1); //remova nessa posicao 1 elemento
  }
}
