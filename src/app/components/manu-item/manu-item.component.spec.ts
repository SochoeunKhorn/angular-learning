import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuItemComponent } from './manu-item.component';

describe('ManuItemComponent', () => {
  let component: ManuItemComponent;
  let fixture: ComponentFixture<ManuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
