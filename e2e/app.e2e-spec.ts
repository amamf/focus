import { FocusPage } from './app.po';

describe('focus App', () => {
  let page: FocusPage;

  beforeEach(() => {
    page = new FocusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
