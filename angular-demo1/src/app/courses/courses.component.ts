import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  title = "Courses";
  courses = ["Course1", "Course2", "Course3"]
   
  constructor() {
    
   
    
    
  }

  ngOnInit() {
  }

}
