import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./tasks/tasks.component";

const routes: Routes = [
  { path: "Users", component: UsersComponent },
  { path: "Tasks/:id", component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
