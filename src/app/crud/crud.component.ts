import { Component, OnInit,ViewChild  } from '@angular/core';
import { PostService } from '../post.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})

export class CrudComponent implements OnInit {
  posts: any[] = [];
  newPost: any = {};
  displayedColumns: string[] = ['title', 'body', 'action'];
  pagedItems: any[] = []; // Data item yang akan dipaginasi
  pageSize = 10; // Jumlah item per halaman
  currentPage = 1;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  updatePagedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedItems = this.posts.slice(startIndex, startIndex + this.pageSize);
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.updatePagedItems();
  }

  addPost() {
    this.postService.addPost(this.newPost).subscribe(() => {
      this.newPost = {};
      this.loadPosts();
    });
  }

  updatePost(id: number, updatedPost: any) {
    this.postService.updatePost(id, updatedPost).subscribe(() => {
      this.loadPosts();
    });
  }

  deletion(title : string) {
    alert('Data ' + title + ' was deleted')
    this.loadPosts()
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.loadPosts();
    });
  }
}
