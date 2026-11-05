interface BankAccount {
  accountNumber: string;
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): boolean;
}

class SavingsAccount implements BankAccount {
  constructor(
    public accountNumber: string,
    public balance: number = 0
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive.");
    }
    if (amount > this.balance) {
      return false; // Insufficient funds
    }

    this.balance -= amount;
    return true;
  }
}

// Create an account and perform transactions
const account: BankAccount = new SavingsAccount("123456789", 500);

account.deposit(200);
const withdrawalSucceeded = account.withdraw(150);

console.log(`Account: ${account.accountNumber}`);
console.log(`Withdrawal successful: ${withdrawalSucceeded}`);
console.log(`Balance: $${account.balance}`);
