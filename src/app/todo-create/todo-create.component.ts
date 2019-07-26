import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/rest-api.spec';
// import { ToastsManager } from '../common/toast-manager';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  @Input() addtodo = { title: '', description:'', status: '' }
  constructor(
    private todoService: TodoService, 
    private router: Router,
    // private toastManager: ToastsManager,
  ) { }

  ngOnInit() {
  }

  addTodo() {
    debugger;
    this.todoService.createTodo(this.addtodo).subscribe(
      result => {
        if (result) {
          // this.toastManager.success('A todo add successfully!')
          this.router.navigate['/todo-list'];
        }
      }
    )
  }

}
