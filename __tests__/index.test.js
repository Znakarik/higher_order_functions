import {countWholeSales, filterNumbersMoreTen, filterPeopleByAge, multiplyNumbers, printGreetings} from "../src";
import {expect} from "@jest/globals";

test("test", () => {
    printGreetings( ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']);
})

test("test multiply numbers", () => {
    expect(multiplyNumbers([1, 2, 3, 4, 5])).toEqual([10, 20, 30, 40, 50]);
})

test("filter numbers more 10", () => {
    expect(filterNumbersMoreTen( [5, 12, 8, 130, 44])).toEqual([12, 130, 44]);
})

test("filter people by age", () => {
    const given = [
        {name: 'Иван', age: 23},
        {name: 'Мария', age: 18},
        {name: 'Алексей', age: 32},
        {name: 'Ольга', age: 24},
        {name: 'Сергей', age: 17},
        {name: 'Анна', age: 21}
    ];
    const expected = ['Иван (23 лет)', 'Алексей (32 лет)', 'Ольга (24 лет)', 'Анна (21 лет)'];
    expect(filterPeopleByAge(given)).toEqual(expected);
})

test("count whole sales", () => {
    const items =  [
        {product: 'Телефон', price: 50000, quantity: 1},
        {product: 'Чехол', price: 1500, quantity: 2},
        {product: 'Зарядное устройство', price: 2500, quantity: 1}
    ];
    const expected = 55500;
    expect(countWholeSales(items)).toEqual(expected);
})