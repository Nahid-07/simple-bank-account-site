document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please enter a amount of money');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalAmountString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalAmountString);

    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    if(newWithdrawAmount>previousTotalBalance){
        alert('You cannot withdraw more than the deposit amount')
        return;
    }
    const currentWitdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWitdraw;
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = currentTotalBalance;


})