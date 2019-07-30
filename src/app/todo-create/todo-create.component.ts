import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/rest-api.spec';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { todo } from '../shared/todo-model';
// import { ToastsManager } from '../common/toast-manager';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  
  form: FormGroup;
  lstStatus = ['Open', 'Inprogress', 'Resolve', 'Closed'];
  // @Input() todo = { title: '', description: '', status:'' };
  todo = { title: '', description: '', status: '' };
  constructor(
    private todoService: TodoService, 
    private router: Router,
    // private toastManager: ToastsManager,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl(''),
    })
  }

  addTodo() {
    debugger;
    if (this.form.valid) {
      this.todoService.createTodo(this.todo).subscribe(
        result => {
          if (result) {
            // this.toastManager.success('A todo add successfully!')
            this.router.navigate(['/todo-list']);
          }
        }
      )
    }
  }

}
