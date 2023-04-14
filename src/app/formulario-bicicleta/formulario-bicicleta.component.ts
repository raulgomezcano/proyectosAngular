import { Component } from '@angular/core';
import { bicicleta } from '../_modelo/bicicleta';
@Component({
  selector: 'app-formulario-bicicleta',
  templateUrl: './formulario-bicicleta.component.html',
  styleUrls: ['./formulario-bicicleta.component.css']
})
export class FormularioBicicletaComponent {
  bicicleta1 = new bicicleta("rojo","BMX",30,8,6,false);
  resultado: string =""
  cambio: number =0
  constructor(){}
  ngOnInit(): void{
  }
  enviar(){
    this.resultado=this.bicicleta1.color + "\n" + this.bicicleta1.marca + "\n" + "\n" + this.bicicleta1.velocidad
    + "km/h\n" +this.bicicleta1.pinones + "piñones\n" + this.bicicleta1.platos + "platos\n" + (this.bicicleta1.electrica?"eléctrica":"muscular")
    }
}
