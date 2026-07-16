import { createSlice } from '@reduxjs/toolkit';

// Step 87: Create enrollmentSlice using createSlice
const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState: {
    enrolledCourses: []
  },
  reducers: {
    enroll: (state, action) => {
      const course = action.payload;
      const alreadyEnrolled = state.enrolledCourses.some((c) => c.id === course.id);
      if (!alreadyEnrolled) {
        // Redux Toolkit uses Immer under the hood, allowing safe mutative state changes
        state.enrolledCourses.push(course);
      }
    },
    unenroll: (state, action) => {
      const courseId = action.payload;
      state.enrolledCourses = state.enrolledCourses.filter((c) => c.id !== courseId);
    }
  }
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
