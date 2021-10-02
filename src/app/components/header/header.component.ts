import { Router } from '@angular/router';
import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask!: boolean ;
  subscription!: Subscription;

  constructor(private uiService: UiService,
              private router: Router) {
    this.subscription = this.uiService.onToggle()
    .subscribe((value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  // tslint:disable-next-line:typedef
  hasRoute(route: string){
    return this.router.url === route;
  }
}
