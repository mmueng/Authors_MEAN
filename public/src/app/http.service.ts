import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuths() {
    return this._http.get("/author");
  }

  getOne(id) {
    return this._http.get(`/author/${id}`);
  }

  addAuth(newAuth) {
    return this._http.post("/author", newAuth);
  }

  editAuthor(editAuth) {
    return this._http.put(`/author/${editAuth._id}`, editAuth);
  }
  deleteAauth(id) {
    return this._http.delete(`/author/${id}`);
  }

}
