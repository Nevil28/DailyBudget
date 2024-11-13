function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const endDate = document.getElementById('end-date').value;
    const resultElement = document.getElementById('result');
    const remainingDaysElement = document.getElementById('remaining-days');

    // Проверка на корректность суммы и даты
    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = 'Пожалуйста, введите корректную сумму!';
        return;
    }
    
    if (!endDate) {
        resultElement.textContent = 'Пожалуйста, выберите дату!';
        return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(endDate);
    
    if (selectedDate <= currentDate) {
        resultElement.textContent = 'Дата должна быть в будущем!';
        return;
    }

    const timeDifference = selectedDate - currentDate;
    const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    remainingDaysElement.textContent = `Оставшиеся дни: ${remainingDays}`;

    // Округляем до ближайших десятков
    const dailyAmount = Math.round(amount / remainingDays / 10) * 10;

    document.getElementById('daily-amount').textContent = dailyAmount;
}

function reset() {
    document.getElementById('amount').value = '';
    document.getElementById('end-date').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('remaining-days').textContent = '';
}
