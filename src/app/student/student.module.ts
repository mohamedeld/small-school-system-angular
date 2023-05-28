import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentDetailComponent, StudentListComponent],
  imports: [CommonModule, FormsModule],
  exports: [StudentDetailComponent, StudentListComponent],
})
export class StudentModule {}
