
let pop = +prompt('Численность населения страны (чел.)');
console.log(`Численность населения страны ${pop} чел.`);

let country_area = +prompt(`Площадь страны (в км.кв.)`);
console.log(`Площадь страны ${country_area} км.кв.`);

let population_density = pop / country_area;
console.log(`Плотность населения страны ${population_density} чел/км.кв.`);