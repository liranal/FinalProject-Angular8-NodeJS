import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UtilsServiceService } from "../utils-service.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  private sub: any;
  private tasks: any[];
  private id: number;
  constructor(
    private route: ActivatedRoute,
    private utils: UtilsServiceService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.utils.getUserToDo(params.id).subscribe(data => {
        this.tasks = data;
      });
    });
  }
}
