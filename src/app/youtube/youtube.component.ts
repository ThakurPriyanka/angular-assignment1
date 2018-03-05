import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LinksService} from '../links.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
url: string;
  videoLink: SafeUrl;
  constructor(private router: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.photoURL();
  }
  ngOnInit() {
  }
  photoURL() {
    this.url = 'https://www.youtube.com/embed/' + this.router.snapshot.params['id'];
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
