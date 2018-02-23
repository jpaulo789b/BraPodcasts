import { BraPodcastrPage } from './app.po';

describe('bra-podcastr App', function() {
  let page: BraPodcastrPage;

  beforeEach(() => {
    page = new BraPodcastrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
