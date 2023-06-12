import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
}

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input()
  public course?: Course;

  @Output() courseDelete = new EventEmitter<string | number>();

  onDelete(value?: string | number) {
    this.courseDelete.emit(value);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnInit(): void {
    // Initialization tasks or logic can be performed here
    console.log('Component initialized');
  }
}
