import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  
  mat-card{ 
     border:2px solid #E0E0E0;
    margin-top:20px;
    width:100%;
    
    height: auto; 
    
  }
  
  `
  ]
})
export class ListadoComponent implements OnInit {
  
  heroes: Heroe[] = [];
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
    .subscribe( (respuesta) =>  this.heroes = respuesta)
    
    }
    
  

}
