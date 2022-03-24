// Определение типа данных. Данное присваивается черех константу X
let X = "тест";
switch (typeof X){
    case 'string':
        console.log(`${X} - это строка`);
        break;
    case 'number':
        console.log(`${X} - это число`);
        break;
    case 'boolean':
        console.log(`${X} - это  логический тип`)
        break;
    default:
        console.log(`Тип ${X} тип не определён`)
}