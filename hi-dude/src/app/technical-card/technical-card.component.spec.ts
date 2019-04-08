import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCardComponent } from './technical-card.component';

describe('TechnicalCardComponent', () => {
  let component: TechnicalCardComponent;
  let fixture: ComponentFixture<TechnicalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
