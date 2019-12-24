import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksUtilsServiceService } from "../tasks-utils-service.service";

@Component({
  selector: "app-add-task-form",
  templateUrl: "./add-task-form.component.html",
  styleUrls: ["./add-task-form.component.css"]
})
export class AddTaskFormComponent implements OnInit {
  isFormValid: boolean = true;
  private sub: any;
  task: any = { UserID: "", TaskID: "", Title: "", Completed: false };

  constructor(
    private route: ActivatedRoute,
    private utils: TasksUtilsServiceService
  ) {}

  customSubmit(isValid: boolean) {
    if (isValid) {
      alert("ADD!");
      this.isFormValid = true;
      this.utils.addTask(this.task);
    } else {
      this.isFormValid = false;
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.task.UserID = params.userid;
      this.task.TaskID = params.taskid;
    });
  }
}
