// Определение четное/не четно или не число.
let num = prompt('Введите число');
if (+num || +num === 0){
    switch (+num % 2){
        case 0:
            console.log(`Число ${num} - чётное`);
            break;
        case 1:
            console.log(`Число ${num} - нечётное`);
    }
} else {
    console.log('Это не число')
}