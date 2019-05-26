import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { Recipe } from './domain/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes: Array<Recipe>;
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  selectRecipeById(id: number): void {
    this.selectedRecipe = this.recipeService.getRecipe(id);
  }

  onSelectRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}