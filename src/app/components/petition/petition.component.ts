import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetitionService } from 'src/app/services/petition/petition.service';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})
export class PetitionComponent implements OnInit {

  id: string = '';
  petition: any;
  petitions: any;

  /* responses = [
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
  ]; */

  constructor(private petitionService: PetitionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.petitionService.getAPost(this.id).subscribe(petitions => {
      this.petitions = petitions;
      console.log(this.petitions)
    });
  }

  petitionDetail(): void{
    // debugger
    this.petitionService.getAPost(this.id).subscribe(petitions => {
      this.petitions = petitions;
      console.log(this.petitions)
    });
  }

}
