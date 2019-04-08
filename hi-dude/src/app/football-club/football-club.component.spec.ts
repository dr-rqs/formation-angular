import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballClubComponent } from './football-club.component';

describe('FootballClubComponent', () => {
  let component: FootballClubComponent;
  let fixture: ComponentFixture<FootballClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
