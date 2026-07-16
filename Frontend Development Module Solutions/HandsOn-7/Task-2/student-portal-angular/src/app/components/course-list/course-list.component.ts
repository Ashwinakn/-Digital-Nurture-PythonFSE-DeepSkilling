// Step 91: CourseListComponent
// Step 93: Render course cards using *ngFor
// Step 94: Two-way binding with [(ngModel)] for search
// Step 95: *ngIf to show 'No courses found'
// Steps 98-100: Inject CourseService, subscribe in ngOnInit(), add loading boolean

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseService } from '../../services/course.service';
import { Course } from '../../data/courses';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CourseCardComponent],
  template: `
    <div class="page">
      <h2 class="page-title">Available Courses</h2>

      <!-- Step 94: Two-way binding with [(ngModel)] -->
      <div class="search-container">
        <input
          type="text"
          placeholder="Search courses..."
          class="search-input"
          [(ngModel)]="searchTerm"
          aria-label="Search courses"
        />
      </div>

      <!-- Step 100: *ngIf to show spinner while loading -->
      <div *ngIf="loading" class="loading-container">
        <div class="spinner"></div>
        <p>Loading courses...</p>
      </div>

      <!-- Step 93: Render course cards using *ngFor -->
      <div *ngIf="!loading" class="course-grid">
        <!-- Step 93: app-course-card with @Input bindings -->
        <app-course-card
          *ngFor="let course of filteredCourses"
          [name]="course.name"
          [code]="course.code"
          [credits]="course.credits"
          [grade]="course.grade"
        ></app-course-card>

        <!-- Step 95: *ngIf to show 'No courses found' when filtered list is empty -->
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
    .loading-container { display: flex; flex-direction: column; align-items: center; padding: 3rem; gap: 1rem; }
    .spinner {
      width: 40px; height: 40px;
      border: 4px solid #e0e0e0; border-top-color: #3f51b5;
      border-radius: 50%; animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .no-results { color: #888; font-style: italic; text-align: center; padding: 2rem; }
  `]
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  searchTerm: string = '';
  // Step 100: loading boolean — set to true before call and false in subscription callback
  loading: boolean = true;

  // Step 98: Inject CourseService via the constructor
  constructor(private courseService: CourseService) {}

  // Step 99: In ngOnInit(), subscribe to courseService.getCourses()
  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.loading = false;  // Step 100: set loading false in subscription callback
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  // Computed filtered courses (getter)
  get filteredCourses(): Course[] {
    return this.courses.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
