export interface PaymentDriver{
    
    pay(amount: number): any;

    verify(reference: string): any;
}

