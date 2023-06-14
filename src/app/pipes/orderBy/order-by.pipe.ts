import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(courses: any[], property: string): any[] {
    if (!courses || courses.length === 0) {
      return [];
    }

    return courses.sort((a, b) => {
      const dateA = new Date(a[property]);
      const dateB = new Date(b[property]);

      if (dateA < dateB) {
        return -1;
      } else if (dateA > dateB) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
