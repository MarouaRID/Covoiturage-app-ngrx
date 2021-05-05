import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresSearchComponent } from './offres-search.component';

describe('OffresSearchComponent', () => {
  let component: OffresSearchComponent;
  let fixture: ComponentFixture<OffresSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
