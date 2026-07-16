// Step 103: StudentProfileComponent with ReactiveFormsModule
// Step 103: Build a FormGroup with FormControl fields: name (required), email (required + email validator), semester (required, min: 1, max: 8)
// Step 104: Bind form to template using [formGroup] and formControlName
// Step 105: Display validation error messages
// Step 106: Submit button disabled until form is valid

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="page">
      <h2 class="page-title">Student Profile</h2>

      <div class="profile-card">
        <!-- Step 104: Bind form to template using [formGroup] -->
        <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="profile-form">

          <div class="form-group">
            <label for="name">Full Name</label>
            <!-- Step 104: formControlName on each input -->
            <input id="name" type="text" formControlName="name" placeholder="Enter your full name" />
            <!-- Step 105: Display validation error messages -->
            <span class="error-hint" *ngIf="profileForm.get('name')?.touched && profileForm.get('name')?.invalid">
              Name is required
            </span>
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" type="email" formControlName="email" placeholder="Enter your email" />
            <span class="error-hint" *ngIf="profileForm.get('email')?.touched && profileForm.get('email')?.hasError('required')">
              Email is required
            </span>
            <span class="error-hint" *ngIf="profileForm.get('email')?.touched && profileForm.get('email')?.hasError('email')">
              Enter a valid email
            </span>
          </div>

          <div class="form-group">
            <label for="semester">Semester (1-8)</label>
            <input id="semester" type="number" formControlName="semester" placeholder="e.g. 4" min="1" max="8" />
            <span class="error-hint" *ngIf="profileForm.get('semester')?.touched && profileForm.get('semester')?.invalid">
              Semester must be between 1 and 8
            </span>
          </div>

          <!-- Step 106: Submit button disabled until form is valid: [disabled]="profileForm.invalid" -->
          <button type="submit" [disabled]="profileForm.invalid" class="btn-submit">
            Save Profile
          </button>
        </form>

        <div *ngIf="submitted" class="success-message">
          ✓ Profile saved successfully!
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 2rem; max-width: 500px; margin: 0 auto; }
    .page-title { color: #1a237e; font-size: 1.5rem; margin-bottom: 1.5rem; }
    .profile-card { background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .profile-form { display: flex; flex-direction: column; gap: 1.2rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
    .form-group label { font-size: 0.9rem; font-weight: 600; color: #555; }
    .form-group input {
      padding: 0.65rem 0.9rem; border: 2px solid #ddd;
      border-radius: 8px; font-size: 0.95rem; outline: none; transition: border-color 0.2s;
    }
    .form-group input:focus { border-color: #3f51b5; }
    .form-group input.ng-invalid.ng-touched { border-color: #ef5350; }
    .error-hint { color: #ef5350; font-size: 0.8rem; margin-top: 0.2rem; }
    .btn-submit {
      padding: 0.7rem 1.5rem; background: #3f51b5; color: white;
      border: none; border-radius: 8px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: background 0.2s;
    }
    .btn-submit:hover:not(:disabled) { background: #303f9f; }
    .btn-submit:disabled { background: #aaa; cursor: not-allowed; }
    .success-message {
      margin-top: 1rem; background: #e8f5e9; border: 1px solid #81c784;
      color: #2e7d32; padding: 1rem; border-radius: 8px; font-weight: 600;
    }
  `]
})
export class StudentProfileComponent {
  submitted = false;

  // Step 103: Build a FormGroup with FormControl fields
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    semester: new FormControl('', [Validators.required, Validators.min(1), Validators.max(8)])
  });

  // Step 106: On submit, log the form value
  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Profile form value:', this.profileForm.value);
      this.submitted = true;
      setTimeout(() => this.submitted = false, 3000);
    }
  }
}
