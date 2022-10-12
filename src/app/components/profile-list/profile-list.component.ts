import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profiles = [
    {
      image: '',
      name: 'Devon Lane',
      description: 'This is the profile bio text. Quisque blandit nunc ats.... ',
      posts: '10 posts',
      views: '2k views'
    },
    {
      image: '',
      name: 'Devon Lane',
      description: 'This is the profile bio text. Quisque blandit nunc ats.... ',
      posts: '10 posts',
      views: '2k views'
    },
    {
      image: '',
      name: 'Devon Lane',
      description: 'This is the profile bio text. Quisque blandit nunc ats.... ',
      posts: '10 posts',
      views: '2k views'
    },
    {
      image: '',
      name: 'Devon Lane',
      description: 'This is the profile bio text. Quisque blandit nunc ats.... ',
      posts: '10 posts',
      views: '2k views'
    },
    {
      image: '',
      name: 'Devon Lane',
      description: 'This is the profile bio text. Quisque blandit nunc ats.... ',
      posts: '10 posts',
      views: '2k views'
    },
    {
      image: '',
      name: 'Devon Lane',
      description: 'This is the profile bio text. Quisque blandit nunc ats.... ',
      posts: '10 posts',
      views: '2k views'
    },
    {
      image: '',
      name: 'Devon Lane',
      description: 'This is the profile bio text. Quisque blandit nunc ats.... ',
      posts: '10 posts',
      views: '2k views'
    },
    {
      image: '',
      name: 'Devon Lane',
      description: 'This is the profile bio text. Quisque blandit nunc ats.... ',
      posts: '10 posts',
      views: '2k views'
    },
  ];

}
