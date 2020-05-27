import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carbooncalculator',
  templateUrl: './carbooncalculator.component.html',
  styleUrls: ['./carbooncalculator.component.sass']
})
export class CarbooncalculatorComponent implements OnInit {
 location:string;
  constructor() { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
