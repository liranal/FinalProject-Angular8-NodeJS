import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksUtilsServiceService } from "../tasks-utils-service.service";
@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  private id: number;
  private sub: any;
  @Input() private task: any;
  constructor(private utils: TasksUtilsServiceService) {}

  changeCompleted() {
    this.task.Completed = !this.task.Completed;
    this.utils.updateTask(this.task);
  }
  ngOnInit() {
    console.log(this.task);
  }
}
