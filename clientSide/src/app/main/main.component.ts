import { Component, OnInit } from "@angular/core";
import { UsersUtilsServiceService } from "../users-utils-service.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private utils: UsersUtilsServiceService) {}

  ngOnInit() {}
}
