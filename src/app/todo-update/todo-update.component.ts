import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../service/rest-api.spec';
import { Router, ActivatedRoute } from '@angular/router';
import { todo } from '../shared/todo-model';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.css']
})
export class TodoUpdateComponent implements OnInit {
  form: FormGroup;

  todoUpdate: todo;
  lstStatus = ['Open', 'Inprogress', 'Resolve', 'Closed'];

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl(''),
    });
    this.todoUpdate = new todo();
    this.route.paramMap.subscribe(params => {
      this.todoUpdate.id = params.get('id');
    });
    this.getTodoUpdate();
  }

  getTodoUpdate() {
    debugger;
    this.todoService.getTodoDetails(this.todoUpdate.id).subscribe(
      result => {
        if (result != null) {
          this.todoUpdate = result;
        }
      }
    )
  };

  updateTodo() {
    debugger
    if (this.form.valid) {
      this.todoService.updateTodo(this.todoUpdate.id, this.todoUpdate).subscribe(
        result => {
          if (result) {
            // this.toastManager.success('A todo add successfully!')
            this.router.navigate(['/todo-details/',this.todoUpdate.id]);
          }
        }
      )
    }
  };

}
