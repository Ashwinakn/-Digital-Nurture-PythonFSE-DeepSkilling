// Step 91: CourseCard component
// Step 92: @Input() properties: name, code, credits, grade
// Render them in the template using interpolation {{ }}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  template: `
    <div class="course-card">
      <h3>{{ name }}</h3>
      <p>Code: {{ code }}</p>
      <p>Credits: {{ credits }}</p>
      <p>Grade: {{ grade }}</p>
    </div>
  `,
  styles: [`
    .course-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      transition: transform 0.2s;
    }
    .course-card:hover { transform: translateY(-3px); }
    h3 { color: #1a237e; margin-bottom: 0.5rem; font-size: 1rem; }
    p { color: #666; font-size: 0.9rem; margin-bottom: 0.25rem; }
  `]
})
export class CourseCardComponent {
  // Step 92: @Input() properties declared here
  @Input() name: string = '';
  @Input() code: string = '';
  @Input() credits: number = 0;
  @Input() grade: string = '';
}
