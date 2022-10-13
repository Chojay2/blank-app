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

  constructor(private petitionService: PetitionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.petitionDetail();
  }

  petitionDetail(): void{
    this.petitionService.getAPost(this.id).subscribe(petition => {
      this.petition = petition;
      console.log(this.petition)
    });
  }

}
