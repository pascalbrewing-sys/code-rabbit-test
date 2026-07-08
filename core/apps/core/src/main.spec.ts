import { vi } from 'vitest';

describe('main.ts bootstrap', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  afterEach(() => {
    vi.doUnmock('@angular/platform-browser');
    vi.restoreAllMocks();
  });

  it('bootstraps the App component with the appConfig providers', async () => {
    const bootstrapApplication = vi.fn().mockResolvedValue(undefined);
    vi.doMock('@angular/platform-browser', () => ({ bootstrapApplication }));

    const { App } = await import('./app/app');
    const { appConfig } = await import('./app/app.config');

    await import('./main');

    expect(bootstrapApplication).toHaveBeenCalledTimes(1);
    expect(bootstrapApplication).toHaveBeenCalledWith(App, appConfig);
  });

  it('logs an error to the console when bootstrapping fails', async () => {
    const bootstrapError = new Error('bootstrap failed');
    const bootstrapApplication = vi.fn().mockRejectedValue(bootstrapError);
    vi.doMock('@angular/platform-browser', () => ({ bootstrapApplication }));
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);

    await import('./main');
    // Flush the microtask queue so the promise rejection is handled.
    await Promise.resolve();
    await Promise.resolve();

    expect(consoleErrorSpy).toHaveBeenCalledWith(bootstrapError);
  });
});