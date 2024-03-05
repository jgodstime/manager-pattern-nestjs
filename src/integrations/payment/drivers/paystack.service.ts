import { PaymentDriver } from "../interface/payment-driver";

export class PaystackService implements PaymentDriver {
    
    async pay(amount: number){
        // Paysatck API call to make or initialize payment as the case may be 
        return `Payment of ${amount} made via paystack`;
    }

    verify(reference: string) {
        // Paysatck API call to verify the payment  
        return `Payment verified via Paystack`;
    }
}

