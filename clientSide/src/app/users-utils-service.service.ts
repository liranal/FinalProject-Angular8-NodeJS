import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersUtilsServiceService {
  private users: any[] = [];
  public usersObserver: Subject<any[]> = new Subject<any[]>();
  constructor(private http: HttpClient) {
    this.getAllUsers();
  }

  getUsers() {
    return this.users;
  }

  getAllUsers() {
    this.http.get<any>("http://localhost:8000/api/users/").subscribe(data => {
      this.users = data;
      console.log(this.users);
      this.usersObserver.next(this.users);
    });
  }

  setUserData(id, user) {
    this.http
      .put<any>("http://localhost:8000/api/users/" + id, user)
      .subscribe(data => {
        console.log("USER: " + JSON.stringify(data));
        let userIndex = this.users.findIndex(userToFind => {
          return userToFind == user;
        });
        this.users[userIndex] = data;
        this.usersObserver.next(this.users);
      });
  }

  deleteUserData(userToDelete) {
    return this.http
      .delete<any>("http://localhost:8000/api/users/" + userToDelete.UserID)
      .subscribe(data => {
        let userIndex = this.users.findIndex(userToFind => {
          return userToFind == userToDelete;
        });
        this.users.splice(userIndex, 1);
        this.usersObserver.next(this.users);
      });
  }

  addUser(user) {
    let lastUserID = Math.max.apply(
      Math,
      this.users.map(function(user) {
        return user.UserID;
      })
    );
    user["UserID"] = lastUserID + 1;
    this.http
      .post<any>("http://localhost:8000/api/users/", user)
      .subscribe(data => {
        this.users.push(data);
        this.usersObserver.next(this.users);
      });
  }
}
