import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition()]
})
export class AppComponent {
  title = 'angular-web-layout';

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    let element : any = document.getElementById('vid');
    if(element) element.muted = "muted";
  }

  clickEvent(event) {
    console.log(event);
  }

  doSmth(reachedTarget: boolean): void {
    if (reachedTarget) {
        console.log('Yeah, we reached our destination');
    } else {
        console.log('Ohoh, something interrupted us');
    }
}
}
