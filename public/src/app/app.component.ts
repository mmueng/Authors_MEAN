import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  // allAuths: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    // this.getAuthsFromService();
  }

  // getAuthsFromService() {
  //   let observable = this._httpService.getAuths();
  //   observable.subscribe(data => {
  //     console.log(data)
  //     this.allAuths = data['result'];
  //     console.log(this.allAuths);
  //   });
  // }

}
