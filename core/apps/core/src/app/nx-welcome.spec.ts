import { TestBed } from '@angular/core/testing';
import { NxWelcome } from './nx-welcome';

describe('NxWelcome', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxWelcome],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(NxWelcome);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the welcome heading with the app name', async () => {
    const fixture = TestBed.createComponent(NxWelcome);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome core'
    );
  });

  it('should render a link to the Nx getting started documentation', async () => {
    const fixture = TestBed.createComponent(NxWelcome);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const docLink = compiled.querySelector(
      'a[href*="nx.dev/getting-started/intro"]'
    );
    expect(docLink).toBeTruthy();
    expect(docLink?.getAttribute('target')).toEqual('_blank');
  });

  it('should render the Nx Cloud "nx connect" command', async () => {
    const fixture = TestBed.createComponent(NxWelcome);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#nx-cloud pre')?.textContent).toContain(
      'nx connect'
    );
  });

  it('should render the next-step commands for build, test and lint', async () => {
    const fixture = TestBed.createComponent(NxWelcome);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const commandsText = compiled.querySelector('#commands')?.textContent ?? '';
    expect(commandsText).toContain('nx build');
    expect(commandsText).toContain('nx test');
    expect(commandsText).toContain('nx lint');
    expect(commandsText).toContain('nx run-many -t build test lint');
  });

  it('should render exactly one top-level heading', async () => {
    const fixture = TestBed.createComponent(NxWelcome);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('#welcome h1').length).toEqual(1);
  });
});