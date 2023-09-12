import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent {
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
}
