import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableScrollYComponent } from './table-scroll-y.component';

describe('TableScrollYComponent', () => {
  let component: TableScrollYComponent;
  let fixture: ComponentFixture<TableScrollYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableScrollYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableScrollYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
