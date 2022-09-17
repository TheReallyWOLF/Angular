import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export interface Products {
  name: string;
  price: number;
  category: string;
  code: string;
  date: Date;
}

@Component({
  selector: 'app-builtin-pipes',
  templateUrl: './builtin-pipes.component.html',
  styleUrls: ['./builtin-pipes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BuiltinPipesComponent implements OnInit {

  public products: Products[] | undefined;

  ngOnInit(): void {
    this.products = [
      {
        name: 'Item1',
        price: 100,
        category: 'Category 1',
        code: 'aa21c',
        date: new Date(2016, 9, 1)
      },
      {
        name: 'Item2',
        price: 100,
        category: 'Category 1',
        code: 'bc21c',
        date: new Date(2016, 10, 3)
      },
      {
        name: 'Item3',
        price: 100,
        category: 'Category 2',
        code: 'rr57a',
        date: new Date(2016, 10, 5)
      },
      {
        name: 'Item4',
        price: 100,
        category: 'Category 2',
        code: 'dr413',
        date: new Date(2016, 9, 10)
      }
    ]
  }

}
