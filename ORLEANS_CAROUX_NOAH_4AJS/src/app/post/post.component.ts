import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../service/posts.service';
import { AuthorsService } from '../service/authors.service';
import { ErrorHandleComponent } from '../error-handle/error-handle.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts : any;
  authors : any;
  constructor(private postServices: PostsService, private authorService: AuthorsService , private router: Router) {}

  ngOnInit(): void {
    this.refrech();
  }

  //Accès à la page Read More
  detailsPosts(id: any) {
    this.router.navigate(['detailsPost/'+id]);
  }

  //Accès à la page Administrator
  adminPosts() {
    this.router.navigate(['adminPost/']);
  }


  refrech() {
    // récupération des posts
    this.postServices.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      }
    );

    // récupération des noms des auteurs en fonction de l'author.id de chaque post
    this.authorService.getAuthors().subscribe(
      data => {
        this.authors = data;
        console.log(this.authors);

        for(let post of this.posts){
          for(let author of this.authors){
            if(post.author_id == author.id){
              post.full_name = author.full_name;
              console.log(post);
            }
          }

        }
      }
    );


  }
}
