let minValue = parseInt(prompt('Минимальное значение числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','999'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
if (minValue === NaN || 'false'){
    minValue = -999;
}
console.log(minValue);
if (maxValue === NaN || 'false'){
    maxValue = 999;
}
console.log(maxValue);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            if (phraseRandom === 1){
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 2){
                answerField.innerText = `Вы ошиблись?..\n\u{1F92F}`;
            } else {
                answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
            }
            orderNumber = '';
            orderNumberField.innerText = orderNumber;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            console.log(minValue);
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            console.log(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `О, да это легко! \n\u{1F929} Вы загадали ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            if (phraseRandom === 1){
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 2){
                answerField.innerText = `Вы ошиблись?..\n\u{1F92F}`;
            } else {
                answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
            }
            orderNumber = '';
            orderNumberField.innerText = orderNumber;
            gameRun = false;
            } else if (answerNumber <= minValue){
            answerField.innerText = `Ваше число НЕ входит в диапазон возможных значений!\n\u{1F914}`;
            orderNumber = '';
            orderNumberField.innerText = orderNumber;
            gameRun = false;
            } else {
            maxValue = answerNumber  - 1;
            console.log(maxValue);
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            console.log(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Наверное, загаданное Вами число ${answerNumber }? \n\u{1F609}`;
        } 
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        if (phraseRandom === 1){
            answerField.innerText = `Я угадал!!! \n\u{1F9B8}`;
        } else if (phraseRandom === 2){
            answerField.innerText = `Я ВСЕГДА угадываю!!! \n\u{1F3C6}`;
        } else {
            answerField.innerText = `Кто молодец? Я молодец! \n\u{1F57A}`;
        }
        gameRun = false;
        orderNumber = '';
        orderNumberField.innerText = orderNumber;
    }})

document.getElementById('btnRetry').addEventListener('click', function () {
    answerField.innerText = alert('Попробуем еще раз?\u{1F609}');
    minValue = parseInt(prompt('Нужно задать минимальное значение числа для игры','-999'));
    maxValue = parseInt(prompt('Нужно задать максимальное значение числа для игры','999'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    if (minValue === NaN || 'false'){
        minValue = -999;
    }
    console.log(minValue);
    if (maxValue === NaN || 'false'){
        maxValue = 999;
    }
    console.log(maxValue);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Похоже, что Ваше число ${answerNumber }?`
    orderNumber++;
    orderNumberField.innerText = orderNumber;
    gameRun = true;
}) 
