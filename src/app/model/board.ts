import { ListOfCards } from './listOfCards';

export class Board {
    name: string;
    content: ListOfCards[];

    constructor(name: string, content: ListOfCards[] = []) {
        this.name = name;
        this.content = content;
    }
}
