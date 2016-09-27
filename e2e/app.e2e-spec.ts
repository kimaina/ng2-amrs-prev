import { Ng2AmrsPage } from './app.po';

describe('ng2-amrs App', function() {
  let page: Ng2AmrsPage;

  beforeEach(() => {
    page = new Ng2AmrsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
