import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  books;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getSavedBooks()
      .subscribe(book => this.books = book);
  }

  onRemove(index: number) {
    const delBook = this.books[index]._id;
    console.log(delBook);
    this.http.delBook(delBook)
    .subscribe(data => console.log(data))
  }

}
