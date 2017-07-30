import { MySpotifyPage } from './app.po';

describe('my-spotify App', () => {
  let page: MySpotifyPage;

  beforeEach(() => {
    page = new MySpotifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
