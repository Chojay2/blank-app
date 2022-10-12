import { Component, OnInit } from '@angular/core';
import { PetitionService } from 'src/app/services/petition/petition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-petition-list',
  templateUrl: './petition-list.component.html',
  styleUrls: ['./petition-list.component.scss']
})
export class PetitionListComponent implements OnInit {
  posts: any;
  items: string[];

<<<<<<< HEAD
  constructor(private petitionService: PetitionService, private router: Router) {
    this.items = ['All', 'Technology', 'Sports', 'Programming', 'Something', 'Anything'];
=======
  constructor() {
    this.items = ['All', 'Technology', 'Sports', 'Programming'];
>>>>>>> e524eab6ba0136820059629372f80aff7c04d597

  }

  ngOnInit(): void {
    this.petitionService.getAllPost()
      .subscribe(data => {
        this.posts = data;
        console.log(this.posts)
      })
  }

  readMore(_id: string): void {
    this.router.navigate(['petition', _id]);
  }

}
