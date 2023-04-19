import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  //get all posts
  getPosts() {
    return this.http.get("http://102007.bloggy.ecole-it.devigne.space/posts/");
  }

  //add posts
  addPosts(post:any) {
    return this.http.post("http://102007.bloggy.ecole-it.devigne.space/posts/", post);
  }

  //get one post
  getPost(id:number) {
    return this.http.get("http://102007.bloggy.ecole-it.devigne.space/posts/"+id);
  }

  //edit post
  editPost(post:any) {
    console.log(post['id'])
    return this.http.put("http://102007.bloggy.ecole-it.devigne.space/posts/"+post['id'], post);
  }

  //delete post
  deletePost(id:number){
    return this.http.delete("http://102007.bloggy.ecole-it.devigne.space/posts/"+ id);
  }

}
