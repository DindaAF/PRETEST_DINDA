import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  // post: any = {
  //   title: '',
  //   body: '',
  // };
  myForm: FormGroup;

  constructor(private postService: PostService, private router: Router,private fb: FormBuilder) {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.myForm.valid) {
    this.postService.addPost(this.myForm.value).subscribe(() => {
      this.router.navigate(['/crud']);
    });
  }
  }
}
