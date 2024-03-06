function printGreetings(names) {
    names.forEach(name => console.log(`Привет, ${name}`));
}

function multiplyNumbers(numbers) {
    return numbers.map(number => number * 10)
}


function filterNumbersMoreTen(numbers) {
    return numbers.filter(num => num > 10);
}

function filterPeopleByAge(people) {
    return people.filter(human => human.age > 18)
        .map(human => `${human.name} (${human.age} лет)`)
}

function countWholeSales(items) {
    return items.reduce((sum, current) => sum + (current.price * current.quantity), 0);
}

export {
    printGreetings, multiplyNumbers, filterNumbersMoreTen,
    filterPeopleByAge, countWholeSales
}