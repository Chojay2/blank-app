import { Component, OnInit } from '@angular/core';
import {catagories} from "../../shared/constants";

@Component({
  selector: 'app-blog-creation',
  templateUrl: './blog-creation.component.html',
  styleUrls: ['./blog-creation.component.scss']
})
export class BlogCreationComponent implements OnInit {
  catagories = catagories;

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
