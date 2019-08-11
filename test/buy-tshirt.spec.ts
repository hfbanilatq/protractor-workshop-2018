import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage, ProductListPage,
  OrderSumaryPage, ProductAddedModalPage, SingInPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, SumaryStepPage
 } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage;
  const productListPage: ProductListPage = new ProductListPage;
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage;
  const sumaryStepPage: SumaryStepPage = new SumaryStepPage;
  const singInPage: SingInPage = new SingInPage;
  const addressStepPage: AddressStepPage = new AddressStepPage;
  const shippingStepPage: ShippingStepPage = new ShippingStepPage;
  const paymentStepPage: PaymentStepPage = new PaymentStepPage;
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage;
  const orderSumaryPage: OrderSumaryPage = new OrderSumaryPage;
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToProductAddeModal();
    await(browser.sleep(3000));
    await productAddedModalPage.goToSumaryPage();
    await(browser.sleep(3000));
    await sumaryStepPage.goToSingIn();
    await(browser.sleep(3000));
    await singInPage.writeEmail();
    await singInPage.writePassword();
    await singInPage.submit();
    await(browser.sleep(3000));

    await addressStepPage.goToShippingPage();
    await(browser.sleep(3000));

    await shippingStepPage.clickAcceptTerms();
    await(browser.sleep(3000));

    await shippingStepPage.goToPaymentPage();
    await(browser.sleep(3000));
    await paymentStepPage.goToBankPaymentPage();
    await(browser.sleep(3000));
    await bankPaymentPage.comfirmOrder();
    await(browser.sleep(3000));

    await expect(orderSumaryPage.getResultOrder())
      .toBe('Your order on My Store is complete.');
  });
});
