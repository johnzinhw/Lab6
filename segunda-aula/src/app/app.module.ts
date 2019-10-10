import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { CourseComponent } from './course/course.component';
import { NotfoundComponent } from './notfound/notfound.component';

//lista de rotas
const routes: Routes =[
  {path: 'course', component: CourseComponent},
  {path: 'subject', component: SubjectComponent},
  {path: '', redirectTo: 'course', pathMatch: 'full' },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    CourseComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // importa a rota que foi criada
    RouterModule.forRoot(
      routes
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
