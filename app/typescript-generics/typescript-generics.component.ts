import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript-generics',
  templateUrl: './typescript-generics.component.html',
  styleUrls: ['./typescript-generics.component.css']
})
export class TypescriptGenericsComponent {

  constructor() { 
    this.genericFunction(10, { name: 'Wayne', favoriteFramework: 'Angular' });
  }

  genericFunction<T, K>(a: T, b: K) {
    console.log(a, b);
  }

}