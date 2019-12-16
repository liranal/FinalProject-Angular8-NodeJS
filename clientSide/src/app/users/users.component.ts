import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: any[] = null;
  @Output() userEventClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  userClicked_Event(userID) {
    this.userEventClicked.emit(userID);
  }
  search(toSearch) {
    let temp = JSON.parse(sessionStorage.getItem("Users"));
    this.users = temp.filter(user => {
      return user.name.toLowerCase().indexOf(toSearch) > -1;
    });
  }
  ngOnInit() {
    this.users = JSON.parse(sessionStorage.getItem("Users"));
  }
}
