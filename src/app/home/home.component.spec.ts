import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {LinksService} from '../links.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: LinksService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [LinksService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(LinksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('to defined', () => {
    expect(component).toBeDefined();
  });
  it('be able to get data from service', () => {
    spyOn(service, 'getLinks').and.returnValues(Observable.of('test data'));
    // spyOn(service, 'getInters').and.returnValues(Observable.throw({message: 'error'}));

    spyOn(console, 'log');
    component.checkSubscribe();
    expect(console.log).toHaveBeenCalled();
    expect(component.links).toEqual('test data');
  });
  it('not be able to get data from service', () => {
    spyOn(service, 'getLinks').and.returnValues(Observable.throw('error'));

    spyOn(console, 'log');
    component.checkSubscribe();
    expect(console.log).toHaveBeenCalled();
    expect(component.links).toEqual('error');
  });
});
