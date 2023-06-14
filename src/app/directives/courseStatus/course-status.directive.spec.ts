import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseStatusDirective } from './course-status.directive';

@Component({
  template: ` <div [courseStatus]="creationDate">Test Course</div> `,
})
class TestComponent {
  creationDate: string = '';
}

describe('CourseStatusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, CourseStatusDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should apply fresh course border when creation date is within 14 days', () => {
    const currentDate = new Date();
    const creationDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 7
    );

    component.creationDate = creationDate.toISOString();
    fixture.detectChanges();

    const divElement = debugElement.query(By.css('div')).nativeElement;
    expect(divElement.style.border).toBe('2px solid green');
  });

  it('should apply upcoming course border when creation date is in the future', () => {
    const currentDate = new Date();
    const creationDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 7
    );

    component.creationDate = creationDate.toISOString();
    fixture.detectChanges();

    const divElement = debugElement.query(By.css('div')).nativeElement;
    expect(divElement.style.border).toBe('2px solid blue');
  });

  it('should not apply any course border when creation date is in the past and older than 14 days', () => {
    const currentDate = new Date();
    const creationDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 21
    );

    component.creationDate = creationDate.toISOString();
    fixture.detectChanges();

    const divElement = debugElement.query(By.css('div')).nativeElement;
    expect(divElement.style.border).toBe('');
  });
});
