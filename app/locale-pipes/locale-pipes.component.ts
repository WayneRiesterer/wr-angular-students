import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locale-pipes',
  templateUrl: './locale-pipes.component.html',
  styleUrls: ['./locale-pipes.component.css']
})
export class LocalePipesComponent implements OnInit {
  date: Date;

  ngOnInit() {
    this.date = new Date();
  }

}