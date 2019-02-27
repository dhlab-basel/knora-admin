import { ProjectsDashboardModule } from './projects-dashboard.module';

describe('ProjectsDashboardModule', () => {
  let projectsDashboardModule: ProjectsDashboardModule;

  beforeEach(() => {
    projectsDashboardModule = new ProjectsDashboardModule();
  });

  it('should create an instance', () => {
    expect(projectsDashboardModule).toBeTruthy();
  });
});
