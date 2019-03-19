import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondfoldComponent } from './secondfold.component';

describe('SecondfoldComponent', () => {
  let component: SecondfoldComponent;
  let fixture: ComponentFixture<SecondfoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondfoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondfoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
