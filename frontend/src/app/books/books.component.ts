import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  constructor(private accessService:AccessServiceService) { }

  
  books = [{
    title:'',
    author:'',
    genre:'',
    image:'',
    _id:''
  }];
  
  title:String = "Books";
  ngOnInit(): void {
    this.accessService.getBooks().subscribe((data:any)=>{
      console.log(data);
      this.books=JSON.parse(JSON.stringify(data));
    });
  }

}
