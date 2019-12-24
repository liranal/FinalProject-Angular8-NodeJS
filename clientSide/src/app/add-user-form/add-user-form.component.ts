import { Component, OnInit, EventEmitter } from "@angular/core";
import { UsersUtilsServiceService } from "../users-utils-service.service";
import { Router } from "@angular/router";

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
    private routeNav: Router
  ) {}

  customSubmit(isValid: boolean) {
    if (isValid) {
      alert("ADD!");
      this.isFormValid = true;
      this.utils.addUser(this.user);
      this.routeNav.navigate(["/"]);
    } else {
      this.isFormValid = false;
    }
  }

  ngOnInit() {}
}
