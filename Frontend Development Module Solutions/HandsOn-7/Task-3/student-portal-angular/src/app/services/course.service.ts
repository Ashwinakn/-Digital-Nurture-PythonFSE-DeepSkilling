// Step 96: Generate a service: CourseService
// In CourseService, inject HttpClient in the constructor
// and add a method getCourses() that returns an Observable

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Course, COURSES } from '../data/courses';

@Injectable({
  providedIn: 'root'  // Singleton — one instance shared across the whole app
})
export class CourseService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

  // Step 96: Inject HttpClient in the constructor
  constructor(private http: HttpClient) {}

  // Step 96: getCourses() returns an Observable by calling this.http.get
  getCourses(): Observable<Course[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(posts => posts.map((post, i) => ({
        id: post.id,
        name: post.title.slice(0, 35) + '...',
        code: COURSES[i]?.code || `CS10${i + 1}`,
        credits: COURSES[i]?.credits || 3,
        grade: COURSES[i]?.grade || 'A',
      }))),
      // Step 100: Error handling - return empty array and log
      catchError(err => {
        console.error('CourseService: HTTP error', err);
        return of(COURSES); // fallback to local data
      })
    );
  }

  // Get a single course by id (from local data)
  getCourseById(id: number): Course | undefined {
    return COURSES.find(c => c.id === id);
  }
}
