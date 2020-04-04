import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { ListOfCards } from 'src/app/model/listOfCards';
import { Board } from 'src/app/model/board';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.page.html',
  styleUrls: ['./prueba2.page.scss'],
})
export class Prueba2Page implements OnInit {
  board: Board;
  listOfLists: ListOfCards[];
  list: ListOfCards;
  constructor() {
  }

  ngOnInit() {
    this.list = new ListOfCards('Columna 1', [
      new Card('Tarjeta1 lorem tarjeta lorem ipsumaaaaaaaaaaaa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc nisi, rhoncus quis varius quis, mollis vel odio. Sed at nisl lacinia, rutrum justo quis, rhoncus sapien. Nulla ut tincidunt dui. Curabitur vitae augue a erat cursus ornare egestas vitae urna. Ut dolor magna, suscipit quis metus sit amet, rhoncus tincidunt nisi. Aliquam erat volutpat. Nunc eu hendrerit ante. '),
      new Card('Tarjeta2', 'Buena descripcion'),
      new Card('Tarjeta3', 'Buena descripcion'),
      new Card('Tarjeta4', 'Buena descripcion'),
      new Card('Tarjeta5', 'Buena descripcion'),
      new Card('Tarjeta6', 'Buena descripcion'),
      new Card('Tarjeta7', 'Buena descripcion'),
      new Card('Tarjeta8', 'Buena descripcion'),
      new Card('Tarjeta9', 'Buena descripcion'),
      new Card('Tarjeta10', 'Buena descripcion'),
      new Card('Tarjeta11', 'Buena descripcion')
    ]);    
    let list2 = new ListOfCards('Columna 2', [
      new Card('Tarjeta99', 'Buena descripcion')
    ]);
    this.listOfLists = [ this.list, list2 ];

    this.board = new Board('Tablero de pruebas', this.listOfLists);
  }

}
