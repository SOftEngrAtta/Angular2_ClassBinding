import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  templateUrl: './star-icon.component.html',
  styleUrls: ['./star-icon.component.css']
})
export class StarIconComponent implements OnInit {
  isFavorite : boolean = false;
  constructor() { }
  ngOnInit() {
  }
  showEmptyFullStarFunction(){
    this.isFavorite = !this.isFavorite;
  }
}
