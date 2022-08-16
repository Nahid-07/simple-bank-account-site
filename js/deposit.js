document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('please enter a amount of money');
        return;
    }


    const depositeTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositeTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDeposit = newDepositAmount + previousDepositTotal;

    depositeTotalElement.innerText = currentDeposit;

    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalbalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = previousTotalbalance + newDepositAmount;
    totalBalanceElement.innerText = currentTotalBalance;

})