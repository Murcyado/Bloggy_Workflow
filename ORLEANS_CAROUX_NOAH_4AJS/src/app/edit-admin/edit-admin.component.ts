import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from '../service/authors.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {

  constructor(private postService: PostsService, private authorService: AuthorsService, private activeRoute: ActivatedRoute, private router: Router) { }

  post: any;
  author: any;
  public id: any;

  public postToUpdate: any;
  public title: any;
  public idAuthor: any;
  public image: any;
  public resume: any;
  public contenu: any;


  ngOnInit() {

    //récupération de l'id du post dans l'api
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });

    //initiation de la méthode "getPost" avec les attributs nécessaires au post
    this.postService.getPost(this.id).subscribe(
      response => {
        this.post = response;
        this.title = this.post.title;
        this.image = this.post.image_url;
        this.resume = this.post.resume;
        this.contenu = this.post.content;
        this.idAuthor = this.post.author_id;
        this.refresh();
      }
    );
  }

  editPost() {
    //mise en place de ces variables dans l'api
    this.postToUpdate = {
      'title': this.title,
      'image_url': this.image,
      'resume': this.resume,
      'content': this.contenu,
      'author_id': this.idAuthor,
      'id': this.id
    }
    console.log(this.id);
    console.log(this.postToUpdate);

    //affichage d'un pop-up en cas de réussite et retour sur la page Administrator
    this.postService.editPost(this.postToUpdate).subscribe(
      response => {
        alert("Post updated !");
        console.log(response);
        this.router.navigate(['adminPost']);
      }
    );
  }

  refresh() {
    //récupération des auteurs de l'api
    this.authorService.getAuthors().subscribe(
      data => {
        this.author = data;
        console.log(this.author);
      }
    );
  }
}
