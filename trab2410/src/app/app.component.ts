import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { Posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'trabalho2';

  newTit: Posts;
  events: Posts[] = [];

  constructor(
    private eventService: CrudService
  ) {
    
  }

  ngOnInit() {
    this.newTit = new Posts();
    this.getAll();
  }

  getAll() {
    this.eventService.getAll().subscribe(
      (data) => { 
        this.events = data
      }
    );
  }

  save() {
    if (!this.newTit.id) {
      this.eventService.save(this.newTit).subscribe(
        (data) => {
          this.getAll()
        }
      );
    } else {
      this.eventService.edit(this.newTit).subscribe(
        (data) => {
          this.getAll()
        }
      );
    }
  }

  edit(event: Posts) {
    this.newTit = new Posts(event.id, event.title, event.autor);
  }

  delet(event: Posts) {
    this.eventService.delet(event).subscribe(
      (data) => {
        this.getAll()
      }
    );
  }


}
