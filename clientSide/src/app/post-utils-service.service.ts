import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostUtilsServiceService {
  private posts: any = {};
  public postsObserver: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {}

  getUserToDo(id) {
    this.http
      .get<any>("http://localhost:8000/api/posts/user/" + id)
      .subscribe(data => {
        this.posts[id] = data;
        this.postsObserver.next(this.posts);
        //console.log("Post:" + JSON.stringify(data));
      });
  }

  updatepost(post) {
    this.http
      .put<any>("http://localhost:8000/api/posts/User/" + post.UserID, post)
      .subscribe(data => {
        let postIndex = this.posts[post.UserID].findIndex(postToFind => {
          return postToFind == post;
        });
        this.posts[post.UserID][postIndex] = data;
        console.log("BITCHESS! " + JSON.stringify(this.posts));
        this.postsObserver.next(this.posts);
      });
  }

  addpost(post) {
    this.http
      .post<any>("http://localhost:8000/api/posts/", post)
      .subscribe(data => {
        console.log("DATA BITCHESS!! : " + JSON.stringify(data));
        if (!this.posts[post.UserID]) {
          this.posts[post.UserID] = [];
        }
        this.posts[post.UserID].push(data);
        this.postsObserver.next(this.posts);
      });
  }
}
