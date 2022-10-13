import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndorsementService } from 'src/app/services/endorsement/endorsement.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-endorsement',
  templateUrl: './endorsement.component.html',
  styleUrls: ['./endorsement.component.scss']
})
export class EndorsementComponent implements OnInit {
  id: string = '';
  endoresement: any;
  comments: any;
  endorsementPosts: any;
  endorsementPost: any;

  signatureForm = this.fb.group({
    title: ['', Validators.required],
    goal: ['', Validators.required],
    description: ['', Validators.required],
    file: ['', Validators.required],
    fileSource: ['', Validators.required]
  });

  constructor(private endorsementService: EndorsementService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.endorsementDetail();
  }

  endorsementDetail(): void{
    this.endorsementService.getAPost(this.id).subscribe(endoresement => {
      this.endoresement = endoresement;
      this.comments = this.endoresement.comments;
      console.log(this.comments)
      console.log(this.endoresement)
    });
  }

}
