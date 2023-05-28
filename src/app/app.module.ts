import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, StudentModule, DepartmentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
