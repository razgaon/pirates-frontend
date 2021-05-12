import {Component, Input, OnInit} from '@angular/core';
import {Task, TaskStatus} from '../game.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: TaskStatus;
  // @Input() taskInfo: Task;
  constructor() { }

  ngOnInit(): void {
  }

}
