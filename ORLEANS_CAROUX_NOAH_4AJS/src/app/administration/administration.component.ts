import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../service/posts.service';
import { AuthorsService } from '../service/authors.service';
import { ErrorHandleComponent } from '../error-handle/error-handle.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent {
  posts: any;
  authors:any;

  constructor(private postService: PostsService, private authorService: AuthorsService, private router : Router) { }

  ngOnInit(): void {
    this.refrech();

  }

  //méthode de suppression d'un post sélectionné
  deletePost(id: any) {
    const post: any = this.posts.find((p: any) => p.id === id);
    const title = prompt(`Are you sure you want to delete "${post.title}"? Please enter the post title to confirm:`);
    if (title === post.title) {
      alert("Post deleted !");
      this.postService.deletePost(id).subscribe(
        data => {
          this.refrech();
        }
      );
    } else {
      alert("Post title does not match. Deletion cancelled.");
    }
  }

  //Accès à la page Our Latest Posts
  postUser() {
    this.router.navigate(['']);
  }

  //Accès à la page Read More
  detailsPosts(id: any) {
    this.router.navigate(['detailsPost/'+id]);
  }

  //Accès à la page Edit Post
  editPost(id:any){
    this.router.navigate(['adminEditPost/'+id]);
  }

  //Accès à la page Create Post
  createPost(){
    this.router.navigate(['adminCreatePost/']);
  }

  refrech() {
    // récupération des posts
    this.postService.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      }
    );

    // récupération des noms des auteurs en fonction de l'author.id de chaque post
    this.authorService.getAuthors().subscribe(
      data => {
        this.authors = data;
        // console.log(this.authors);
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
