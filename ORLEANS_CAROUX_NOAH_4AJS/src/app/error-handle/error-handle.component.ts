import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-handle',
  templateUrl: './error-handle.component.html',
  styleUrls: ['./error-handle.component.css']
})
export class ErrorHandleComponent {

  constructor(private router : Router) { }

  //affichage d'un message d'erreur en cas de problème
  errorMessage: string = 'Une erreur est survenue. Veuillez réessayer plus tard.';

  //Accès à la page Our Latest Posts
  postUser() {
    this.router.navigate(['']);
  }

  //Accès à la page Administrator
  adminPosts() {
    this.router.navigate(['adminPost/']);
  }
}
