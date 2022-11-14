import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkinghoursComponent } from './edit-workinghours.component';

describe('EditWorkinghoursComponent', () => {
  let component: EditWorkinghoursComponent;
  let fixture: ComponentFixture<EditWorkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWorkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWorkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
