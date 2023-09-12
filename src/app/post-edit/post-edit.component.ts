import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  post: any = {
    title: '',
    body: '',
  };
  postId!: number;
  myForm: FormGroup;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id']; // Ambil ID postingan dari URL
      this.getPostData(this.postId);
      console.log(this.getPostData(this.postId))
    });
  }

  getPostData(id: number): void {
    this.postService.getPost(id).subscribe((data) => {
      this.post = data;
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
    this.postService.updatePost(this.postId, this.post).subscribe(() => {
      this.router.navigate(['/crud']);
    });
  }
  }
}
