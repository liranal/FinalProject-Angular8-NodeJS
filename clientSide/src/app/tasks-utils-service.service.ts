import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TasksUtilsServiceService {
  private tasks: any = {};
  public tasksObserver: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {}

  getUserToDo(id) {
    this.http
      .get<any>("http://localhost:8000/api/tasks/user/" + id)
      .subscribe(data => {
        this.tasks[id] = data;
        this.tasksObserver.next(this.tasks);
      });
  }

  updateTask(task) {
    this.http
      .put<any>("http://localhost:8000/api/tasks/User/" + task.UserID, task)
      .subscribe(data => {
        let taskIndex = this.tasks[task.UserID].findIndex(TaskToFind => {
          return TaskToFind == task;
        });
        this.tasks[task.UserID][taskIndex] = data;
        this.tasksObserver.next(this.tasks);
      });
  }

  addTask(task) {
    this.http
      .post<any>("http://localhost:8000/api/tasks/", task)
      .subscribe(data => {
        if (!this.tasks[task.UserID]) {
          this.tasks[task.UserID] = [];
        }
        this.tasks[task.UserID].push(data);
        this.tasksObserver.next(this.tasks);
      });
  }
}
