import {Component, Input, OnInit} from '@angular/core';
import {GameService, Task, TaskStatus} from '../game.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskStatuses: TaskStatus[];
  taskInfo: { [playerId: string]: Task };
  score: number;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.updateFunc();
    this.getGameScore();
    setInterval(() => {
      this.updateFunc();
    }, 5000);
  }

  updateFunc(): void {
    this.getTasksStatuses();
    // this.getTasks();
  }

  getGameScore(): void{
    this.gameService.getGameStatus(this.gameService.gameId).subscribe(
      res => {
        this.score = res.score;
      }
    );
  }

  getTasksStatuses() {
    this.gameService.getTaskStatuses(this.gameService.gameId).subscribe(
      res => {
        try {
          this.taskStatuses = res;
        } catch (error) {
          this.taskStatuses = [];
          console.log(error);
          alert(error.message);
        }
      }
    );
  }

  // getTasks() {
  //   this.gameService.getGameTasks(this.gameService.gameId).subscribe(
  //     res => {
  //       for (const task of res) {
  //         this.taskInfo[task.speaker_player_id] = task;
  //       }
  //     }
  //   );
  // }

}
