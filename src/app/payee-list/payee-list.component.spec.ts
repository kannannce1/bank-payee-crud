import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeListComponent } from './payee-list.component';

describe('PayeeListComponent', () => {
  let component: PayeeListComponent;
  let fixture: ComponentFixture<PayeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
