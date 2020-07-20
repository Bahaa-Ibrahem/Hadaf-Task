import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { PostComponent } from './Components/post/post.component';

const routes: Routes = [
  {path: 'posts', component: HomeComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
