// Step 101: Define routes in app-routing
// { path: '', component: CourseListComponent }
// { path: 'profile', component: StudentProfileComponent }

import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

export const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'profile', component: StudentProfileComponent },
  { path: '**', redirectTo: '' }
];
