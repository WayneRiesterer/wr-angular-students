import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RecipeModule } from './recipe/recipe.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LocalePipesComponent } from './locale-pipes/locale-pipes.component';

// i18n
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TypescriptGenericsComponent } from './typescript-generics/typescript-generics.component';
import { ParameterScopingComponent } from './parameter-scoping/parameter-scoping.component';
import { PersonService } from './parameter-scoping/person.service';
import { PersonComponent } from './parameter-scoping/person/person.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, AppRoutingModule, RecipeModule ],
  declarations: [ 
    AppComponent, 
    LifecycleComponent,
    HomeComponent, 
    SidebarComponent, 
    LocalePipesComponent,
    TypescriptGenericsComponent,
    ParameterScopingComponent,
    PersonComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [PersonService]
})
export class AppModule { }
