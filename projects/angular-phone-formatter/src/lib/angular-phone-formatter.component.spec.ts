import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPhoneFormatterComponent } from './angular-phone-formatter.component';

describe('AngularPhoneFormatterComponent', () => {
  let component: AngularPhoneFormatterComponent;
  let fixture: ComponentFixture<AngularPhoneFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPhoneFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPhoneFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
