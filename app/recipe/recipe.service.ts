import { Injectable } from '@angular/core';

import { Recipe } from './domain/recipe.model';
import { Ingredient } from './domain/ingredient.model';

@Injectable()
export class RecipeService {
  private recipes: Array<Recipe> = [
    new Recipe(1, 'Burger', 'Tasty but not healthy', 'somePath', [
      new Ingredient('Bread', 2),
      new Ingredient('Sauce', 100),
      new Ingredient('Pickles', 10),
      new Ingredient('Fatty stuff', 20)
    ]),
    new Recipe(2, 'Chicken Salad', 'Delicious and healthy', 'somePath', [
      new Ingredient('Chicken', 1),
      new Ingredient('Lettuce', 1),
      new Ingredient('Tomato', 1)
    ])
  ]

  getRecipes(): Array<Recipe> {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find((recipe: Recipe) => recipe.id === id);
  }

}