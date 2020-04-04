import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../model/board';
import { ListOfCards } from '../model/listOfCards';
import { Card } from '../model/card';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) {

  }

  getBoard(id: number): Observable<Board> {
    return this.http.get<Board>(`http://localhost:3000/boards/${id}`);
  }
}
