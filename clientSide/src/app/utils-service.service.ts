import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class UtilsServiceService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users/");
  }

  getUserToDo(id) {
    return this.http.get<any>(
      "https://jsonplaceholder.typicode.com/todos?userId=" + id
    );
  }
}
