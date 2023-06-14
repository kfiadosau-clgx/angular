import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    courses: any[],
    searchTerm: string,
    shouldFilterData: boolean
  ): any[] {
    if (!courses || courses.length === 0 || !searchTerm || !shouldFilterData) {
      return courses;
    }

    searchTerm = searchTerm.toLowerCase();

    return courses.filter((course) => {
      // Customize this condition as per your requirement
      return course.title.toLowerCase().includes(searchTerm);
    });
  }
}
