import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Person } from './model/person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'app-parameter-scoping',
  templateUrl: './parameter-scoping.component.html',
  styleUrls: ['./parameter-scoping.component.css']
})
export class ParameterScopingComponent implements OnInit {
  form: FormGroup;
  people: Array<Person> = undefined;
  selectedPerson: Person = undefined;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.createForm();
    this.people = this.personService.getPeople();
    this.selectedPerson = this.personService.selectedPerson;
  }

  createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(undefined)
    });
  }

  selectPerson() {
    const person = this.form.get('name').value;
    this.personService.selectPerson(person);
  }
}