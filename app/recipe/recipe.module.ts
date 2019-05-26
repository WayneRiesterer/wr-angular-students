import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';
import { RecipeComponent } from './recipe.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ RecipeComponent ],
  declarations: [ RecipeComponent ],
  providers: [RecipeService]
})
export class RecipeModule { }