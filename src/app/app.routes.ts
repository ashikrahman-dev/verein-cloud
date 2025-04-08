import { Routes } from '@angular/router';
import { CreateNewPostsComponent } from './components/create-new-posts/create-new-posts.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Component',
  },
  {
    path: 'create-new-posts',
    component: CreateNewPostsComponent,
    title: 'Create New Posts',
  },
];
