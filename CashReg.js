function checkCashRegister(price, cash, cid) {
    let answer={status:"", change:[]};
    let currencies=	[100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];//OK
    let revCurrencies=[0.01, 0.05,  0.1, 0.25, 1, 5, 10, 20, 100];
    let names=["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE",
     "QUARTER", "DIME", "NICKEL", "PENNY"]
    let inRegister=[]; //OK
    let inRegisterReverse=[];
    let timesChange=[];
    let overpay=cash-price;//OK
    let allChange=0;//OK
    let allGoodChange=0;//OK
    let counter=0;
    let answerElement=[];
    let revCounter=8;

    for (let i=0; i<currencies.length; i++){//OK
      
      inRegister[i]=cid[i][1];//OK
      inRegisterReverse[i]=cid[revCounter][1];
      revCounter--;
    }

    
    for(let i=0; i<cid.length; i++){ //OK
      allChange+=cid[i][1];
  
      if(overpay>=revCurrencies[i]){//OK
        allGoodChange+=cid[i][1];
      }
    }


    if(overpay==allChange){    //OK
          answer.status="CLOSED";
          answer.change=[...cid];
          return answer;
    }
  
    if(overpay>0 && overpay>allGoodChange){//OK
          answer.status="INSUFFICIENT_FUNDS";
          answer.change=[];
          return answer;
    }
    else{
      answer.status="OPEN";//OK
      
                             
      for (let i=0; i<currencies.length; i++){//OK
        
        for(let j=inRegisterReverse[i]; j>0; j-=currencies[i]){
         if(overpay>=currencies[i]){
           console.log(overpay+" " + currencies[i])
          counter+=1; 
          inRegisterReverse[i]-=currencies[i];
          overpay-=currencies[i];
          overpay = parseFloat(overpay).toFixed( 2 )
        }  
          }
             timesChange.push(counter);
             counter=0;  
      }
 
      for (let i=0; i<currencies.length; i++){//OK
       
        if(timesChange[i]>0){//OK
          answerElement[0]=names[i];
          answerElement[1]=timesChange[i]*currencies[i];
          answer.change.push(answerElement)
          answerElement=[];
      }
    }
  
   return answer;
    }
  }
