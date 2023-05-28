import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { FormsModule } from '@angular/forms';
import { DepartmentListComponent } from './department-list/department-list.component';

@NgModule({
  declarations: [DepartmentDetailComponent, DepartmentListComponent],
  imports: [CommonModule, FormsModule],
  exports: [DepartmentDetailComponent, DepartmentListComponent],
})
export class DepartmentModule {}
