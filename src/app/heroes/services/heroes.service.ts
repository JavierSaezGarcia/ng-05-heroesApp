import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  url: string = 'http://localhost:3000/heroes';

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.url)
  }
}
