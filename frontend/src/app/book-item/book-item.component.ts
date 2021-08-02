import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  book = {
    title:'',
    author:'',
    genre:'',
    image:'',
    _id:''
  }; 
  constructor(private accessService:AccessServiceService) { }
  title:String = "Book";
  ngOnInit(): void {
    this.accessService.getAuthors().subscribe((data:any)=>{
      this.book=JSON.parse(JSON.stringify(data));
    });
  }

}
