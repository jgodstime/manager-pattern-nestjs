import { AppManager } from "src/app.manager";
import { PaystackService } from "./drivers/paystack.service";
import { FlutterwaveService } from "./drivers/flutterwave.service";
import { Injectable } from "@nestjs/common";

Injectable()
export class PaymentGatewayManager extends AppManager{
   
    public getDefaultDriver(): string
    {
        return 'paystack';
    }

    public createPaystackDriver() {
        return new PaystackService();
    }

    public createFlutterwaveDriver() {
        return new FlutterwaveService();
    }

    // add another payment driver here. Eg paypal 
}

