import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewauthsComponent } from './newauths.component';

describe('NewauthsComponent', () => {
  let component: NewauthsComponent;
  let fixture: ComponentFixture<NewauthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewauthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewauthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
