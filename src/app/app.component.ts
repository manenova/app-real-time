import { Component, OnInit } from '@angular/core';

declare var App:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-real-time';

  ngOnInit() {
    //Load Sidebar
    App.init();
  }
}
