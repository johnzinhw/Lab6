import { Component } from '@angular/core';
import { WeatherService } from './temp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova2';

  objects : Object[];
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getRj();
    
  }
  getRj(){
    this.weatherService.getAll("rj").subscribe(
      data => this.objects = data
    )
  }

  getSp(){
    this.weatherService.getAll("sp").subscribe(
      data => this.objects = data
    )
  }
}
