import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-auths',
  templateUrl: './auths.component.html',
  styleUrls: ['./auths.component.css']
})
export class AuthsComponent implements OnInit {

  allAuths: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthsFromService();
  }

  getAuthsFromService() {
    let observable = this._httpService.getAuths();
    observable.subscribe(data => {
      console.log(data)
      this.allAuths = data['result'];
      console.log(this.allAuths);
    });
  }

  deleteAuthFromService(id) {
    let observable = this._httpService.deleteAauth(id);
    observable.subscribe(data => {
      console.log("Delete", data);
      this.getAuthsFromService();
    })
  }

}
