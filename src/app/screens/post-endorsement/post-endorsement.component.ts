import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EndorsementService } from 'src/app/services/endorsement/endorsement.service';

@Component({
  selector: 'app-post-endorsement',
  templateUrl: './post-endorsement.component.html',
  styleUrls: ['./post-endorsement.component.scss']
})
export class PostEndorsementComponent implements OnInit {
  endorsementForm = this.fb.group({
    title: ['', Validators.required],
    goal: ['', Validators.required],
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

  checked() {
    const checkBox = document.getElementById("checked") as HTMLInputElement | null;
    const text = document.getElementById("partnerForm") as HTMLInputElement;
    if (checkBox?.checked) {
      text.style.display = "flex";
    } else {
      text.style.display = "none";
    }
  }

  // unChecked() {
  //   const checkBox = document.getElementById("unChecked") as HTMLInputElement | null;
  //   const text = document.getElementById("partnerForm") as HTMLInputElement;
  //   if (checkBox?.checked) {
  //     text.style.display = "none";
  //   } else {
  //     text.style.display = "none";
  //   }
  // }

  constructor(private fb: FormBuilder, private endorsementService: EndorsementService) { }

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
      goal: form.value.goal,
      description: form.value.description
    }
    this.endorsementService.uploadAPost(body).subscribe(response=>{
      console.log(response)
    })
    form.reset();
  }

}
