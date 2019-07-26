import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todo-list'},
  { path: 'todo-list', component: TodoListComponent },
  { path: 'todo-create', component: TodoCreateComponent },
  { path: 'todo-update/:id', component: TodoUpdateComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
