// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
let arr = [1,1,1];

let result = true
for (let i = 0; i < arr.length; i = i + 1){
    for (j = i + 1; j< arr.length; j = j +1){
        if (arr[i] !== arr[j]){
            result = false
        }
    }
}
console.log(result)