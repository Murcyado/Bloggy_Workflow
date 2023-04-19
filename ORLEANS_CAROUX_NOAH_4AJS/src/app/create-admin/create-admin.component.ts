import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../service/authors.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
  authors:any;
  posts:any;
  maxId:number = 0;

  constructor(private postService: PostsService, private authorService: AuthorsService, private router : Router){}

  ngOnInit(): void {
    this.refrech();
  }

  //création d'un nouveau post dans l'api
  createPost(postform:any){
    //création des variables nécessaires à la création du post
    let title = postform.value.title;
    let author = parseInt(postform.value.postauthor);
    let image = postform.value.image;
    let resume = postform.value.resume;
    let content = postform.value.content;
    let student_id = 102007;

    let now = new Date();
    let created_at = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    if (this.posts.length > 0) {
      this.maxId = Math.max(...this.posts.map((p: any) => p.id));
    }

    //mise en place de ces variables dans l'api
    let post={
      "title":title,
      "image_url":image,
      "resume":resume,
      "content":content,
      "author_id":author,
      "created_at": created_at,
      "student_id": student_id,
      "id": this.maxId+1
    }

    //affichage d'un pop-up en cas de réussite et retour sur la page Administrator
    this.postService.addPosts(post).subscribe(
      data=>{
        alert("Post added !");
        console.log(post);
        this.router.navigate(['adminPost']);
      }
    )
  }

  refrech(){
    //récupération des auteurs de l'api
    this.authorService.getAuthors().subscribe(
      data=>{
        this.authors = data;
        console.log(this.authors);
      }
    )
      //récupération des posts de l'api
    this.postService.getPosts().subscribe(
      data=>{
        this.posts = data;
        console.log(this.posts);
      }
    )
  }
}

