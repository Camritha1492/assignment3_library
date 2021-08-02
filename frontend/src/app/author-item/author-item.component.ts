import { Component, OnInit } from '@angular/core';
import { AccessServiceService } from '../access-service.service';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {

  constructor(private accessService: AccessServiceService) { }

  author = {
    name:'',
    genre:'',
    image:'',
    desc:'',
    _id:'',
};

  title:String = "Author";

  ngOnInit(): void {
    this.accessService.getAuthor().subscribe((data:any)=>{
      this.author=JSON.parse(JSON.stringify(data));
    })
  }

}
