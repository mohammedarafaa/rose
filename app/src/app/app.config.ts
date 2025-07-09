import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { apiBaseUrl } from './core/utilities/api.baseurl';
import { CategotyRepo } from './feature/category/repo/category.repo';
import { CategoryService } from './feature/category/services/category.service';
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: apiBaseUrl,
      useValue: 'https://flower.elevateegy.com/api/v1/',
    },
    {
      provide: CategotyRepo,
      useClass:CategoryService
    },
    provideAnimationsAsync(),
    providePrimeNG(),
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
  ],
};
