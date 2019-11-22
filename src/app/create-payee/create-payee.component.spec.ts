import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayeeComponent } from './create-payee.component';

describe('CreatePayeeComponent', () => {
  let component: CreatePayeeComponent;
  let fixture: ComponentFixture<CreatePayeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePayeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
