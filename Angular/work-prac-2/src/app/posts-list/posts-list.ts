import { Component, inject, OnInit } from '@angular/core';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsListComponent implements OnInit {
  private postService = inject(PostService);

  posts: Post[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Не удалось загрузить посты. Проверьте, запущен ли json-server.';
        this.isLoading = false;
      },
    });
  }

  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter((post) => post.id !== id);
      },
      error: () => {
        this.errorMessage = 'Не удалось удалить пост. Проверьте, запущен ли json-server.';
      },
    });
  }
}
