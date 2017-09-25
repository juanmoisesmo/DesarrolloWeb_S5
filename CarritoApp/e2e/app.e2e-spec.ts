import { CarritoAppPage } from './app.po';

describe('carrito-app App', function() {
  let page: CarritoAppPage;

  beforeEach(() => {
    page = new CarritoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cart works!');
  });
});
