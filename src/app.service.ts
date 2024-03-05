import { Injectable } from '@nestjs/common';
import { PaymentGatewayManager } from './integrations/payment/payment-gateway.manager';
  
@Injectable()
export class AppService {
  
  pay() {
  
    let paymentGatewayManager = new PaymentGatewayManager(); 
    
    // Pay using paystack
   return  paymentGatewayManager.driver('flutterwave').pay(2000);

    // Pay using paystack
    paymentGatewayManager.driver('flutterwave').pay(3000);

    // Verify using Paystack
    paymentGatewayManager.driver('paystack').verify('trnx_22333366666');

    // Verify using Flutterwave 
    paymentGatewayManager.driver('flutterwave').verify('trnx_12333366666');

  }
  
}