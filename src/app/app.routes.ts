import { Routes } from '@angular/router';
import { ContributionIntervalComponent } from './components/contribution-interval/contribution-interval.component';
import { CreateNewPostsComponent } from './components/create-new-posts/create-new-posts.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Component',
  },
  {
    path: 'contribution',
    component: ContributionIntervalComponent,
    title: 'Contributions',
  },
  {
    path: 'overview',
    component: OverviewComponent,
    title: 'Contributions',
  },
  {
    path: 'create-new-posts',
    component: CreateNewPostsComponent,
    title: 'Create New Posts',
  },
];
