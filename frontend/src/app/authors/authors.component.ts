import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private accessService: AccessServiceService) { }

  authors = [{
    name:'',
    genre:'',
    image:'',
    desc:'',
    _id:''
}];

  title:String = "Authors";

  ngOnInit(): void {
    this.accessService.getAuthors().subscribe((data:any)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
 }

}
