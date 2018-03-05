import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {LinksService} from './links.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
