// This class will contain and process a bank account

class BankAccount {
    /*
    * This class will contain account information with a focus on processing deposits
    * and withdrawls from the account
    * Created 11/9/2022     Unit-12 JavaScript Object-Oriented Programming
    * Used: Assignment 12-1 Create BankAccount Class
    * Author: Jeff Gullion, Bobby Parsons
    */

    // Class Properties
    acctName = "";
    acctNumber = 0;
    acctBalance = 0;

    // Constructor
    constructor(inBalance) {
        this.acctBalance = inBalance; // assigns a starting value to the acctBalance
    }

    // Setters/Getters
    setAcctNumber(inAcctNumber){
        this.acctNumber = inAcctNumber;
    }

    getAcctNumber() {
        return this.acctNumber;
    }

    setAcctName(inAcctName){
        this.acctName = inAcctName;
    }

    getAcctName() {
        return this.acctName;
    }

    setAcctBalance(inAcctBalance){
        this.acctBalance = inAcctBalance;
    }

    getAcctBalance() {
        return this.acctBalance;
    }

    // Processing methods
    depositFunds(inAmount){
        // the input amount will be added to the account balance
        // validate the inAmount
        this.acctBalance += inAmount;
    }

    withdrawFunds(inAmount){
        // the input amount will be removed from the account balance
        // validate the inAmount
        this.acctBalance -= inAmount;
    }

    acctInfo(){
        return [this.acctName, this.acctNumber, this.acctBalance];
    }
}
