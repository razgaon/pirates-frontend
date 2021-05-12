import {Component} from '@angular/core';
import {GameService} from './game.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gameCode: string;
  userName: string;
  numberOfPlayers: number;

  constructor(public gameService: GameService) {

  }

  getGameRoom(): void {
    if (this.gameCode) {
      console.log(this.gameCode);
    } else {
      this.gameService.getGameCode()
        .subscribe((data: string) => this.gameCode = data);
    }
  }

  createGame(): void {
    if (this.gameCode) {
      this.gameService.createRoom(this.gameCode, this.userName, this.numberOfPlayers).subscribe(
        res => console.log('created')
      );
    }

  }
}
