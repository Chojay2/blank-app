import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

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
