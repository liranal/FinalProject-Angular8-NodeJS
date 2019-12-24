import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AddUserFormComponent } from "./add-user-form/add-user-form.component";
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";

const routes: Routes = [
  { path: "Users", component: UsersComponent },
  { path: "Tasks/:id", component: TasksComponent },
  { path: "AddUser", component: AddUserFormComponent },
  { path: "AddTask/:userid", component: AddTaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
