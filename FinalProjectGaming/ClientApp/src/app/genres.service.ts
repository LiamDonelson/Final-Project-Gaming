import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { genres } from './genres';


@Injectable({
  providedIn: 'root'
})
export class GenresService {
baseUrl:string='https://api.rawg.io/api';
  constructor(private http: HttpClient) {
    }
    GetGenres():Observable<genres[]>{
      return this.http.get<genres[]>(this.baseUrl+"/genres?key=");
    }
  
}
