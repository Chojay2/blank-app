import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-petition',
  templateUrl: './upload-petition.component.html',
  styleUrls: ['./upload-petition.component.scss']
})
export class UploadPetitionComponent implements OnInit {

  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
