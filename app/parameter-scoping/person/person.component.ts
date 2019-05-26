import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personSelected: Person = undefined;

  constructor(private personService: PersonService ) {}

  ngOnInit() {
    this.personSelected = this.personService.selectedPerson; 
  }

}