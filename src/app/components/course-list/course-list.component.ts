import { Component, OnInit } from '@angular/core';
import { Course } from '../course-item/course-item.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  public courses: Course[] = [];

  public onDelete(id?: string | number) {
    console.log(id);
  }

  ngOnInit(): void {
    // Initialization tasks or logic can be performed here
    console.log('Component initialized');

    this.courses = [
      {
        id: 1,
        title: 'Introduction to Angular',
        creationDate: '2023-05-01',
        duration: 120,
        description: 'Learn the basics of Angular framework.',
      },
      {
        id: 2,
        title: 'JavaScript Fundamentals',
        creationDate: '2023-04-15',
        duration: 90,
        description: 'A comprehensive course on JavaScript programming.',
      },
      {
        id: 3,
        title: 'Advanced CSS Techniques',
        creationDate: '2023-05-10',
        duration: 75,
        description: 'Explore advanced CSS concepts and techniques.',
      },
      {
        id: 4,
        title: 'React for Beginners',
        creationDate: '2023-04-20',
        duration: 150,
        description:
          "A beginner's guide to building web applications with React.",
      },
      {
        id: 5,
        title: 'Database Design and Management',
        creationDate: '2023-05-05',
        duration: 180,
        description:
          'Learn the fundamentals of database design and management.',
      },
    ];
  }
}
