import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public xValue:number;
  public yValue:number;
  public result:number;
  public opr: number;

  constructor() { }

  ngOnInit() {
  }
  title = 'Submit';
  add: string;
  operator: number;
  operators = [
    {id: 1 , name: '+'},
    {id: 2 , name: '-'},
    {id: 3 , name: '*'},
    {id: 4 , name: '/'},
  ];
  public calc() {
    let numb = {
      x: Number(this.xValue),
      y: Number(this.yValue)
    } 
    if (this.opr == 1) {
      this.result = (numb.x + numb.y);
    } else if(this.opr == 2) {
      this.result = (numb.x - numb.y);
    } else if (this.opr == 3) {
      this.result = (numb.x * numb.y);
    } else if (this.opr == 4) {
      this.result = (numb.x / numb.y);
    }
    
  }
}
