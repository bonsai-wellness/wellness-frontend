import { Component } from '@angular/core';
import { Espacio } from '../../models/espacio';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  espaciosArray:Espacio[]=[
    {id:1,nombre:"Juan", grado:"5", edad:20},
    {id:2,nombre:"Juana", grado:"5", edad:20},
    {id:3,nombre:"Pancho", grado:"5", edad:20},
    {id:4,nombre:"Panchito", grado:"5", edad:20}
  ]
  seleEspacio:Espacio = new Espacio();

  addOrEdit(){
    if(this.seleEspacio.id===0){
      this.seleEspacio.id=this.espaciosArray.length+1;
      this.espaciosArray.push(this.seleEspacio);
    }
    this.seleEspacio = new Espacio();
  }

  openForEdit(alumnito:Espacio){
    this.seleEspacio=alumnito;
  }

  delete(){
    if(confirm("deseas eliminar el registro seleccionado?")){
      this.espaciosArray=this.espaciosArray.filter( x => x!= this.seleEspacio);
      this.seleEspacio = new Espacio();
    }
  }
}
