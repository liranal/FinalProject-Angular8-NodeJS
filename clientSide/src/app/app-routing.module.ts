import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AddUserFormComponent } from "./add-user-form/add-user-form.component";

const routes: Routes = [
  { path: "Users", component: UsersComponent },
  { path: "Tasks/:id", component: TasksComponent },
  { path: "AddUser", component: AddUserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
