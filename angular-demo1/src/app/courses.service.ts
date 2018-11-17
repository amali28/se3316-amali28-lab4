import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _coursesInSystem = [];
  
  public getCourses(): string[]{
      return this.coursesInSystem;
  }
  
  public addCourse(textInput: string) {
    
  this.coursesInSystem.push(textInput);
    
  }


  constructor() { }
}
