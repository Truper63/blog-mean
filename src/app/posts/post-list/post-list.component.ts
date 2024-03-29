import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: 'This is the first post' },
  //   { title: 'Second Post', content: 'This is the second post' },
  //   { title: 'Third Post', content: 'This is the third post' },
  // ];
  private postsSub: Subscription;
  posts: Post[] = [];

  constructor(public postsService: PostsService) {}
  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  onDelete(PostId: string) {
    this.postsService.deletePost(PostId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
