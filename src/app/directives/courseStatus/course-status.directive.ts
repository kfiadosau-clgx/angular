import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[courseStatus]',
})
export class CourseStatusDirective implements OnInit {
  @Input('courseStatus') creationDate: string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.updateCourseStatus();
  }

  private updateCourseStatus() {
    const currentDate = new Date();
    const [year, month, day] = this.creationDate.split('-');
    const creationDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );

    // Calculate the date difference in days
    const daysDifference = Math.floor(
      (currentDate.getTime() - creationDate.getTime()) / (1000 * 3600 * 24)
    );

    if (daysDifference >= 0 && daysDifference <= 14) {
      // Fresh course
      this.elementRef.nativeElement.style.border = '2px solid green';
    } else if (creationDate > currentDate) {
      // Upcoming course
      this.elementRef.nativeElement.style.border = '2px solid blue';
    }
  }
}
