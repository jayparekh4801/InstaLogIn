import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaLogInComponent } from './insta-log-in.component';

describe('InstaLogInComponent', () => {
  let component: InstaLogInComponent;
  let fixture: ComponentFixture<InstaLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
