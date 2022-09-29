import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-endorsement',
  templateUrl: './post-endorsement.component.html',
  styleUrls: ['./post-endorsement.component.scss']
})
export class PostEndorsementComponent implements OnInit {

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
