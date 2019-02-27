import { UsersDashboardModule } from './users-dashboard.module';

describe('UsersDashboardModule', () => {
  let usersDashboardModule: UsersDashboardModule;

  beforeEach(() => {
    usersDashboardModule = new UsersDashboardModule();
  });

  it('should create an instance', () => {
    expect(usersDashboardModule).toBeTruthy();
  });
});
