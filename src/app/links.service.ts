import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class LinksService {
  constructor(private http: HttpClient) {
  }

  private url: string = 'https://www.googleapis.com/youtube/v3/' +
    'search?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=' +
    'AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY';

  getLinks() {
    return this.http.get(this.url).pipe(catchError(err => this.handleError(err)));
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.error instanceof ErrorEvent) {
      // console.log(err.error.message());
    } else {
      return Observable.throw('error');
    }
  }
}
