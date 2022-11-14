import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkinghoursComponent } from './add-workinghours.component';

describe('AddWorkinghoursComponent', () => {
  let component: AddWorkinghoursComponent;
  let fixture: ComponentFixture<AddWorkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWorkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWorkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
