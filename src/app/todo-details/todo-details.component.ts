import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/rest-api.spec';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Title } from '@angular/platform-browser';
import { todo } from '../shared/todo-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todoDetails: todo;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService, 
    private titleService: Title,
    private router: Router,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Todo-details');
    this.todoDetails = new todo();
    this.route.paramMap.subscribe(params => {
      this.todoDetails.id = params.get('id');
    })
    this.getTodo();
  }

  getTodo() {
    debugger
    this.todoService.getTodoDetails(this.todoDetails.id).subscribe(
      result => {
        if (result != null) {
          this.todoDetails = result;
        }
      }
    )
  }

  onBack() {
    this.router.navigate(['/todo-list']);
  }

}
