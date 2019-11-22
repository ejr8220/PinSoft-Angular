import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSiNoComponent } from './modal-si-no.component';

describe('ModalSiNoComponent', () => {
  let component: ModalSiNoComponent;
  let fixture: ComponentFixture<ModalSiNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSiNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSiNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
