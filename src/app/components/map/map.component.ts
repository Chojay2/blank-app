import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    constructor(private router: Router) {

     }

  ngOnInit(): void {
  }

  seePosts(): void {
    console.log("thimphu")
    this.router.navigate(['post-locations', this.anchorValue]);
    console.log("thimphu")

  }
}
