import {Component} from "@angular/core";


@Component({
  selector: 'app-card',
  templateUrl:'./card.component.html',
  styleUrls: ['./card.component.scss'],
  //interpolation:['изменитьИнтерполяцию','изменитьИнтерполяцию'] поменять {{}}
})
export class CardComponent {

  title = 'My Card Title';
  text = 'My text';
  number = 777;
  array = [1,2,3,4,5,12,2312,3,21];
  obj = {
    name: 'Vaysa',
    age: 32,
    info: {
      status: 'alive',
      skills: null
    }
  };

  getInfo(){
    return 'This is my info'; // если строчка возвращает строку ееё можно вызвать используя интерполяцию
  }
}
