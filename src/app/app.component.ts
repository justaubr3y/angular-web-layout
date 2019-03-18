import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web-layout';

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
  //  this.pageScrollService.scroll({
  //    document: this.document,
  //    scrollTarget: 'secondfold',
  //  });
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
