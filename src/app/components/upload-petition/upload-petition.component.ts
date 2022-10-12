import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from 'src/app/services/petition/petition.service';

@Component({
  selector: 'app-upload-petition',
  templateUrl: './upload-petition.component.html',
  styleUrls: ['./upload-petition.component.scss']
})
export class UploadPetitionComponent implements OnInit {

  petitionForm = this.fb.group({
    title: ['', Validators.required],
    goal: ['', Validators.required],
    description: ['', Validators.required],
    file: ['', Validators.required],
    fileSource: ['', Validators.required]
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


  constructor(private fb: FormBuilder, private petitionService: PetitionService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.petitionForm.patchValue({
        fileSource: file
      });
      console.log('file', file)
      console.log('fileSource', this.petitionForm.get('fileSource'))
    }
  }

  onFormSubmit(form: FormGroup) {
    if (!form.valid) {
     this.showValidationErros = true;
     console.log('form is invalid');
     return;
    };
    this.showValidationErros = false;

     const body = {
      title: form.value.title,
      goal: form.value.goal,
      description: form.value.description,
      file: form.value.fileSource
    }

    console.log(body);

    this.petitionService.addGallery(body, body.file).subscribe(val=>console.log(val));
    form.reset();
  }

}
