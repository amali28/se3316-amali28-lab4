import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service'
import {AutoGrowDirective} from '../auto-grow.directive'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  
  title = "Courses";
  courses;
  courseInput;
  addCourse;
   
  constructor(private courseService: CoursesService) {
    this.courses = courseService.getCourses();
    
  }
  
  onClick(textInput: string){
    this.addCourse = this.courseService.addCourse(textInput);
  }

  ngOnInit() {
    providers: [CoursesService];
  }

}
