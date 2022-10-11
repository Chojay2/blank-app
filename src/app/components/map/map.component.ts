import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // display = true;
  anchorValue: string;

  toggle(button) {
    this.anchorValue = button.id;
 }
    constructor() { }

  ngOnInit(): void {
  }
}