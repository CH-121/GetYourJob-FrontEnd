import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementDescComponent } from './announcement-desc.component';

describe('AnnouncementDescComponent', () => {
  let component: AnnouncementDescComponent;
  let fixture: ComponentFixture<AnnouncementDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
