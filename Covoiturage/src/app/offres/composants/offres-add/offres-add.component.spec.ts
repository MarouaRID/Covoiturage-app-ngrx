import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresAddComponent } from './offres-add.component';

describe('OffresAddComponent', () => {
  let component: OffresAddComponent;
  let fixture: ComponentFixture<OffresAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
});
