import { Component, OnInit } from '@angular/core';
import { EndorsementService } from "../../service/endorsement.service";

@Component({
  selector: 'app-endorsement',
  templateUrl: './endorsement.component.html',
  styleUrls: ['./endorsement.component.scss']
})
export class EndorsementComponent implements OnInit {
  endorsementPosts: any;
  endorsementPost: any;
  
  
  constructor(
    private endorsementService: EndorsementService
  ) { }

  ngOnInit() {

    // Fetch all post

    // this.endorsementService.getAllPost()
    //   .subscribe(data => {
    //     this.endorsementPosts = data;   
    //     console.log(this.endorsementPosts)   
    //   })

    let id = "63387bdcba184acd8944f8bb";

    this.endorsementService.getAPost(id)
      .subscribe(data => {
        this.endorsementPost = data;   
        console.log(this.endorsementPost)   
      })
  }

}
