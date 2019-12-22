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
  @Output() private userUpdate_Event: EventEmitter<any> = new EventEmitter<
    any
  >();
  @Output() private userDelete_Event: EventEmitter<any> = new EventEmitter<
    any
  >();
  private showOtherData: boolean = false;
  constructor() {}

  userClicked() {
    this.userClicked_Event.emit(this.user.UserID);
  }

  OtherDatabtn() {
    console.log("OtherData Clicked");
    this.showOtherData = !this.showOtherData;
  }

  Updatebtn() {
    console.log("Update Clicked");
    this.userUpdate_Event.emit(this.user);
  }

  Deletebtn() {
    console.log("Delete Clicked");
    this.userDelete_Event.emit(this.user);
  }

  ChangeName(name) {
    this.user.Name = name;
  }

  ChangeEmail(email) {
    this.user.Email = email;
  }
  ChangeStreet(street) {
    this.user.street = street;
  }
  ChangeCity(city) {
    this.user.city = city;
  }
  ChangeZipcode(zip) {
    this.user.Zipcode = zip;
  }
  ngOnInit() {}
}
