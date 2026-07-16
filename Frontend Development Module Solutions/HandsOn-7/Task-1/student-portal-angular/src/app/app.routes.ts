import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';

export const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'courses', component: CourseListComponent },
  { path: '**', redirectTo: '' }
];
