## Задание 1: 
Использование forEach для вывода элементов массива
Дан массив с именами: ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']. Используя метод forEach, выведите каждое имя в консоль с префиксом "Привет, ".

пример вывода:
Привет, Иван
Привет, Мария


## Задание 2: 
Использование map для преобразования массива
Имеется массив чисел: [1, 2, 3, 4, 5]. Используйте метод map, чтобы создать новый массив, в котором каждое число будет умножено на 10.

Пример вывода:
[10, 20, 30, 40, 50]


## Задание 3: 
Использование filter для фильтрации массива
Дан массив чисел: [5, 12, 8, 130, 44]. Используя метод filter, создайте новый массив, содержащий только числа больше 10.

Пример результата:
[12, 130, 44]


## Задание 4:
Комбинирование map и filter для обработки данных
Дан массив объектов, представляющих людей с их именами и возрастом: [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}]. Используя сначала filter, а затем map, создайте массив строк в формате "Имя (возраст лет)", но только для тех людей, которым больше 18 лет.

Пример результата:
['Иван (23 лет)', 'Алексей (32 лет)', 'Ольга (24 лет)', 'Анна (21 лет)']

## Задание 5: 
Использование reduce для агрегации данных
Дан массив продаж в виде объектов: [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}]. Используя метод reduce, рассчитайте общую стоимость проданных товаров.

Пример результата:
Общая стоимость продаж: 55500