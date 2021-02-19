import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/Models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = new Array<Post>();
  post = new Post();

  constructor(
    private postService: PostService
  ) { }

  savePost(form: NgForm) {
    this.post.namePost = form.value.namePost;
    this.postService.save(this.post)
    .subscribe(
      result => {
        this.loadPosts();
        console.log("result:"+result);
      },
      error => {
        console.log("error:"+error);
      }
    );
  }

  deletePost(id: string) {
    this.postService.delete(id)
    .subscribe(
      result => {
        this.loadPosts();
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  loadPosts() {
    this.postService.getPosts()
    .subscribe(
      result => {
        this.posts = new Array<Post>();
        for(let post of result) {
          this.posts.push(post);
        }
        this.postService.posts = this.posts;
        console.log(this.posts);
      },
      error => {
        console.log(error)
      }
    );
  }

  ngOnInit(): void {
   this.loadPosts(); 
  }

}
