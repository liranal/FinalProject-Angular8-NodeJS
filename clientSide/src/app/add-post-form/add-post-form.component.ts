import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostUtilsServiceService } from "../post-utils-service.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-add-post-form",
  templateUrl: "./add-post-form.component.html",
  styleUrls: ["./add-post-form.component.css"]
})
export class AddPostFormComponent implements OnInit {
  isFormValid: boolean = true;
  private sub: any;
  id: number;
  post: any = { UserID: "", postID: "", Title: "", Body: "" };

  constructor(
    private route: ActivatedRoute,
    private routerNav: Router,
    private utils: PostUtilsServiceService,
    private snack: MatSnackBar
  ) {}

  cancelBtn() {
    this.routerNav.navigate(["/UserData", this.post.UserID]);
    //this.backFromAddTask.emit();
  }

  customSubmit(isValid: boolean) {
    if (isValid) {
      //this.task.UserID = this.id;
      //alert("ADD!\n" + JSON.stringify(this.post));
      this.isFormValid = true;
      this.utils.addpost(this.post);
      this.snack.open("Post Added", "Close", {
        duration: 5000
      });
      //this.cancelBtn();
      this.routerNav.navigate(["/UserData", this.post.UserID]);
    } else {
      this.isFormValid = false;
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.post.UserID = params.userid;
    });
  }
}
