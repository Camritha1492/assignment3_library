import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(private accessService: AccessServiceService,  private router : Router) { }
  title:String = "Add Author";

 authorsItem = {
    name:'',
    genre:'',
    image:'',
    desc:'',
    _id:''
};
  ngOnInit(): void {
  }

  AddItem(){
    this.accessService.newAuthor(this.authorsItem);
    console.log(this.authorsItem);
    alert("Success");
    this.router.navigate(['/']);
  }

}
