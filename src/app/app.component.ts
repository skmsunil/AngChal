import { Component } from '@angular/core';
export class Hero {
    name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Challenge';
    public list: any = [];
    public todoService: any = [];
   

    constructor() {
        for (let i = 1; i <= 100; i++) {
            this.list.push(i);
            console.log("hello");
        }
    }
    public num1:number; 
    public num2:number;

    public Result:number;
    Add() {
        this.Result =(this.num1)+(this.num2);
    }

    private newTodo;
 

    addTodo(val) {
        console.log(val);
        this.todoService.push(val);
    }

    hero: Hero = {
        name: 'Sunil'
    }
}
