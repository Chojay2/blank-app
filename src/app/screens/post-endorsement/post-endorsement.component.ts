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

  constructor() { }

  ngOnInit(): void {
  }

}
