import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { SelectTodoComponent } from './components/select-todo/select-todo.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoListComponent, AllTodosComponent, SelectTodoComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [TodoListComponent],
})
export class TodoListModule {}
