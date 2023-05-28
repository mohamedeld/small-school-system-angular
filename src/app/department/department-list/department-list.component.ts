import { Component } from '@angular/core';
import { IDepartment } from 'src/app/interfaces/department.interfaces';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent {
  deptList: IDepartment[] = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'CS' },
    { id: 3, name: 'IS' },
  ];
  newDept: IDepartment = { id: 0, name: '' };
  selectedDept: IDepartment = { id: 0, name: '' };
  showSpecificDept(id: number) {
    for (let i = 0; i < this.deptList.length; i++) {
      if (this.deptList[i].id === id) {
        this.selectedDept = this.deptList[i];
        break;
      }
    }
  }
  add() {
    const existingId = this.deptList.find((dept) => dept.id == this.newDept.id);
    if (existingId) {
      alert(`cant insert this id please insert another id`);
      return;
    }
    const newDept: IDepartment = {
      id: this.newDept.id,
      name: this.newDept.name,
    };
    this.deptList.push(newDept);
  }
  updateDept(id: number) {
    for (let i = 0; i < this.deptList.length; i++) {
      if (this.deptList[i].id === id) {
        this.newDept.id = this.deptList[i].id;
        this.newDept.name = this.deptList[i].name;
      }
    }
  }
  saveDept(id: number) {
    for (let i = 0; i < this.deptList.length; i++) {
      if (this.deptList[i].id === id) {
        this.deptList[i].id = this.newDept.id;
        this.deptList[i].name = this.newDept.name;
      }
    }
  }

  deleteDept(id: number) {
    for (let i = 0; i < this.deptList.length; i++) {
      if (this.deptList[i].id === id) {
        let confirmDelete = confirm(
          `you want to delete ${this.deptList[i].name}`
        );
        if (confirmDelete === true) {
          this.deptList.splice(i, 1);
        } else {
          return;
        }
      }
    }
  }
}
