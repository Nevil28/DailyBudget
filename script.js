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
    const dailyAmount = Math.round((amount / remainingDays) / 10) * 10;  // Округляем до десятков

    // Если сумма на день 300 рублей или меньше, выводим только сообщение о голодании с суммой
    if (dailyAmount <= 300) {
        document.getElementById('result').textContent = ''; // Очистить вывод суммы
        document.getElementById('hunger-message').textContent = `Режим "Полезное голодание" активирован! ${dailyAmount} рублей в день.`;
    } else {
        // Если сумма больше 300 рублей, показываем расчет
        document.getElementById('result').innerHTML = `Можете тратить <br> <span>${dailyAmount}</span> рублей в день`;
        document.getElementById('hunger-message').textContent = ''; // Очищаем сообщение о голодании
    }
}

function reset() {
    document.getElementById('amount').value = '';  // Очищаем поле ввода
    document.getElementById('end-date').value = ''; // Очищаем поле даты
    document.getElementById('result').textContent = '';  // Очищаем результат
    document.getElementById('remaining-days').textContent = ''; // Очищаем оставшиеся дни
    document.getElementById('hunger-message').textContent = ''; // Очищаем сообщение о голодании
}
