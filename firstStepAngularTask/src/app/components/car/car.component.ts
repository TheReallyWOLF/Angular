import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  test: any;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.speed = 235;
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    };
    this.options = ['ABS', 'Автопилот', 'Авто паркинг'];
    this.test = true;
  }
    carSelect(carName) {
    if(carName == 'bmw'){
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Жёлтый',
        wheels: 'Красный'
      };
      this.options = ['ABS', 'Авто паркинг'];
      this.test = true;
    }else if(carName == 'audi'){
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.speed = 235;
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver'
      };
      this.options = ['ABS', 'Автопилот', 'Авто паркинг'];
      this.test = true;
    }else if(carName == 'mer'){
      this.name = 'Mercedes';
      this.speed = 190;
      this.model = 'C180';
      this.speed = 205;
      this.colors = {
        car: 'Black',
        salon: 'Black',
        wheels: 'Black'
      };
      this.options = ['Автопилот', 'Авто паркинг'];
      this.test = true;
    }

    };
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
