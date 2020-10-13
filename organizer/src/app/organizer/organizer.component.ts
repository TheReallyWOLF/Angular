import { Component, OnInit } from '@angular/core';
import { DateService } from "../shared/date.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Task, TaskService} from "../shared/task.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  form: FormGroup
  tasks: Task[] = []

  constructor(public dateService: DateService,
              private tasksServise: TaskService) { }

  ngOnInit() {
    this.dateService.date.pipe(
       switchMap(value => this.tasksServise.load(value)))
      .subscribe(tasks => {
        this.tasks = tasks
      });

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }

  submit(){
    const {title} = this.form.value;
    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    }

    this.tasksServise.create(task).subscribe(task => {
      this.tasks.push(task);
      console.log('New task', task);
      this.form.reset();
    },err => console.error(err));
    console.log(title)
  };

  remove(task: Task){
    this.tasksServise.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    }, error => console.error(error))
  }

}
