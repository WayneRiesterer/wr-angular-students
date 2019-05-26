import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LocalePipesComponent } from './locale-pipes/locale-pipes.component';
import { TypescriptGenericsComponent } from './typescript-generics/typescript-generics.component';
import { ParameterScopingComponent } from './parameter-scoping/parameter-scoping.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'locale-pipes', component: LocalePipesComponent },
  { path: 'typescript-generics', component: TypescriptGenericsComponent },
  { path: 'parameter-scoping', component: ParameterScopingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }