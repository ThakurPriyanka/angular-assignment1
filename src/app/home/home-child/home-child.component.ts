import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  @Input()
  thumbnail;
  @Input()
  title;
  @Input()
  id;
  constructor() { }

  ngOnInit() {
  }

}
