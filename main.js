function triangle(value1, type1, value2, type2) {
  // Перевірка введених даних
  if (isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0) {
    return "Некоректні значення.";
  }

  // Перевірка типів
  const validTypes = ["leg", "hypotenuse", "opposite", "adjacent"];
  if (!validTypes.includes(type1.toLowerCase()) || !validTypes.includes(type2.toLowerCase())) {
    return "Некоректні типи.";
  }

  // Визначення катетів, гіпотенузи та кутів
  let a, b, c, alpha, beta;
  switch (type1.toLowerCase()) {
    case "leg":
      if (type2 === "hypotenuse") {
        a = value1;
        c = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
      } else if (type2 === "opposite") {
        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = Math.asin(b / c) * 180 / Math.PI;
        beta = 90 - alpha;
      } else if (type2 === "adjacent") {
        a = value1;
        b = Math.sqrt(value2 * value2 + a * a);
        c = value2;
        alpha = Math.atan2(b, a) * 180 / Math.PI;
        beta = 90 - alpha;
      }
      break;
    case "hypotenuse":
      if (type2 === "leg") {
        c = value1;
        a = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * 180 / Math.PI;
        beta = 90 - alpha;
      } else if (type2 === "opposite") {
        c = value1;
        b = value2;
        a = Math.sqrt(c * c - b * b);
        alpha = Math.asin(b / c) * 180 / Math.PI;
        beta = 90 - alpha;
      } else if (type2 === "adjacent") {
        c = value1;
        a = value2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.atan2(b, a) * 180 / Math.PI;
        beta = 90 - alpha;
      }
      break;
    case "opposite":
      if (type2 === "leg") {
        b = value1;
        a = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = Math.asin(b / c) * 180 / Math.PI;
        beta = 90 - alpha;
      } else if (type2 === "hypotenuse") {
        b = value1;
        c = value2;
        a = Math.sqrt(c * c - b * b);
        alpha = Math.asin(b / c) * 180 / Math.PI;
        beta = 90 - alpha;
      } else if (type2 === "adjacent") {
        b = value1;
        a = Math.tan(Math.PI / 2 - type2Value) * b;
        c = Math.sqrt(a * a + b * b);
        alpha = Math.asin(b / c) * 180 / Math.PI;
        beta = 90 - alpha;
      }
      break;
    case "adjacent":
      if (type2 === "leg") {
        a = value1;
        b = Math.sqrt(value2 * value2 + a * a);
        c = value2;
        alpha = Math

console.log("Це програма для для розв'язання прямокутних трикутників ")
console.log("Щоб використовувати її достатньо викликати функцію triangle() та вказати їй")
console.log("значення першого параметру, тип параметру, значення другого параметру, тип параметру")
console.log("допустимими типами параметрів є leg, hypotenuse, adjacent angle, opposite angle, angle, типи мають вказуватися у лапках")



