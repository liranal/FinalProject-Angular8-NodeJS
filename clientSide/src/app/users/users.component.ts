import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { UsersUtilsServiceService } from "../users-utils-service.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  @Output() userEventClicked: EventEmitter<number> = new EventEmitter<number>();
  @Input() users: any[];
  constructor(
    private utils: UsersUtilsServiceService,
    private snack: MatSnackBar
  ) {}

  userUpdate_Event(user) {
    this.utils.setUserData(user.UserID, user);
    this.snack.open("User updated", "Close", {
      duration: 5000
    });
  }

  userDelete_Event(userToDelete) {
    console.log("User to Delete: " + userToDelete.UserID);
    this.utils.deleteUserData(userToDelete);
    this.snack.open("User deleted", "Close", {
      duration: 5000
    });
    console.log(this.users);
  }

  addUser_event(user) {
    this.utils.addUser(user);
  }

  search(toSearch) {
    console.log(this.utils.getUsers());
    let backUpUsers = this.utils.getUsers();
    this.users = backUpUsers.filter(user => {
      return user.Name.toLowerCase().indexOf(toSearch) > -1;
    });
  }
  ngOnInit() {
    this.utils.getAllUsers();
    this.utils.usersObserver.subscribe(data => {
      this.users = data;
    });
    console.log("HELLO" + this.users);
  }

  ngOnDestroy(): void {
    this.utils.usersObserver.unsubscribe();
  }
}
