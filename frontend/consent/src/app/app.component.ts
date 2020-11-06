import {Component, OnInit} from '@angular/core';
import {navigation} from "./layouts/navbar/navigation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'consent';
  mainNavigation: any []

  ngOnInit(): void {
    this.mainNavigation = navigation;
  }
}
