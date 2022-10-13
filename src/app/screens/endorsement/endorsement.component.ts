import { Component, OnInit } from '@angular/core';
import { EndorsementService } from 'src/app/services/endorsement/endorsement.service';


@Component({
  selector: 'app-endorsement',
  templateUrl: './endorsement.component.html',
  styleUrls: ['./endorsement.component.scss']
})
export class EndorsementComponent implements OnInit {
  endorsementPosts: any;
  endorsementPost: any;
  objectLenght: any;
  postType: any;

  responses = [
    {
      name: 'Adam Smith',
      time: '2 minutes ago',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget luctus tellus. Duis euismod tellus arcu, vitae convallis lectus tincidunt ac. Morbi eros metus, suscipit nec eros id, dictum condimentum nisi.'
    },
    {
      name: 'Adam Smith',
      time: '2 minutes ago',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget luctus tellus. Duis euismod tellus arcu, vitae convallis lectus tincidunt ac. Morbi eros metus, suscipit nec eros id, dictum condimentum nisi.'
    }
  ];

  constructor(
    private endorsementService: EndorsementService
  ) { }

  ngOnInit(): void {

    this.endorsementService.getAllPost()
      .subscribe(data => {
        this.endorsementPosts = data;
        this.objectLenght = Object.keys(this.endorsementPosts).length
        console.log(this.objectLenght)
      })


      console.log('thimps')


      // for(let i = 0; i < this.objectLenght; i++){
      //   let location=this.endorsementPost[i].users
      //   console.log(location)
      //   if(location == "thimphu"){
      //     console.log('thimps')
      //   }
      // }
    let id = "63387bdcba184acd8944f8bb";

    this.endorsementService.getAPost(id)
      .subscribe(data => {
        this.endorsementPost = data;
        console.log(this.endorsementPost)
      })
  }

}
