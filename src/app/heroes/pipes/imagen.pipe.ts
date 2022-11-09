import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
  name: 'imagen'
  //pure: false  // esto se ejecuta cada vez que angular haga algun cambio. Necesita muchos recursos. por defecto esta en true
})
export class ImagenPipe implements PipeTransform{

    
    transform(heroe: Heroe):string {

      if(!heroe.id && !heroe.alt_img){
        return 'assets/no-image.png';    
       
      }else if( heroe.alt_img ){

        return heroe.alt_img;
      }else{
        return `assets/heroes/${ heroe.id }.jpg`
      }


      
    }
}