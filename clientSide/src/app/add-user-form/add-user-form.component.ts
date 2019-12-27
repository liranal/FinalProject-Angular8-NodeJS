import { Component, OnInit, EventEmitter } from "@angular/core";
import { UsersUtilsServiceService } from "../users-utils-service.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-add-user-form",
  templateUrl: "./add-user-form.component.html",
  styleUrls: ["./add-user-form.component.css"]
})
export class AddUserFormComponent implements OnInit {
  isFormValid: boolean = true;
  user: any = { Name: "", Email: "" };
  constructor(
    private utils: UsersUtilsServiceService,
    private routeNav: Router,
    private snack: MatSnackBar
  ) {}

  customSubmit(isValid: boolean) {
    if (isValid) {
      //  alert("ADD!");
      this.isFormValid = true;
      this.utils.addUser(this.user);
      this.routeNav.navigate(["/"]);
      this.snack.open("User Added", "Close", {
        duration: 5000
      });
    } else {
      this.isFormValid = false;
    }
  }

  ngOnInit() {}
}
