import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  responses = [
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
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
