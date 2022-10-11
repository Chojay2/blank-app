import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/shared.models';
import { EndorsementService } from 'src/app/service/endorsement.service';

@Component({
  selector: 'app-post-endorsement',
  templateUrl: './post-endorsement.component.html',
  styleUrls: ['./post-endorsement.component.scss']
})
export class PostEndorsementComponent implements OnInit {
  endorsementForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  });
  showValidationErros: boolean = false;

  files: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  constructor(private fb: FormBuilder, private endorsementService: EndorsementService ) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: FormGroup) {
    if (!form.valid) {
     this.showValidationErros = true;
     return;
    };
    this.showValidationErros = false;

    var body = {
      title: form.value.title,
      description: form.value.description
    }
    this.endorsementService.uploadAPost(body).subscribe(response=>{
      console.log(response)
      console.log('sent1');
    })
    form.reset();
  }

}
