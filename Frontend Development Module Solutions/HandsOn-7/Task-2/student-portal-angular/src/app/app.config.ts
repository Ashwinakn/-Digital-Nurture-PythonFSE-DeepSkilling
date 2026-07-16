// Step 97: Import provideHttpClient for HTTP requests (standalone Angular 17)
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Step 97: provideHttpClient() for standalone bootstrap (instead of HttpClientModule)
    provideHttpClient()
  ]
};
