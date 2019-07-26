import { Component, OnInit } from '@angular/core';
import { todo } from '../shared/todo-model';
import { TodoService } from '../service/rest-api.spec';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Title } from '@angular/platform-browser';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [Ng4LoadingSpinnerService]
})
export class TodoListComponent implements OnInit {

  todos: todo[] = [];
  form: FormGroup;
  constructor(
    private todoService: TodoService, 
    private spinerService: Ng4LoadingSpinnerService,
    private titleService: Title,

  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
    this.titleService.setTitle("Todo-List")
    this.getDataInit();
  }

  getDataInit() {
    this.spinerService.show();
    this.todoService.getAllTodo().subscribe(
      result => {
        if (result) {
          this.todos = result;
          this.spinerService.hide();
        }
      }
    )
  }

  deleteTodo(id) {
    this.todoService.deleteTodo(id).subscribe(
      result => {
        this.getDataInit();
      }
    )
  }


}
