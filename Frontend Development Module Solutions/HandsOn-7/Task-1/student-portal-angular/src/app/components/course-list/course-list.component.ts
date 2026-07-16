import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course, COURSES } from '../../data/courses';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CourseCardComponent],
  template: `
    <div class="page">
      <h2 class="page-title">Available Courses</h2>

      <div class="search-container">
        <input
          type="text"
          placeholder="Search courses..."
          class="search-input"
          [(ngModel)]="searchTerm"
          aria-label="Search courses"
        />
      </div>

      <div class="course-grid">
        <app-course-card
          *ngFor="let course of filteredCourses"
          [name]="course.name"
          [code]="course.code"
          [credits]="course.credits"
          [grade]="course.grade"
        ></app-course-card>

        <p *ngIf="filteredCourses.length === 0" class="no-results">
          No courses found for "{{ searchTerm }}"
        </p>
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 2rem; max-width: 1100px; margin: 0 auto; }
    .page-title { color: #1a237e; font-size: 1.5rem; margin-bottom: 1.5rem; }
    .search-container { margin-bottom: 1.5rem; }
    .search-input {
      width: 100%; padding: 0.75rem 1rem; font-size: 1rem;
      border: 2px solid #ddd; border-radius: 8px; outline: none;
    }
    .search-input:focus { border-color: #3f51b5; }
    .course-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .no-results { color: #888; font-style: italic; text-align: center; padding: 2rem; }
  `]
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    // Task-1 uses local data
    this.courses = COURSES;
  }

  get filteredCourses(): Course[] {
    return this.courses.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
