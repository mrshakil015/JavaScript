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
