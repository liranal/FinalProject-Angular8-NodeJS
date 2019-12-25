import { Component, OnInit, Input } from "@angular/core";
import { PostUtilsServiceService } from "../post-utils-service.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  private id: number;
  private sub: any;
  @Input() private post: any;
  constructor(private utils: PostUtilsServiceService) {}

  ngOnInit() {}
}
