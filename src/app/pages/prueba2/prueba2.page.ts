import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/model/board';

import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.page.html',
  styleUrls: ['./prueba2.page.scss'],
})
export class Prueba2Page implements OnInit {
  board: Board;
  constructor(private boardService: BoardService) {
  }

  ngOnInit() {


    this.boardService.getBoard(1).subscribe(
      (data) => {
        this.board = data;
      }
    );
  }

}
