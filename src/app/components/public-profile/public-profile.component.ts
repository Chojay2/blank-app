import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  id: any;
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

  constructor(private api: ApiService, private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']
    console.log(this.id)
      this.profileService.getAUser(this.id)
      .subscribe(data => {
        this.userDetail = data;
        console.log(this.userDetail)
      })
  }
  displayProfile: boolean;

  showProfileDialog() {
    this.displayProfile = true;
  }
  hideProfileDialog() {
    this.displayProfile = false;
  }
}
