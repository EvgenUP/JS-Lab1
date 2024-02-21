function triangle(val1, type1, val2, type2) {
    // Перевірка на правильність типів
    const validTypes = ["leg", "hypotenuse", "angle", "adjacent angle", "opposite angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Please read the instructions and try again.");
        return "failed";
    }

    // Перевірка на некоректність уведених значень
    if (val1 <= 0 || val2 <= 0) {
        console.log("The values must be positive.");
        return "failed";
    }

    // Обчислення результатів
    let c, a, b, alpha, beta;
    if (type1 === "leg" && type2 === "hypotenuse") {
        a = val1;
        c = val2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * (180 / Math.PI);
        beta = 90 - alpha;
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        c = val1;
        a = val2;
        b = Math.sqrt(c * c - a * a);
        alpha = Math.asin(a / c) * (180 / Math.PI);
        beta = 90 - alpha;
    } else if ((type1 === "leg" && type2 === "angle") || (type1 === "angle" && type2 === "leg")) {
        if (type1 === "angle") {
            alpha = val1;
            a = val2;
        } else {
            alpha = val2;
            a = val1;
        }
        if (alpha <= 0 || alpha >= 90) {
            console.log("The angle must be between 0 and 90 degrees.");
            return "failed";
        }
        beta = 90 - alpha;
        c = a / Math.sin(alpha * (Math.PI / 180));
        b = Math.sqrt(c * c - a * a);
    } else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {
        if (type1 === "adjacent angle") {
            alpha = val1;
            a = val2;
        } else {
            alpha = val2;
            a = val1;
        }
        if (alpha <= 0 || alpha >= 90) {
            console.log("The angle must be between 0 and 90 degrees.");
            return "failed";
        }
        beta = 90 - alpha;
        c = a / Math.tan(alpha * (Math.PI / 180));
        b = Math.sqrt(c * c - a * a);
    } else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
        if (type1 === "opposite angle") {
            alpha = val1;
            a = val2;
        } else {
            alpha = val2;
            a = val1;
        }
        if (alpha <= 0 || alpha >= 90) {
            console.log("The angle must be between 0 and 90 degrees.");
            return "failed";
        }
        beta = 90 - alpha;
        c = a / Math.sin(beta * (Math.PI / 180));
        b = Math.sqrt(c * c - a * a);
    } else {
        console.log("Please read the instructions and try again.");
        return "failed";
    }

    // Перевірка на некоректність уведених значень
    if (b <= 0 || a >= c) {
        console.log("Invalid input values.");
        return "failed";
    }
    console.log(`a = ${a.toFixed(2)}\nb = ${b.toFixed(2)}\nc = ${c.toFixed(2)}\nalpha = ${alpha.toFixed(2)}°\nbeta = ${beta.toFixed(2)}°`);
    return "success";
}

console.log("Це програма для для розв'язання прямокутних трикутників ")
console.log("Щоб використовувати її достатньо викликати функцію triangle() та вказати їй")
console.log("значення першого параметру, тип параметру, значення другого параметру, тип параметру")
console.log("допустимими типами параметрів є leg, hypotenuse, adjacent angle, opposite angle, angle, типи мають вказуватися у лапках")



