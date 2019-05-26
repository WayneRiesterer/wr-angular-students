import { Injectable } from '@angular/core';
import { Person } from './model/person.model';

@Injectable()
export class PersonService {
  private people: Array<Person> = [
    { name: 'Wayne' },
    { name: 'Neo' },
    { name: 'Trinity' },
    { name: 'Morpheus' }
  ];

  selectedPerson: Person = undefined;

  constructor() {
    // set a default selected person
    this.selectedPerson = this.people[0];
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
    console.log(this.selectedPerson + ' was selected from the dropdown');
  }

  getPeople(): Array<Person> {
    return this.people;
  }
}