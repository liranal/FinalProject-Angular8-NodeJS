import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input() private user: any;
  @Output() private userClicked_Event: EventEmitter<number> = new EventEmitter<
    number
  >();
  private showOtherData: boolean = false;
  constructor() {}

  userClicked() {
    this.userClicked_Event.emit(this.user.id);
  }

  OtherDatabtn() {
    console.log("OtherData Clicked");
    this.showOtherData = !this.showOtherData;
  }

  Updatebtn() {
    console.log("Update Clicked");
  }

  Deletebtn() {
    console.log("Delete Clicked");
  }

  ngOnInit() {}
}
