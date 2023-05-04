import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  
  ngOnInit():void {
    let porcentajeHTML = document.querySelector('.numb');
    let porcentajeNum = 75;
    let degrees = 0;
    let leftPercentage = 0;

    let rightPercentage = 0;
    if (porcentajeHTML){
      porcentajeHTML.textContent= porcentajeNum + '%';
      degrees = (porcentajeNum / 100) * 360;
      console.log(degrees)
    }

    if (degrees > 180){
      leftPercentage = 180
      rightPercentage = degrees - 180;
    }else{
      leftPercentage = degrees;
    }

    let left = document.querySelector<HTMLElement>('.left')!;
    if(left){
      left.style.setProperty('--leftRotate', leftPercentage + 'deg');
    }

    let right = document.querySelector<HTMLElement>('.right')!;
    if(right){
      right.style.setProperty('--rightRotate', rightPercentage + 'deg');
    }
  }


  
}
