import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

let BASE_URL;
if (!environment.production) {
  BASE_URL = 'http://localhost:8000/';
} else {
  BASE_URL = 'https://shipgroups.herokuapp.com/';
}


export interface Task {
  id: number;
  game_id: string;
  task_name: string;
  listener_player_id: string;
  speaker_player_id: string;
  task_archetype: string;
  text: string;
}

export interface TaskStatus {
  finished: boolean;
  game_id: string;
  goal: number;
  player_id: string;
  task_archetype: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameId: string;

  constructor(private http: HttpClient) {
  }

  getGameCode(): Observable<string> {
    return this.http.get<string>(`${BASE_URL}get_game_code/`);
  }

  getLobby(): Observable<any> {
    return this.http.get<string>(`${BASE_URL}get_lobby/`);
  }

  getGame(gameId: string): Observable<any> {
    return this.http.get<string>(`${BASE_URL}get_game/?game_id=${gameId}`);
  }

  getGameStatus(gameId: string): Observable<any> {
    return this.http.get<string>(`${BASE_URL}get_game_status/?game_id=${gameId}`);
  }

  getGameTasks(gameId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${BASE_URL}get_game_tasks/?game_id=${gameId}`);
  }

  getTaskStatuses(gameId: string): Observable<TaskStatus[]> {
    return this.http.get<TaskStatus[]>(`${BASE_URL}get_task_statuses/?game_id=${gameId}`);
  }

  createRoom(gameCode, userName, numberOfPlayers): Observable<any> {
    return this.http.get(`${BASE_URL}create_game/?game_id=${gameCode}&user_id=${userName}&number_of_players=${numberOfPlayers}`);
  }

  addPlayer(gameCode, userName): Observable<any> {
    return this.http.get(`${BASE_URL}add_player/?game_id=${gameCode}&user_id=${userName}`);
  }

  startGame(gameCode): Observable<any> {
    return this.http.get(`${BASE_URL}start_game/?game_id=${gameCode}`);
  }
}
