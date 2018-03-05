import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LinksService} from '../links.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // providers: [YoutubeService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private linkService: LinksService) {
  }

  links = [];

  ngOnInit() {
    this.checkSubscribe();
  }

  checkSubscribe() {
    console.log('started');
    this.linkService.getLinks().subscribe(
      (data: any) => {
        this.links = data.items;
        console.log(this.links);
      },
      (err) => {
        this.links = err;
        console.log('error' + err);
      },
      () => {
        console.log('end');
      });
  }
}
