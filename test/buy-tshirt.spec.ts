import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage, ProductListPage,
  OrderSumaryPage, ProductAddedModalPage, SignInPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, SummaryStepPage
 } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage;
  const productListPage: ProductListPage = new ProductListPage;
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage;
  const sumaryStepPage: SummaryStepPage = new SummaryStepPage;
  const singInPage: SignInPage = new SignInPage;
  const addressStepPage: AddressStepPage = new AddressStepPage;
  const shippingStepPage: ShippingStepPage = new ShippingStepPage;
  const paymentStepPage: PaymentStepPage = new PaymentStepPage;
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage;
  const orderSumaryPage: OrderSumaryPage = new OrderSumaryPage;

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToProductAddeModal();
    await(browser.sleep(3000));
    await productAddedModalPage.goToSummaryPage();
    await(browser.sleep(3000));
    await sumaryStepPage.goToSignIn();
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
