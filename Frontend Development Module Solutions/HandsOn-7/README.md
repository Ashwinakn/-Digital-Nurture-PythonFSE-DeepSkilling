# HandsOn-7: Angular — Components, Directives, Services & Forms

## Overview
This hands-on introduces Angular 17 (standalone) to rebuild the Student Portal. It covers Angular components, directives, services, HttpClient, routing, and reactive forms.

## Topics Covered
- Angular CLI & Project Setup
- Components with `@Input()` and `@Output()`
- Built-in Directives: `*ngFor`, `*ngIf`, `[(ngModel)]`
- Services & Dependency Injection
- `HttpClient` & `Observable`
- Angular Router (`routerLink`, `<router-outlet>`)
- Reactive Forms with Validation

## Setup
```bash
npm install -g @angular/cli
ng new student-portal-angular --routing --style=css
cd student-portal-angular
ng serve
```
App runs at: http://localhost:4200

## Project Structure
```
student-portal-angular/
└── src/app/
    ├── app.component.ts        # Root component with router-outlet
    ├── app.config.ts           # Standalone app config with provideHttpClient()
    ├── app.routes.ts           # Route definitions
    ├── data/
    │   └── courses.ts          # Course interface and data
    ├── services/
    │   └── course.service.ts   # CourseService with HttpClient
    └── components/
        ├── header/             # Header with routerLink navigation
        ├── course-card/        # CourseCard with @Input() props
        ├── course-list/        # CourseList with *ngFor, *ngIf, [(ngModel)]
        └── student-profile/    # StudentProfile with Reactive Forms
```

## Tasks

### Task 1: Setup & First Angular Components ✅
**Goal:** Scaffold the Angular app and create components with data binding.

**Steps:**
- Created Angular project with `ng new student-portal-angular --routing --style=css`
- Generated `HeaderComponent` — uses `[routerLink]` and `routerLinkActive`
- Generated `CourseCardComponent` — renders `@Input()` props: name, code, credits, grade
- Generated `CourseListComponent` — renders cards with `*ngFor`, filters with `[(ngModel)]`, conditional message with `*ngIf`

**Key Directives:**
- `*ngFor="let course of filteredCourses"` — loops over courses array
- `[(ngModel)]="searchTerm"` — two-way data binding on search input (requires `FormsModule`)
- `*ngIf="filteredCourses.length === 0"` — conditional rendering

---

### Task 2: Services & HttpClient ✅
**Goal:** Create a service and fetch data with HttpClient.

**Steps:**
- Generated `CourseService` injectable with `providedIn: 'root'`
- Injected `HttpClient` in the constructor: `constructor(private http: HttpClient) {}`
- `getCourses()` returns `Observable<Course[]>` via `this.http.get()`
- Added `provideHttpClient()` in `app.config.ts`
- In `CourseListComponent.ngOnInit()`, subscribed: `this.courseService.getCourses().subscribe(data => ...)`
- Added `loading` boolean — set to `true` before call, `false` in subscriber
- Added error handling with `catchError` in the service (fallback to local data)

**Expected Outcome:** App shows a spinner, then loads and renders courses fetched from an API.

---

### Task 3: Reactive Forms ✅
**Goal:** Build a student profile form using Angular's Reactive Forms.

**Steps:**
- Imported `ReactiveFormsModule` in `StudentProfileComponent`
- Created `FormGroup` with `FormControl` fields:
  - `name` — `Validators.required`
  - `email` — `Validators.required`, `Validators.email`
  - `semester` — `Validators.required`, `min(1)`, `max(8)`
- Bound form to template using `[formGroup]="profileForm"` and `formControlName="..."`
- Displayed validation error messages with `*ngIf` and `.hasError()` / `.invalid`
- Submit button disabled with `[disabled]="profileForm.invalid"`

**Expected Outcome:** Form validates in real time. Errors appear on touched fields. Submit only activates for valid form.

## Screenshots
See the `Outputs/` folder for task screenshots.
