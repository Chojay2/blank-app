import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  items: string[];
  posts = [
    {
      cover: '',
      profile: '',
      name: '',
      title: 'This is a blog post title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
      date: '2022/10/10',
      views: '2K Views'
    },
    {
      cover: '',
      profile: '',
      name: '',
      title: 'This is a blog post title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
      date: '2022/10/10',
      views: '2K Views'
    },
    {
      cover: '',
      profile: '',
      name: '',
      title: 'This is a blog post title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
      date: '2022/10/10',
      views: '2K Views'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
