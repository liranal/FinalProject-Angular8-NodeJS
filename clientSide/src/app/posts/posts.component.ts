import { Component, OnInit } from "@angular/core";
import { PostUtilsServiceService } from "../post-utils-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  private sub: any;
  private posts: any[];
  private id: number;
  constructor(
    private route: ActivatedRoute,
    private utils: PostUtilsServiceService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.userid;
      this.utils.getUserToDo(params.userid);
    });
    this.utils.postsObserver.subscribe(data => {
      this.posts = data[this.id];
      console.log("POSTS: " + JSON.stringify(this.posts));
    });
  }
}
