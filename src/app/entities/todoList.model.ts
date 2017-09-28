import {TodoItem} from './todoItem.model';

export class TodoList {

  constructor(
    public id?: number,
    public items?: TodoItem[],
  ) {}

}
