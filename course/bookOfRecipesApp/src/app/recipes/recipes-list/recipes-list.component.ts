import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../recipe.model"; // модель данных

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('Тестовый рецепт', 'Простой способ приготовления','https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg' ),
    new RecipeModel('Тестовый рецепт', 'Простой способ приготовления','https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
