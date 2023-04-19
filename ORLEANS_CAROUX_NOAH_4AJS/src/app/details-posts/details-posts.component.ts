import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../service/authors.service';
import { PostsService } from '../service/posts.service';
@Component({
  selector: 'app-details-posts',
  templateUrl: './details-posts.component.html',
  styleUrls: ['./details-posts.component.css']
})
export class DetailsPostsComponent {
  post: any;
  authors:any;
  private id: any;
  constructor(private postService: PostsService, private authorService: AuthorsService , private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });

    //récupération du post sélectionné
    this.postService.getPost(this.id).subscribe(
      response => {
        //console.log(response);
        this.post = response
      }
    );
      this.setName();

  }

  // récupération du nom de l'auteur du post en fonction de son id dans le post
  setName(){
    this.authorService.getAuthors().subscribe(
      data => {
        this.authors = data;
          for(let author of this.authors){
            if(this.post.author_id == author.id){
             this.post.full_name = author.full_name;
              console.log(this.post);
            }
          }
        console.log(this.post);
      }
    );
  }
}
