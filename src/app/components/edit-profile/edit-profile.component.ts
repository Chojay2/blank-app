import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayProfile: boolean;

  showProfileDialog() {
    this.displayProfile = true;
  }
  hideProfileDialog() {
    this.displayProfile = false;
  }

}
