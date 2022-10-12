import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

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
  ];

  constructor() {
    this.items = ['All', 'Technology', 'Sports', 'Programming'];

  }

  ngOnInit(): void {
  }

}
