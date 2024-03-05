import { PaymentDriver } from "../interface/payment-driver";

export class FlutterwaveService implements PaymentDriver {

  pay(amount: number){
      // Flutterwave API call to make or initialize payment as the case may be 
      return `Payment of ${amount} made via flutterwave`;
  }

  verify(reference: string) {
      // Flutterwave API call to verify the payment  
      return `Payment verified via Flutterwave`;
  }
}

