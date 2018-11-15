import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public getCourses(): string[]{
      return ["Course1", "Course2", "Course3"];
  }


  constructor() { }
}
