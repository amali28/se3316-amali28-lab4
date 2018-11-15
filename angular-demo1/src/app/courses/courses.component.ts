import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  
  title = "Courses";
  courses;
   
  constructor(courseService: CoursesService) {
    this.courses = courseService.getCourses();
    
  }

  ngOnInit() {
  }

}
