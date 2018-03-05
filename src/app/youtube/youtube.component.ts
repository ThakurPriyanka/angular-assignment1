import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LinksService} from '../links.service';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private router: ActivatedRoute, private linkService: LinksService) { }
links = [];
  ngOnInit() {
    this.checkVideo();
    console.log(this.router.snapshot.params['id']);
  }
  checkVideo() {
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
