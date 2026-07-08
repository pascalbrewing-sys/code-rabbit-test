import { appRoutes } from './app.routes';

describe('appRoutes', () => {
  it('should be defined', () => {
    expect(appRoutes).toBeDefined();
  });

  it('should be an array', () => {
    expect(Array.isArray(appRoutes)).toBe(true);
  });

  it('should have no routes configured by default', () => {
    expect(appRoutes).toEqual([]);
    expect(appRoutes.length).toEqual(0);
  });
});