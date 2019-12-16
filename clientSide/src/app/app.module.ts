import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserComponent } from "./user/user.component";
import { MatCardModule } from "@angular/material/card";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { MainComponent } from "./main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { UsersComponent } from "./users/users.component";
import { TaskComponent } from "./task/task.component";
import { UserDataComponent } from "./user-data/user-data.component";
import { TasksComponent } from "./tasks/tasks.component";
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MainComponent,
    UsersComponent,
    TaskComponent,
    UserDataComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
