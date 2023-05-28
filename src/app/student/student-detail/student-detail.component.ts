import { Component, Input } from '@angular/core';
import { Student } from 'src/app/classes/Student.classes';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent {
  @Input() studentSelected: Student = new Student(0, '', 0);
}
