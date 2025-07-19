let accountpin = 1234;
let accountbalance = 5000;

let enter = parseInt(prompt("Enter your account pin : "));

if (enter === accountpin) {
  console.log(`Access Granted`);
  console.log(`Welcome to your ATM`);
  console.log(`1. Check Balance`);
  console.log(`2. Withdrawal Amount`);
  console.log(`3. Deposit Amount`);

  let choice = parseInt(prompt("Enter your choice : "));

  if (choice === 1) {
    console.log("Your account balance is : ", accountbalance);
  } else if (choice === 2) {
    let withdrawal = parseInt(prompt("Enter the amount to withdraw : "));
    if (withdrawal <= accountbalance) {
      accountbalance -= withdrawal;
      console.log("Withdrawal successful.");
      console.log("Remaining balance: ", accountbalance);
    } else {
      console.log(`Insufficient Balance`);
    }
  } else if (choice === 3) {
    let deposit = parseInt(prompt("Enter amount to deposit : "));
    accountbalance += deposit;
    console.log("Deposit successful.");
    console.log("Updated balance: ", accountbalance);
  } else {
    console.log(`Invalid Choice`);
  }
} else {
  console.log("Incorrect PIN. Access Denied.");
}
