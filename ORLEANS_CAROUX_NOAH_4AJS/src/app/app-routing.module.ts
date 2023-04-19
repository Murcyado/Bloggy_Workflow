import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { PostComponent } from './post/post.component';
import { DetailsPostsComponent } from './details-posts/details-posts.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';

//mise en place des routes d'accès au différentes pages du site
const routes: Routes = [
  { path: "", component: PostComponent },
  { path: "adminPost", component: AdministrationComponent},
  { path: "adminCreatePost", component: CreateAdminComponent},
  { path: "adminEditPost/:id", component: EditAdminComponent },
  { path: "detailsPost/:id", component: DetailsPostsComponent },
  { path: "404", component: ErrorHandleComponent },
  { path: "**", component: ErrorHandleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
