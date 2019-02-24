function checkCashRegister(price, cash, cid) {
  //Crate an empty object for the answer
  let changeAnswer={status:"OPEN", change:[]};
  //Create a currency table array for the denominations
  const currencyTable=[["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], 
  ["QUARTER", 0.25], ["DOLLAR", 1], ["FIVE", 5], ["TEN", 10],	["TWENTY", 20],	
  ["ONE HUNDRED", 100]];
  
  let registerContent=[...cid]
  let overpay=cash-price;
  let nom=0;
  let all=0;
  
  
  //Add all money together into a var
  for(let i=0; i<currencyTable.length; i++){
   
    //Create a var that shows the beginning of the cange denom
    if(overpay>currencyTable[i][1]){
      nom=i;
      all+=registerContent[i][1];
    }
  }


    for(nom; nom>0; nom--){
      let counter=0;
      if(overpay==all){
        changeAnswer.status="CLOSED";
        changeAnswer.change=[...cid];
      }
      else if(overpay>0&&overpay>all){
        changeAnswer.status="INSUFFICIENT_FUNDS";
        changeAnswer.change=[];
      }
      else{
        
       let currentDenom=currencyTable[nom][1];

        for(let i=registerContent[nom][1]; i>0; i-currentDenom){
     
          if(changeAnswer.change[counter][0]==currencyTable[nom][0]){
            changeAnswer.change[0][1]+=currentDenom;
          }
          else{
            changeAnswer.change.push(currencyTable[nom]);
            
          }
        
        
        }
        counter++; 
      }
 
    }
     
  return changeAnswer;
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

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
                             ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
