
let century = +prompt ('Текущее столетие (например 1900)');
console.log(`Текущее столетие ${century} год`);

let current  = +prompt ('Текущий год (например 2023)');
console.log(`Текущий год ${current} год`);

if (century % 400 == 0 && current % 4 == 0){
    alert('Год високосный');
} else {
    alert('Год не високосный');
}
