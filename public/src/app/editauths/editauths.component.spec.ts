import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditauthsComponent } from './editauths.component';

describe('EditauthsComponent', () => {
  let component: EditauthsComponent;
  let fixture: ComponentFixture<EditauthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditauthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditauthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
