import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mycolor:string;
  red(){
  this.mycolor="#ff0000"
  }
  green(){
  this.mycolor="#008000"
  }
  blue(){
  this.mycolor="#0000ff"
  }
  purple(){
  this.mycolor="#800080"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
