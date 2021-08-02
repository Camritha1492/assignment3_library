import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private accessService: AccessServiceService,  private router : Router) { }
  bookItem = {
    title:'',
    author:'',
    genre:'',
    image:''
  };

  title:String = "Update Book";
  ngOnInit(): void {}
 
  UpdateItem(){
    this.accessService.newBook(this.bookItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/']);
  }

}
