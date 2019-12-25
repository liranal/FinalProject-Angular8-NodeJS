import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TasksUtilsServiceService } from "../tasks-utils-service.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  private sub: any;
  private tasks: any[];
  private id: number;
  private showAddTask: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private utils: TasksUtilsServiceService
  ) {}

  showAddTaskView() {
    this.showAddTask = true;
  }

  backFromAddTask() {
    this.showAddTask = false;
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.userid;
      this.utils.getUserToDo(params.userid);
    });
    this.utils.tasksObserver.subscribe(data => {
      this.tasks = data[this.id];
    });
  }
}
