// Тут мы находим объекты с HTML и записываем их в переменные.
const btnAdd = document.querySelector('.js-btnSubmit');
const inputValueEmail = document.querySelector('input[data-email]');
const inputValueName = document.querySelector('input[data-name]');
const inputValueTel = document.querySelector('input[data-tel]');
const inputValueComm = document.querySelector('textarea[data-comment]');
const emailInput = document.querySelector('input[data-subInput]');
const btnInput = document.querySelector('button[data-subBtn]');

// тут мы вешаем на переменную btnAdd (в ней лежит кнопка которую мы нашли ранее) слушатель событий который будет реагировать на ‘click’
btnAdd.addEventListener('click', function () {
//при клике выполняется функция которая выведет в консоль наши записи с инпута при помощи ‘.value’
    console.log('Email uzytkownika: ',inputValueEmail.value);
    console.log('Numer telefonu uzytkownika: ', inputValueTel.value);
    console.log('Imie uzytkownika: ', inputValueName.value);
    console.log('Komentarz od uzytkownika: ', inputValueComm.value);

    inputValueEmail.value = '';
    inputValueTel.value = '';
    inputValueName.value = '';
    inputValueComm.value = '';


});

btnInput.addEventListener('click', function(){
    console.log(`Uzytkownik: ${emailInput.value} podpisal sie na newsletter!`);
    emailInput.value = '';
});