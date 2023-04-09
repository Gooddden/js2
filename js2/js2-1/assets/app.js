
let mass = +prompt ('Вес человека, кг');
console.log (`Вес человека ${mass},кг`);

let height = +prompt ('Рост человека, м');
console.log (`Рост человека ${height},м`);

let bmi = mass / (height ** 2);
console.log (`Индекс массы тела ${bmi}`);

if(bmi <= 16){
    alert('Выраженный дефицит массы тела');
} else if(bmi < 18.5 ){
    alert('Недостаточная (дефицит) масса тела');
} else if(bmi < 25 ){
    alert('Норма');
} else if(bmi < 30 ){
    alert('Избыточная масса тела (предожирение)');
} else if(bmi < 35 ){
    alert('Ожирение 1 степени');
} else if(bmi < 40 ){
    alert('Ожирение 2 степени');
} else if(bmi > 40 ){
    alert('Ожирение 3 степени');
} 


