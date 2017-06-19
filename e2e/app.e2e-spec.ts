import { AngularDashPage } from './app.po';

describe('angular-dash App', () => {
  let page: AngularDashPage;

  beforeEach(() => {
    page = new AngularDashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
