import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../lobby/lobby.component';
import {GameService} from '../game.service';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {
  @Input() game: Game;

  constructor(public gameService: GameService) {
  }

  ngOnInit(): void {
  }

  openGameRoom() {
    this.gameService.gameId = this.game.game_id;
  }

}
