import { Component, OnInit } from "@angular/core";
import { UtilsServiceService } from "../utils-service.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  private users: any[] = null;
  constructor(private utils: UtilsServiceService) {}

  ngOnInit() {
    this.utils.getAllUsers().subscribe(users => {
      sessionStorage.setItem("Users", JSON.stringify(users));
      this.users = users;
    });
  }
}
