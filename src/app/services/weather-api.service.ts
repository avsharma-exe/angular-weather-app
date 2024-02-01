import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../global/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) : Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+cityName, {
      headers: new HttpHeaders()
        .set(environment.headerName, environment.headerValue)
        .set(environment.hostName, environment.hostValue),
    });
  }
}
