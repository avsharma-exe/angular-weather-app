import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherData } from './global/weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  city?: string;
  weatherData?: WeatherData;


  constructor(private weatherService: WeatherApiService){}


  ngOnInit(): void {
    this.weatherService.getWeatherData('Nagpur')
    .subscribe({
      next: (response)=> {
        this.weatherData = response
      }
    })
  }

  onSubmit() {
    this.weatherService.getWeatherData(this.city!)
    .subscribe({
      next: (response)=> {
        this.weatherData = response
      }
    })
  }
}
