import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccessServiceService {

  constructor(private http:HttpClient) { }

  getAuthor(){
    return this.http.get("http://localhost:3000/author");
  }

  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }

  getBook(){
    return this.http.get("http://localhost:3000/book");
  }

  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }

  newBook(item:any)
  {
    return this.http.post("http://localhost:3000/addbook", {"book":item})
    .subscribe(data=>{console.log(data)})
  }

  newAuthor(item:any)
  {
    return this.http.post("http://localhost:3000/addauthor", {"author":item})
    .subscribe(data=>{console.log(data)})
  }

}
