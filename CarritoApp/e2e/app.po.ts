import { browser, element, by } from 'protractor';

export class CarritoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cart-root h1')).getText();
  }
}
