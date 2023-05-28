import { Component } from '@angular/core';
import { Student } from 'src/app/classes/Student.classes';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  studentList: Student[] = [
    new Student(1, 'mohamed', 20),
    new Student(2, 'ahmed', 30),
    new Student(3, 'yousef', 22),
    new Student(4, 'hany', 35),
    new Student(5, 'wael', 32),
  ];
  newStudent: Student = new Student(0, '', 0);
  showSpecificStudent(id: number) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].id === id) {
        this.studentSelected = this.studentList[i];
        break;
      }
    }
  }
  updateSTd(id: number) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].id === id) {
        this.newStudent.id = this.studentList[i].id;
        this.newStudent.name = this.studentList[i].name;
        this.newStudent.age = this.studentList[i].age;
      }
    }
  }
  stdUpdate(id: number) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].id === id) {
        this.studentList[i].id = this.newStudent.id;
        this.studentList[i].name = this.newStudent.name;
        this.studentList[i].age = this.newStudent.age;
      }
    }
  }

  deleteStd(id: number) {
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].id === id) {
        let checkResult = confirm(
          `do you want to delete ${this.studentList[i].name} student`
        );
        if (checkResult === true) {
          this.studentList.splice(i, 1);
        } else {
          return;
        }
      }
    }
  }
  studentSelected: Student = new Student(0, '', 0);

  add() {
    const existingId = this.studentList.find(
      (std) => std.id == this.newStudent.id
    );
    if (existingId) {
      alert(`student id ${existingId.id} is found please enter new id`);
      return;
    }
    const newStudent = new Student(
      this.newStudent.id,
      this.newStudent.name,
      this.newStudent.age
    );
    this.studentList.push(newStudent);
  }
}
