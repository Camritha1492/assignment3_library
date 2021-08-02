import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private accessService: AccessServiceService,  private router : Router) { }
  title:String = "Add Book";

  bookItem = {
    title:'',
    author:'',
    genre:'',
    image:''
  };

  ngOnInit(): void {}
 
  AddItem(){
    console.log(this.bookItem);
    this.accessService.newBook(this.bookItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['booklist']);
  }


}
