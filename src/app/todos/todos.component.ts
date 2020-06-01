import { Component, OnInit } from '@angular/core';

export class Todos{
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public targetDate: Date
  ) {

  }

}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    new Todos(1,'Dancing class at 2:30pm', false, new Date()),
    new Todos(2,'Interview with Teena at 4 pm', true, new Date()),
    new Todos(3,'Gym at 7pm', false, new Date())
  ]

  // todo = {
  //   id :1,
  //   description:'Dancing class at 2:30pm'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
