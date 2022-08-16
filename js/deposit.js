document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    const depositeTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositeTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDeposit = newDepositAmount + previousDepositTotal;

    depositeTotalElement.innerText = currentDeposit;

    depositField.value = '';
})