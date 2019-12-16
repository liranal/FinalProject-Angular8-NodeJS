import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UtilsServiceService } from "../utils-service.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  private id: number;
  private sub: any;
  @Input() private task: any;
  constructor(
    private route: ActivatedRoute,
    private utils: UtilsServiceService
  ) {}

  changeCompleted() {
    this.task.completed = !this.task.completed;
    console.log("HELLO");
  }
  ngOnInit() {
    console.log(this.task);
  }
}
