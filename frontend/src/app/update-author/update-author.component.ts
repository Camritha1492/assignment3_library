import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  constructor(private accessService: AccessServiceService,  private router : Router) { }
  authorsItem = {
    name:'',
    genre:'',
    image:'',
    desc:'',
    _id:''
};
  title:String = "Update Author";
  ngOnInit(): void {
  }

  AddItem(){
    this.accessService.newAuthor(this.authorsItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/']);
  }

}
