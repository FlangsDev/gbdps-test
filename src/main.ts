import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app-frontend/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app-frontend/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
