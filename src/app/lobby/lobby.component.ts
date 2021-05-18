import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import * as _ from 'lodash';


export interface Player {
  name: string;
  conn: boolean;
}

export interface Game {
  game_id: string;
  num_players: number;
  players: Array<Player>;
  status: string;
}

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  games: Array<Game>;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.getGames();
    setInterval(() => {
      this.getGames();
    }, 5000);

  }

  getGames(): void {
    this.gameService.getLobby().subscribe(
      res => {
        if (!_.isEqual(res, this.games)) {
          this.games = res;
        }
      }
    )
    ;
  }

}
