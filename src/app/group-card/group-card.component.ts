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
  userName: string;
  addPlayerClicked = false;
  shouldShowJoinRoomButton;

  constructor(public gameService: GameService) {
  }

  ngOnInit(): void {
    this.shouldShowJoinRoomButton = this.game.num_players === this.game.players.length
  }

  openGameRoom() {
    this.gameService.gameId = this.game.game_id;
  }

  addPlayerToRoom() {
    if (this.addPlayerClicked && this.userName) {
      this.addPlayerToRoomSubmitted();
    } else {
      this.addPlayerToRoomClicked();
    }
  }

  addPlayerToRoomClicked() {
    this.addPlayerClicked = true;
  }

  addPlayerToRoomSubmitted() {
    this.addPlayerClicked = false;
    this.gameService.addPlayer(this.game.game_id, this.userName).subscribe(
      res => {
        console.log('added');
      }
    );
  }

}
