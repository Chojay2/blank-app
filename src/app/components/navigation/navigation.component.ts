import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  lists: string[];

  constructor() {
    this.lists = ['Home', 'Endorsement', 'Petition', 'Blog', 'Recommendations'];
  }

  ngOnInit(): void {
  }

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }
  hideModalDialog() {
    this.displayModal = false;
  }

  displayLogin: boolean;

  showLoginDialog() {
    this.displayLogin = true;
  }
  hideLoginDialog() {
    this.displayLogin = false;
  }

}
