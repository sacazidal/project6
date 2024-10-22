document.getElementById('Form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailPattern.test(emailInput.value)) {
      event.preventDefault(); // Предотвращаем отправку формы
      emailError.style.display = 'block'; // Показываем сообщение об ошибке
    } else {
      emailError.style.display = 'none'; // Скрываем сообщение об ошибке, если email корректен
    }
  });

document.getElementById('Form').addEventListener('submit', function(event) {
    const telInput = document.getElementById('tel');
    const telError = document.getElementById('telError');
    const telPattern = /^\+?\d{10,15}$/;
  
    if (!telPattern.test(telInput.value)) {
      event.preventDefault(); // Предотвращаем отправку формы
      telError.style.display = 'block'; // Показываем сообщение об ошибке
    } else {
      telError.style.display = 'none'; // Скрываем сообщение об ошибке, если email корректен
    }
  });
  