import { Component, OnInit } from '@angular/core';
import {BacklogItem} from "../entities/backlogItem";

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  doItemList: BacklogItem[];
  doingItemList: BacklogItem[];
  doneItemList: BacklogItem[];

  constructor() {
    this.doItemList = [];
    this.doingItemList = [];
    this.doneItemList = [];
  }

  ngOnInit() {
  }

  addNewItem() {
    const item = new BacklogItem();
    item.status = 'do';
    item.content = '';
    this.doItemList.push(item);
  }

  toDoing(index: number) {
    this.doItemList[index].status = 'doing';
    this.doingItemList.push(this.doItemList[index]);
    this.doItemList.splice(index, 1);
  }

  toDone(index: number) {
    this.doingItemList[index].status = 'done';
    this.doneItemList.push(this.doingItemList[index]);
    this.doingItemList.splice(index, 1);
  }

}
