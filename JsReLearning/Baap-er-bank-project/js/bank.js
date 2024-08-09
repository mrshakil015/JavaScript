document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputDeposit = document.getElementById('input-deposit');
    const newDeposit = parseFloat(inputDeposit.value);


    const totalDepositElement = document.getElementById('total-deposit');
    const preDepositAmount = parseFloat(totalDepositElement.innerText);


    const totalDeposit = preDepositAmount + newDeposit;
    totalDepositElement.innerText = totalDeposit;
    
    const totalBalanceElement = document.getElementById('total-balance');
    const preBalanceAmount = parseFloat(totalBalanceElement.innerText);
    console.log(preBalanceAmount)

    const currentBalance = preBalanceAmount + newDeposit;
    totalBalanceElement.innerText = currentBalance;
    
    inputDeposit.value = '';

});
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputWithdraw = document.getElementById('input-withdraw');
    const newWithdraw = parseFloat(inputWithdraw.value);

    const totalWithdrawElement = document.getElementById('total-withdraw');
    const preWithdraw = parseFloat(totalWithdrawElement.innerText);

    const currentWithdrawAmount = preWithdraw + newWithdraw;

    const totalBalanceElement = document.getElementById('total-balance');
    const preBalanceAmount = parseFloat(totalBalanceElement.innerText);
    const currentBalance  = preBalanceAmount - newWithdraw;

    if(currentBalance < 0){
        alert('Not enough blance');
    }
    else{
        
        totalWithdrawElement.innerText = currentWithdrawAmount;
        totalBalanceElement.innerText = currentBalance;
    }


    inputWithdraw.value = '';           

});