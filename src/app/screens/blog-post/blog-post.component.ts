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
