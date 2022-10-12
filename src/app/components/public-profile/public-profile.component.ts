import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  items: string[];
  userDetail: any;
  userPost: any;
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

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUser(localStorage.getItem('id') as string).subscribe(val=> {

      this.userDetail = val
      console.log(this.userDetail)
    }
    )
    this.api.getPost(localStorage.getItem('id') as string).subscribe(value=> {

        this.userPost = value
        console.log(this.userPost)
      }
    )
  }
}
