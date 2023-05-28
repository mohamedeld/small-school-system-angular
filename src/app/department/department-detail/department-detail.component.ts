import { Component, Input } from '@angular/core';
import { IDepartment } from 'src/app/interfaces/department.interfaces';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
})
export class DepartmentDetailComponent {
  @Input() selectedDept: IDepartment = { id: 0, name: '' };
}
