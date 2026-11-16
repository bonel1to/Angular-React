import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ContactsComponent } from './contacts/contacts';
import { PostsListComponent } from './posts-list/posts-list';
import { PostFormComponent } from './post-form/post-form';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Главная' },
  { path: 'contacts', component: ContactsComponent, title: 'Контакты' },
  { path: 'posts', component: PostsListComponent, title: 'Посты' },
  { path: 'create', component: PostFormComponent, title: 'Создать пост' },
  { path: '**', redirectTo: '' },
];
