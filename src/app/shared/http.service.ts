import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getbooks(search: string) {
    const URL = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=`;
    let searchObj: string[] = search.toLowerCase().split('');
    const allowedChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const newSearchObj = [];

    searchObj.forEach(char => {
      if (char === ' ') {
        newSearchObj.push('%20');
      } else if (allowedChar.indexOf(char) > -1) {
        newSearchObj.push(char)
      }
    })

    return this.http.get(URL + newSearchObj.join(''));
  }

  getSavedBooks() {
    const url = '/api/books';
    return this.http.get(url);
  }

  postBook(data: any) {
    const url = '/api/books';

    return this.http.post(url, data);
  }

  delBook(id: number) {
    console.log(id)
    const url = `/api/books`;

    return this.http.delete(url);
  }


}
