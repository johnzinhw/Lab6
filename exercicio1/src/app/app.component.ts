import { Component, ViewChild } from '@angular/core';
import { Teacher } from './teacher';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('teacherForm', {static: true})
  teacherForm : NgForm;

  newTeacher : Teacher = new Teacher();
  teachers : Teacher[] = [];

  saveTeacher() {
    if (!this.newTeacher.id) {
      this.newTeacher.id = (new Date()).getTime();
      this.teachers.push(this.newTeacher);
    
    } else {
      let oldTeacher = this.teachers.find(t => t.id === this.newTeacher.id);
      oldTeacher.course = this.newTeacher.course;
      oldTeacher.subject = this.newTeacher.subject;
      oldTeacher.name = this.newTeacher.name;
      oldTeacher.year = this.newTeacher.year;
      oldTeacher.semester = this.newTeacher.semester;
    }

    this.newTeacher = new Teacher();
    this.teacherForm.reset();
  }

  edit(teacher : Teacher) {
    this.newTeacher = new Teacher(teacher.id, teacher.course, teacher.subject, 
        teacher.name, teacher.year, teacher.semester);
  }

  delete(teacher : Teacher) {
    let index = this.teachers.findIndex(t => t.id === teacher.id);
    this.teachers.splice(index, 1);
  }

}
