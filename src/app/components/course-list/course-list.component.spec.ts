import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import {
  Course,
  CourseItemComponent,
} from '../course-item/course-item.component';
import { By } from '@angular/platform-browser';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the component title', () => {
    const titleElement = fixture.nativeElement.querySelector('.list__title');
    expect(titleElement.textContent).toContain('Courses');
  });

  it('should render the course items', () => {
    const courseItems =
      fixture.nativeElement.querySelectorAll('app-course-item');

    expect(courseItems.length).toBe(component.courses.length);
  });

  it('should render the load more button', () => {
    const loadMoreButton = fixture.nativeElement.querySelector(
      '.list__loadMore span'
    );
    expect(loadMoreButton.textContent).toContain('Load More');
  });

  it('should call onDelete method with the course id when courseDelete event is triggered', () => {
    spyOn(component, 'onDelete');
    const courseId = 1;

    fixture.detectChanges();
    const courseItemDebugElement = fixture.debugElement.query(
      By.directive(CourseItemComponent)
    );
    const courseItemComponent = courseItemDebugElement.componentInstance;

    console.log('courseItemComponent', courseItemComponent);

    // Trigger the courseDelete event on the course item
    courseItemComponent.courseDelete.emit(courseId);

    expect(component.onDelete).toHaveBeenCalledWith(courseId);
  });
});
