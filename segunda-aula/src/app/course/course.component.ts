import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  newCourse: Course;
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.newCourse = new Course();
    this.getAll();
  }

  getAll() {
    this.courseService.getAll().subscribe(
      data => this.courses = data
    );
  }

  save() {
    if (!this.newCourse.id) {
      this.courseService.save(this.newCourse).subscribe(
        data => this.getAll()
      );

    } else {
      this.courseService.edit(this.newCourse).subscribe(
        data => this.getAll()
      );
    }

    this.newCourse = new Course();
  }

  delete(course : Course) {
    this.courseService.delete(course).subscribe(
      data => this.getAll()
    );
  }

  edit(course : Course) {
    this.newCourse = new Course(course.id, course.name, course.workload);
  }

}
