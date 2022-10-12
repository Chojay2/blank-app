import { Component, OnInit } from '@angular/core';
import { EndorsementService } from 'src/app/services/endorsement/endorsement.service';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  posts: any;
  items: string[];
  // posts = [
  //   {
  //     cover: '',
  //     profile: '',
  //     name: '',
  //     title: 'This is a blog post title',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
  //     date: '2022/10/10',
  //     views: '2K Views'
  //   },
  //   {
  //     cover: '',
  //     profile: '',
  //     name: '',
  //     title: 'This is a blog post title',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
  //     date: '2022/10/10',
  //     views: '2K Views'
  //   },
  //   {
  //     cover: '',
  //     profile: '',
  //     name: '',
  //     title: 'This is a blog post title',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
  //     date: '2022/10/10',
  //     views: '2K Views'
  //   },
  //   {
  //     cover: '',
  //     profile: '',
  //     name: '',
  //     title: 'This is a blog post title',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
  //     date: '2022/10/10',
  //     views: '2K Views'
  //   },
  //   {
  //     cover: '',
  //     profile: '',
  //     name: '',
  //     title: 'This is a blog post title',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
  //     date: '2022/10/10',
  //     views: '2K Views'
  //   },
  //   {
  //     cover: '',
  //     profile: '',
  //     name: '',
  //     title: 'This is a blog post title',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem vebulum, elementum.',
  //     date: '2022/10/10',
  //     views: '2K Views'
  //   },
  // ];

  constructor(private endorsementService: EndorsementService) { 
    this.items = ['All', 'Technology', 'Sports', 'Programming', 'Something', 'Anything'];
    
    
  }

  ngOnInit(): void {

    this.endorsementService.getAllPost()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts)
      })
  }

}
