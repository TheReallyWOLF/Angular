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
  isEdit: boolean = false;

  constructor() { }

  ngOnInit():void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.speed = 235;
    this.colors = {
      car: 'Оранжевый',
      salon: 'Чёрный',
      wheels: 'Серебристый'
    };
    this.options = ['ABS', 'Автопилот', 'Авто паркинг'];
    this.test = true;
  };
  addOpt(option) {
    if(option){
      this.options.unshift(option);
      return false;
    }
  };

  showEdit(){
    this.isEdit = !this.isEdit;
  };

  deleteOpt(option){
    for(let i = 0; i<this.options.length; i++){
      if(this.options[i] === option){
        this.options.splice(i, 1);
        break;
      }
    }
  };
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
        car: 'Белый',
        salon: 'Чёрный',
        wheels: 'Золотой'
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
