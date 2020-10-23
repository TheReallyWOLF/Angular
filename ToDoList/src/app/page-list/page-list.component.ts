import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../_service/data.service';
import { Subscription } from 'rxjs';
import { DragulaService } from 'ng2-dragula';
import { ToDo } from '../_interface/todo';
import { EventPing } from "../_interface/eventping";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit, OnDestroy {

  public toDoDoneShow: boolean;
  public toDoShow: boolean;
  public subs = new Subscription();
  public $todos: ToDo[];
  public $todosdone: ToDo[];

  constructor(
    public _dataService: DataService,
    private _dragulaService: DragulaService
  ) {
    this.toDoDoneShow = false;
    this.toDoShow = true;
    this.$todos = [];
    this.$todosdone = [];
    this.loadData();

    this._dragulaService.createGroup('todos', {
      removeOnSpill: false,
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      }
    });

    this.subs.add(_dragulaService.drop('todos')
      .subscribe(({ el }) => {
        this.position();
      })
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // Interface Functions Angular
  public loadData(): void {
    this.$todosdone = [];
    this.$todos = [];
    this._dataService.getToDo().subscribe((data: ToDo[]) => {
      data.forEach((toDo: ToDo) => {
        if(toDo.status === true){
          this.$todosdone.push(toDo);
        }else {
          this.$todos.push(toDo);
        }
      });
    }, error => {
      console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
    });
  }

  public position(): void {
    let position = 0;
    this._dataService.$todos.subscribe((todos: ToDo[]) => {
      todos.forEach((todo: ToDo) => {
        position += 1;
        todo.position = position;
        this._dataService.putToDo(todo).subscribe((data: ToDo) => {
        }, error => {
          console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
        });
      });
    });
  }

  public create(event: ToDo): void{
    event.position = this.$todos.length + 1;
    this.$todos.push(event);
  }

  public update(event: EventPing): void {
    if ('check' === event.label) {
      if (event.object.status) {
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
        this.$todos.push(event.object);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosdone.push(event.object);
      }
    }
    if ('delete' === event.label) {
      if (event.object.status) {
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1)
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1)
      }
    }
    if ('label' === event.label) {
      if (event.object.status) {
        this.$todosdone.forEach((toDo: ToDo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      } else {
        this.$todos.forEach((toDo: ToDo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      }
    }
  }
}
