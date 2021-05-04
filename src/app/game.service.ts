import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }

  getGameCode(): Observable<string> {
    return this.http.get<string>('http://localhost:8000/get_game_code/');
  }
}
