import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
    } );
  }

  // tslint:disable-next-line:typedef
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ));
  }

  // tslint:disable-next-line:typedef
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  // tslint:disable-next-line:typedef
  addTask(task: Task) {
    console.log(task);
    // tslint:disable-next-line:no-shadowed-variable
    this.taskService.addTask(task).subscribe((task) => {
    this.tasks.push(task);
  });
}
}
