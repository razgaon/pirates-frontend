import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';

export interface Game {
  game_id: string;
  num_players: number;
  players: Array<string>;
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
      res => this.games = res
    )
    ;
  }

}
