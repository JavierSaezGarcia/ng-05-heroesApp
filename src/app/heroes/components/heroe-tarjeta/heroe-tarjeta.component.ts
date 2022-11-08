import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent {
  // Recogemos el valor de la variable heroe de tipo Heroe con un @input
  @Input() heroe!: Heroe;
  

}
