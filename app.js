// 1. Написать функцию, которая принимает высоту прямоугольника и его ширину и возвращает площадь прямоугольника.

function squareRectangle(a, b){
  let out = (a * b);
      return out;
  }
  console.log(squareRectangle(10,5));

// 2. Написать функцию, которая принимает диаметр и возвращает длину окружности.

function getLength(diameter){
  return diameter * Math.PI;
}
console.log(getLength(10))

// 3. Написать функцию, которая принимает высоту и диаметру основания циллиндра и возвращает его объем.

function getVolume(a, b){
  return Math.PI * a * b;
}
console.log(getVolume(10, 5));

// 4. Реализовать конвертер доллара (доллар-грн и грн-доллар, в зависимости от переданного модификатора). Курс текущий на момент решения задачи

function converter(mode, num) {
  if (mode == 'UAH') 
      return num * 0.034;
  else if (mode == 'USD')  
      return num * 29.38;
  else 
      return 'Модификатор или число не указаны!';
  }

console.log(converter('UAH',20));
console.log(converter('USD',20));

// 5. Выведите все числа в заданном диапазоне, которые делятся на 5. (Функция принимает два числа (от и до) 
// и выводит в консоль всё из этого диапазона, что делится на 5).



function getRange(lowEnd, highEnd) {
  for (let i = lowEnd; i <= highEnd; i++) {
      if(i % 5 == 0) {
          console.log(i);}
      } 
}

getRange(1, 28);

// 6. Реализовать игру FizzBuzz (Fizz buzz это групповая детская игра для обучения правилам деления. Начинающий произносит число «1», 
// и каждый следующий игрок прибавляет к предыдущему значению единицу. Когда число делится на три оно заменяется на fizz, 
// если число делится на пять, то произносится buzz. Числа, делящиеся на три и пять одновременно заменяются на fizz buzz. 
// Сделавший ошибку игрок исключается из игры.

//     Типичная партия в fizz buzz выглядит так:
//     1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...)


// ????????????????????????????

// for (var i= 1; i <= 20; i++)
// {
//   if (i % 15 == 0)
//       console.log("FizzBuzz");
//   else if (i % 3 == 0)
//       console.log("Fizz");
//   else if (i % 5 == 0)
//       console.log("Buzz");
//   else
//       console.log(i);
// }

