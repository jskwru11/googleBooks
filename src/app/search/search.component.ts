import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books;
  searchForm: FormGroup;
  savedBooks;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null, Validators.compose([Validators.required]))
    })
  }

  onSubmit() {
    this.http.getbooks(this.searchForm.value.search)
      .subscribe(book => this.books = book["items"]);
  }

  onSave(index: number) {
    const savebook = this.books[index];
    this.http.postBook(savebook)
      .subscribe(book => this.savedBooks = book);
  }

}
