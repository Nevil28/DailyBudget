function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const endDate = document.getElementById('end-date').value;
    
    // Проверка на корректность введенной суммы и выбранной даты
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Пожалуйста, введите корректную сумму!';
        return;
    }
    
    if (!endDate) {
        document.getElementById('result').textContent = 'Пожалуйста, выберите дату!';
        return;
    }

    // Текущая дата
    const currentDate = new Date();
    const selectedDate = new Date(endDate);
    
    // Проверка, что выбранная дата не прошла
    if (selectedDate <= currentDate) {
        document.getElementById('result').textContent = 'Дата должна быть в будущем!';
        return;
    }

    // Расчет разницы между датами
    const timeDifference = selectedDate - currentDate;
    const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));  // Переводим миллисекунды в дни

    // Отображаем оставшиеся дни
    document.getElementById('remaining-days').textContent = `Оставшиеся дни: ${remainingDays}`;

    // Расчет суммы на каждый день
    const dailyAmount = Math.round((amount / remainingDays) / 100) * 100;

    // Выводим результат, разделяя текст на две строки
    document.getElementById('result').innerHTML = `Вы сможете протянуть <br> на <span style="font-size: 1.8rem; font-weight: bold;">${dailyAmount}</span> рублей <br> в день.`;
}

function reset() {
    document.getElementById('amount').value = '';  // Очищаем поле ввода
    document.getElementById('end-date').value = ''; // Очищаем поле даты
    document.getElementById('result').textContent = '';  // Очищаем результат
    document.getElementById('remaining-days').textContent = ''; // Очищаем оставшиеся дни
}
