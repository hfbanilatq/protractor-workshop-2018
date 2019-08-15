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

    await browser.wait(menuContentPage.isClickableTShirtMenu(), 5000);
    await menuContentPage.goToTShirtMenu();

    await browser.wait(productListPage.isClickableButtonAddToCart(), 5000);
    await productListPage.goToProductAddeModal();

    await browser.wait(productAddedModalPage.isClickableButtonCheckout(), 5000);
    await productAddedModalPage.goToSummaryPage();

    await sumaryStepPage.goToSignIn();

    await singInPage.writeEmail();
    await singInPage.writePassword();
    await singInPage.submit();

    await addressStepPage.goToShippingPage();

    await shippingStepPage.clickAcceptTerms();

    await shippingStepPage.goToPaymentPage();

    await paymentStepPage.goToBankPaymentPage();

    await bankPaymentPage.comfirmOrder();

    await expect(orderSumaryPage.getResultOrder())
      .toBe('Your order on My Store is complete.');
  });
});
