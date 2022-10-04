import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  lists: string[];

  constructor() {
    this.lists = ['Home', 'About', 'Volunteer', 'Events', 'News'];
  }

  ngOnInit(): void {
  }

}
