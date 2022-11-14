import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkinghoursListComponent } from './workinghours-list.component';

describe('WorkinghoursListComponent', () => {
  let component: WorkinghoursListComponent;
  let fixture: ComponentFixture<WorkinghoursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkinghoursListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkinghoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
