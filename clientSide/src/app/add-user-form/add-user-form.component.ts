import { Component, OnInit, EventEmitter } from "@angular/core";
import { UsersUtilsServiceService } from "../users-utils-service.service";

@Component({
  selector: "app-add-user-form",
  templateUrl: "./add-user-form.component.html",
  styleUrls: ["./add-user-form.component.css"]
})
export class AddUserFormComponent implements OnInit {
  isFormValid: boolean = true;
  user: any = { Name: "", Email: "" };
  constructor(private utils: UsersUtilsServiceService) {}

  customSubmit(isValid: boolean) {
    if (isValid) {
      alert("ADD!");
      this.isFormValid = true;
      this.utils.addUser(this.user);
    } else {
      this.isFormValid = false;
    }
  }

  ngOnInit() {}
}
