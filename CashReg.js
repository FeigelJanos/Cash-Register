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

        /*for(let i=registerContent[nom][1]; i>0; i= i-currentDenom){
          console.log(i)
          if(changeAnswer.change[counter][0]==currencyTable[nom][0]){
            changeAnswer.change[0][1]+=currentDenom;
          }
          else{
            changeAnswer.change.push(currencyTable[nom]);
            
          }
        changeAnswer.change.push(currencyTable[nom]);
        */
        }
        counter++; 
      }
   console.log(changeAnswer.change);
  return changeAnswer;
}
