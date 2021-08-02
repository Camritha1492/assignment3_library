import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { BookItemComponent } from './book-item/book-item.component';
import { AuthorItemComponent } from './author-item/author-item.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';

const routes: Routes = [
  {path:'', component:MainContentComponent},
  {path:'booklist', component:BooksComponent,
  children:
  [{path:'book', component:BookItemComponent}]
},
  {path:'authorlist', component:AuthorsComponent,
children:
        [{path:'author', component:AuthorItemComponent}]
},
  {path:'addBook', component:AddBookComponent},
  {path:'addAuthor', component:AddAuthorComponent},
  {path:'logout',component:MainContentComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),    
  ]
})
export class AppRoutingModule { }
