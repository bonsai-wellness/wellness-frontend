import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-app',
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent{
  public titulo:string =  "User"!;

  ngOnInit(){
    this.titulo = document.title;
  }
  constructor(private cdRef:ChangeDetectorRef) {}

  // Cambiar titulo por cada pagina
  ngAfterViewChecked(){
    this.titulo = document.title;
    this.cdRef.detectChanges();
  }



}
