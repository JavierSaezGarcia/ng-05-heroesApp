import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private router: Router, private authService: AuthService) { }

  login(){
    //Ir al backend y devolver un usuario
    //this.router.navigate(['./heroes']);
    this.authService.login()
    .subscribe( respuesta => {
      console.log(respuesta)
      if( respuesta.id ){
        this.router.navigate(['./heroes']);
      }
    })
  }

  
}
