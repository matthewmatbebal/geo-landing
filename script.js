document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        const toggleBtn = item.querySelector('.toggle-btn');

        toggleBtn.addEventListener('click', function () {
            // Toggle the collapsed class to hide or show content
            item.classList.toggle('collapsed');

            if (item.classList.contains('collapsed')) {
                toggleBtn.textContent = 'Развернуть';
            } else {
                toggleBtn.textContent = 'Свернуть';
            }
        });
    });
});

let counterElement = document.getElementById('counter');
    let farmButton = document.getElementById('farmButton');
    let counterValue = parseInt(counterElement.innerText.replace(/\s/g, '')); // Получаем текущее значение счетчика
    let interval;

    farmButton.addEventListener('click', function() {
        if (!interval) {  // Проверяем, чтобы таймер не запускался повторно
            interval = setInterval(function() {
                counterValue += 1;  // Увеличиваем значение
                counterElement.innerText = counterValue.toLocaleString(); // Обновляем счетчик с форматированием
            }, 1000);
        }
    });