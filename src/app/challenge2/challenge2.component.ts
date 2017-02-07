import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component implements OnInit {
    public list:any = [];

    constructor() {
        for (let i = 1; i <= 100; i++) {
            this.list.push(i);
            console.log("hello");
        }
  }

    ngOnInit() {
        console.log("hello");
  }

}
