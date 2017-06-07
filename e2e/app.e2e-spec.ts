import { BackendPage } from './app.po';

describe('backend App', () => {
  let page: BackendPage;

  beforeEach(() => {
    page = new BackendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
