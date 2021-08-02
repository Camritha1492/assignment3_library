import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
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

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    BooksComponent,
    AuthorsComponent,
    AddBookComponent,
    AddAuthorComponent,
    SigninComponent,
    LoginComponent,
    BookItemComponent,
    AuthorItemComponent,
    UpdateBookComponent,
    UpdateAuthorComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
