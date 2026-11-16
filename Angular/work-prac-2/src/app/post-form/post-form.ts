import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css',
})
export class PostFormComponent {
  private fb = inject(FormBuilder);
  private postService = inject(PostService);

  successMessage = '';
  errorMessage = '';

  postForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    body: ['', [Validators.required, Validators.minLength(10)]],
  });

  get title() {
    return this.postForm.get('title');
  }

  get body() {
    return this.postForm.get('body');
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      this.successMessage = '';
      this.errorMessage = '';

      this.postService.addPost(this.postForm.value).subscribe({
        next: () => {
          this.postForm.reset();
          this.successMessage = 'Пост создан';
        },
        error: () => {
          this.errorMessage = 'Не удалось создать пост. Проверьте, запущен ли json-server.';
        },
      });
    } else {
      this.postForm.markAllAsTouched();
    }
  }
}
