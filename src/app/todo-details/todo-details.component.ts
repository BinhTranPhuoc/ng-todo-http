import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/rest-api.spec';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Title } from '@angular/platform-browser';
import { todo } from '../shared/todo-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo: todo;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService, 
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Todo-details');
    this.todo = new todo();
    this.route.paramMap.subscribe(params => {
      this.todo.id = params.get('id');
    })
    this.gettodo();
  }

  gettodo() {
    this.todoService.getTodo(this.todo.id).subscribe(
      result => {
        if (result) {
          this.todo = result;
        }
      }
    )
  }

}
