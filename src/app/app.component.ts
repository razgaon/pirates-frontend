import {Component} from '@angular/core';
import {GameService} from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pirates-frontend';
  gameCode: string;

  constructor(private gameService: GameService) {

  }

  getGameRoom(): void {
    if (this.gameCode) {
      console.log(this.gameCode);
    } else {
      this.gameService.getGameCode()
        .subscribe((data: string) => this.gameCode = data);
    }

  }
}
