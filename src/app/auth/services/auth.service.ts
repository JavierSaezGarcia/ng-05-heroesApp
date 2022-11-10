import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(){
    return { ...this._auth } // con las llaves y los tres puntos lo desestructuro para que no se pueda cambiar por error
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean>{
    if( !localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
    .pipe(
        map( auth => {
          console.log('map', auth);
          this._auth = auth;
          return true;
        })
    );
  }
  
  login() {
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
        .pipe(
          // el tap es utilizado para hacer efectos secundarios, antes de hacer la peticion get y antes de llegar al subscribe va a pasar por este tap
          tap( auth => this._auth = auth),
          tap( auth => localStorage.setItem('token', auth.id))
          );

  }
  logout() {
    this._auth = undefined;
  }



}
