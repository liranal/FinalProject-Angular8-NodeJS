import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TasksUtilsServiceService {
  constructor(private http: HttpClient) {}

  getUserToDo(id) {
    return this.http.get<any>("http://localhost:8000/api/tasks/user/" + id);
  }

  updateTask(task) {
    console.log("http://localhost:8000/api/tasks/User/" + task.UserID);
    return this.http.put<any>(
      "http://localhost:8000/api/tasks/User/" + task.UserID,
      task
    );
  }
}
