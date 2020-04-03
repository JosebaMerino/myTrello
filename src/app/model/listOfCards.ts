import { Card } from './card';
export class ListOfCards {
    title: string;
    list: Card[];
    constructor(title: string, list: Card[]) {
        this.title = title;
        this.list = list;
    }
}
