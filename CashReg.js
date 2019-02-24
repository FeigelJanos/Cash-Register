function checkCashRegister(price, cash, cid) {
  //Crate an empty object for the answer
  let change={status:"", change:[]};
  //Create a currency table array for the denominations
  const currencyTable=[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], 
                       ["DOLLAR", 1], ["FIVE", 5], ["TEN", 10],	["TWENTY", 20],	["ONE HUNDRED", 100]];
  
  let overpay=cash-price;
  
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
