import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: 'Test Course',
      creationDate: '2023-01-01',
      duration: 60,
      description: 'Test description',
    };
    fixture.detectChanges();
  });

  it('should emit courseDelete event with value when onDelete is called', () => {
    spyOn(component.courseDelete, 'emit');
    const value = 123;
    component.onDelete(value);
    expect(component.courseDelete.emit).toHaveBeenCalledWith(value);
  });

  it('should emit courseDelete event without value when onDelete is called without a parameter', () => {
    spyOn(component.courseDelete, 'emit');
    component.onDelete();
    expect(component.courseDelete.emit).toHaveBeenCalledWith(undefined);
  });

  it('should render the course title', () => {
    const titleElement = fixture.nativeElement.querySelector(
      '.course__top_wrapper div'
    );
    expect(titleElement.textContent).toContain(component.course!.title);
  });

  it('should render the course duration', () => {
    const durationElement = fixture.nativeElement.querySelector(
      '.course__top_info div:first-child'
    );
    expect(durationElement.textContent).toContain(component.course!.duration);
  });

  it('should render the course creation date', () => {
    const creationDateElement = fixture.nativeElement.querySelector(
      '.course__top_info div:last-child'
    );
    expect(creationDateElement.textContent).toContain(
      component.course!.creationDate
    );
  });

  it('should render the course description', () => {
    const descriptionElement = fixture.nativeElement.querySelector(
      '.course__bottom_wrapper div:first-child'
    );
    expect(descriptionElement.textContent).toContain(
      component.course!.description
    );
  });

  it('should call onDelete method with course ID when delete button is clicked', () => {
    spyOn(component, 'onDelete');
    const deleteButton =
      fixture.nativeElement.querySelector('button:last-child');
    deleteButton.click();
    expect(component.onDelete).toHaveBeenCalledWith(component.course!.id);
  });
});
