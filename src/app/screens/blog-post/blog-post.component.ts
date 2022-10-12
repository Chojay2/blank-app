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

<<<<<<< HEAD

  constructor(private endorsementService: EndorsementService) {
    this.items = ['All', 'Technology', 'Sports', 'Programming', 'Something', 'Anything'];

=======
  constructor() {
    this.items = ['All', 'Technology', 'Sports', 'Programming'];
>>>>>>> e524eab6ba0136820059629372f80aff7c04d597

  }

  ngOnInit(): void {

    this.endorsementService.getAllPost()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts)
      })
  }

}
