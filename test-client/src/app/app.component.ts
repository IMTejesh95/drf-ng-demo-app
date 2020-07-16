import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-client';

  message:string;

  constructor( private service:AppServiceService ) { }

  ngOnInit(){
  }

  getFeature(){
    this.service.getFeature()
      .subscribe((data:any) => this.message = data['message']);
  }

}
