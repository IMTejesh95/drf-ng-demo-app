import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'test-client';

  message: string;

  constructor(private service: AppServiceService) { }

  ngOnInit() {
    this.getFeature();
  }

  getFeature() {
    this.service.getFeature()
      .subscribe((data: any) => this.message = data['message']);
  }

}
