document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalAmountString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalAmountString);
    const currentWitdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWitdraw;

    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = currentTotalBalance;


    withdrawField.value = '';

})