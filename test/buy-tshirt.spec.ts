import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage, ProductListPage,
  OrderSumaryPage, ProductAddedModalPage, SignInPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, SummaryStepPage
 } from '../src/page';

describe('Buy a t-shirt', async () => {
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
  describe('Open My Store page', async () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
    });
    describe('T-shit purchase proccess', async () => {
      beforeEach(async () => {
        await menuContentPage.goToTShirtMenu();
        await productListPage.selectProduct('Faded Short Sleeve T-shirts');
        await productAddedModalPage.goToSummaryPage();
        await sumaryStepPage.goToSignIn();
      });
      describe('Login in application', async () => {
        beforeEach(async () => {
          await singInPage.writeEmail();
          await singInPage.writePassword();
          await singInPage.submit();
        });
        describe('Select address default', async () => {
          beforeEach(async () => {
            await addressStepPage.goToShippingPage();
            await shippingStepPage.clickAcceptTerms();
            await shippingStepPage.goToPaymentPage();
          });
          describe('Bank payment', async () => {
            beforeEach(async () => {
              await paymentStepPage.goToBankPaymentPage();
              await bankPaymentPage.comfirmOrder();
            });
            it('then should be bought a t-shirt', async () => {
              await expect(orderSumaryPage.getResultOrder())
                .toBe('Your order on My Store is complete.');
            });
          });
        });
      });
    });
  });
});
