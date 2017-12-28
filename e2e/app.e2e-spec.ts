import { HelloGitHubPage } from './app.po';

describe('hello-git-hub App', function() {
  let page: HelloGitHubPage;

  beforeEach(() => {
    page = new HelloGitHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
