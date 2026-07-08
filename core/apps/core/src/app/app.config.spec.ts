import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { appConfig } from './app.config';
import { appRoutes } from './app.routes';

describe('appConfig', () => {
  it('should be defined', () => {
    expect(appConfig).toBeDefined();
  });

  it('should expose a non-empty providers array', () => {
    expect(Array.isArray(appConfig.providers)).toBe(true);
    expect(appConfig.providers.length).toBeGreaterThan(0);
  });

  it('should configure the Router with the application routes', () => {
    TestBed.configureTestingModule({
      providers: [...appConfig.providers],
    });

    const router = TestBed.inject(Router);
    expect(router).toBeTruthy();
    expect(router.config).toEqual(appRoutes);
  });
});