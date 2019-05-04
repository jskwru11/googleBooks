import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getbooks(search: string) {
    const URL = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=`;
    const searchObj: String = search;

    return this.http.get(URL + searchObj);
  }
}
