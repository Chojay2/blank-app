import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  lists: string[];
  userName = localStorage.getItem('name')
  profile = localStorage.getItem('profile')
  constructor() {
    console.log(this.profile);
    this.lists = ['Home', 'Endorsement', 'Petition', 'Blog', 'Recommendations'];
  }

  ngOnInit(): void {

  }

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
  }
  hideDialog($event){
    this.hideModalDialog();
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
