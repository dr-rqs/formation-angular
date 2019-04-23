import { Component, OnInit } from '@angular/core';
import {Task} from "./shared/task";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks: Task[];
  newTaskTitle: string;
  private counterTaskId: number = 0;

  constructor() { }

  ngOnInit() {
    this.tasks = [
      {
        id: '0',
        title: 'Call Mummy',
        isDone: false
      },
      {
        id: '1',
        title: 'Buy Milk',
        isDone: false
      },
      {
        id: '2',
        title: 'Homework',
        isDone: false
      }
    ];
  }

  removeTask(id: string){
    const indexToDel = this.tasks.findIndex(x => x.id === id);
    this.tasks.splice(indexToDel,1);
  }

  addTask(){
    this.tasks.push({
      id: this.counterTaskId.toString(),
      title: this.newTaskTitle,
      isDone: false
    });
    this.counterTaskId++;
    this.newTaskTitle = '';
  }
}
