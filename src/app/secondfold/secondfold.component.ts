import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-secondfold',
  templateUrl: './secondfold.component.html',
  styleUrls: ['./secondfold.component.css'],
  animations: [routerTransition()]

})
export class SecondfoldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
