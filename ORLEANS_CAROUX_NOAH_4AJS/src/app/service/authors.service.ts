import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  //get all authors
  getAuthors() {
    return this.http.get("http://102007.bloggy.ecole-it.devigne.space/authors/");
  }

  //get one author
  getAuthor(id:number) {
    return this.http.get("http://102007.bloggy.ecole-it.devigne.space/authors/"+id);
  }
}
