import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../shared/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteTask = new EventEmitter<string>();

  isEditionMode: boolean;

  constructor() { }

  ngOnInit() {
  }

  onDone(){
    this.task.isDone = true;
  }

  onDelete(){
    this.deleteTask.emit(this.task.id);
  }

  onEdit(){
    this.isEditionMode = !this.isEditionMode;
  }

}
