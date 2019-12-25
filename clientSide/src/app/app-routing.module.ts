import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./tasks/tasks.component";
import { AddUserFormComponent } from "./add-user-form/add-user-form.component";
import { AddTaskFormComponent } from "./add-task-form/add-task-form.component";
import { UserDataComponent } from "./user-data/user-data.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  { path: "Users", component: UsersComponent },
  {
    path: "UserData/:userid",
    component: UserDataComponent,
    children: [
      {
        path: "AddTask/:userid",
        component: AddTaskFormComponent,
        outlet: "AddTask"
      },
      {
        path: "AddPost",
        component: AddTaskFormComponent,
        outlet: "AddPost"
      }
    ]
  },
  { path: "AddUser", component: AddUserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
