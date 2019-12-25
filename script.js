window.onload = function() {
    task1.onclick = function() {
        let userNumber1 = +prompt("Введіть перше ціле число");
        let userNumber2 = +prompt("Введіть друге ціле число");
        let userNumberMax = Math.max(userNumber1, userNumber2);
        let userNumberMin = Math.min(userNumber1, userNumber2);
        let suma = 0;
        for (let i = userNumberMin; i <= userNumberMax; i++) {
            suma += i;
        }
        alert(`Сума чисел в заданому діапазоні від ${userNumberMin} до ${userNumberMax} рівна ${suma}`);
    }
    task2.onclick = function() {
        let userNumber1 = +prompt("Введіть перше ціле число");
        let userNumber2 = +prompt("Введіть друге ціле число");
        let gcd;
        for (let i = 1; i <= userNumber1; i++) {
            for (let j = 1; j <= userNumber2; j++) {
                if (userNumber1 % i === 0 && userNumber2 % j === 0 && i === j) {
                    gcd = i;
                }
            }
        }
        alert(`Найбільший спільний дільник рівний: ${gcd}`);
    }
    task3.onclick = function() {
        let userNumber = +prompt("Введіть ціле число");
        let dilnyku;
        for (let i = 1; i <= userNumber; i++) {
            if (userNumber % i === 0) {
                dilnyku = "" + i;
                alert(`Список дільників: ${dilnyku}`) //як вивести в одному полі?
            }
        }

    }
    task4.onclick = function() {
        let userNumber = +prompt("Введіть ціле число");
        let sumaChysel = 1;
        for (let i = 10; i <= userNumber; i = i * 10) {
            if (userNumber / i >= 1) {
                sumaChysel += 1;
            }
        }
        alert(`Кількість чисел: ${sumaChysel}`)
    }
    task5.onclick = function() {
        let plusNumber = 0;
        let minusNumber = 0;
        let zeroNumber = 0;
        let evenNumbers = 0;
        let oddNumbers = 0;
        for (let i = 0; i < 10; i++) {
            let userNumber = +prompt("Введіть будь ласка 10 чисел");
            if (userNumber > 0) {
                plusNumber += 1;
            } else if (userNumber < 0) {
                minusNumber += 1;
            } else if (userNumber === 0) {
                zeroNumber += 1;
            }
            if (userNumber % 2 == 0) {
                evenNumbers += 1;
            } else if (userNumber % 2 !== 0) {
                oddNumbers += 1;
            }

        }
        alert(`Кількість додатніх чисел рівна: ${plusNumber};
                Кількість від'ємних чисел рівна: ${minusNumber};
                 Кількість нулів рівна: ${zeroNumber}; 
                 Кількість від'ємних чисел рівна: ${minusNumber}; 
                 Кількість парних чисел рівна: ${evenNumbers};
                  Кількість непарних чисел рівна: ${oddNumbers};`)
    }





    task6.onclick = function() {
        while (i = true) {
            let next;
            let i;
            let userNumber1 = +prompt("Введіть перше число");
            let userNumber2 = +prompt("Введіть друге число");
            let action = prompt("Введіть дію для обчислення", " / , * , - , + ");
            switch (action) {
                case "/":
                    alert(`${userNumber1}/${userNumber2} = ${userNumber1/userNumber2}`);
                    break;
                case "*":
                    alert(`${userNumber1}*${userNumber2} = ${userNumber1*userNumber2}`);
                    break;
                case "-":
                    alert(`${userNumber1}-${userNumber2} = ${userNumber1-userNumber2}`);
                    break;
                case "+":
                    alert(`${userNumber1}+${userNumber2} = ${userNumber1+userNumber2}`);
                    break;
            }
            next = prompt("To continuet insert- yes, to aboard insert - no");
            if (next == "yes") { //чому не працює оператор або?
                i = true;
            } else {
                break;
            }
        }
    }
    task7.onclick = function() {
        let userNum = +prompt("Введіть число");
        let userMove = +prompt("Введіть число для зсуву")
        let digits = userNum.toString().split('');

        let moveArr = [];

        for (let i = 1; i <= userMove; i++) {
            moveArr = digits.slice(i);
        }
        for (let i = digits.length; i > userMove; i--) {
            digits.pop(i);
        }
        let moveNumber = moveArr.concat(digits);
        let convertToNumber = moveNumber.join('');
        alert(`Ваше зміщене число ${convertToNumber}`);
    }
    task8.onclick = function() {
        while (i = true) {
            let userDay = prompt("Введіть будь ласка день тижня", "понеділок вівторок середа четвер п'ятниця субота неділя");
            switch (userDay) {
                case "понеділок":
                    alert(`Наступний день тижня Вівторок`);
                    break;
                case "вівторок":
                    alert(`Наступний день тижня Середа`);
                    break;
                case "середа":
                    alert(`Наступний день тижня Четвер`);
                    break;
                case "четвер":
                    alert(`Наступний день тижня П'ятниця`);
                    break;
                case "п'ятниця":
                    alert(`Наступний день тижня Субота`);
                    break;
                case "субота":
                    alert(`Наступний день тижня Неділя`);
                    break;
                case "неділя":
                    alert(`Наступний день тижня Понеділок`);
                    break;

            }
            next = prompt("Для ще однієї спроби введіть - так, для відміни - ні");
            if (next == "так") { //чому не працює оператор або?
                i = true;
            } else {
                break;
            }
        }
    }
    task9.onclick = function() {
        let secondTable = [];
        let thirdTable = [];
        let fourthTable = [];
        let fifthTable = [];
        let sixthTable = [];
        let seventhTable = [];
        let eighthTable = [];
        let ninthTable = [];

        let textsecondTable = [];
        let textthirdTable = [];
        let textfourthTable = [];
        let textfifthTable = [];
        let textsixthTable = [];
        let textseventhTable = [];
        let texteighthTable = [];
        let textninthTable = [];

        let finalsecondTable = [];
        let finalthirdTable = [];
        let finalfourthTable = [];
        let finalfifthTable = [];
        let finalsixthTable = [];
        let finalseventhTable = [];
        let finaleighthTable = [];
        let finalninthTable = [];

        let two = 2;
        let three = 3;
        let four = 4;
        let five = 5;
        let six = 6;
        let seven = 7;
        let eight = 8;
        let nine = 9;

        for (let i = 1; i < 11; i++) {
            secondTable.push(two * i);
            thirdTable.push(three * i);
            fourthTable.push(four * i);
            fifthTable.push(five * i);
            sixthTable.push(six * i);
            seventhTable.push(seven * i);
            eighthTable.push(eight * i);
            ninthTable.push(nine * i);
        }
        for (let i = 1; i < 11; i++) {
            textsecondTable.push(two + "*" + i + " =");
            textthirdTable.push(three + "*" + i + " =");
            textfourthTable.push(four + "*" + i + " =");
            textfifthTable.push(five + "*" + i + " =");
            textsixthTable.push(six + "*" + i + " =");
            textseventhTable.push(seven + "*" + i + " =");
            texteighthTable.push(eight + "*" + i + " =");
            textninthTable.push(nine + "*" + i + " =");
        }
        for (let i = 0; i < textsecondTable.length; i++) {
            finalsecondTable.push(textsecondTable[i]);
            finalsecondTable.push(secondTable[i]);
            finalthirdTable.push(textthirdTable[i]);
            finalthirdTable.push(thirdTable[i]);
            finalfourthTable.push(textfourthTable[i]);
            finalfourthTable.push(fourthTable[i]);
            finalfifthTable.push(textfifthTable[i]);
            finalfifthTable.push(fifthTable[i]);
            finalsixthTable.push(textsixthTable[i]);
            finalsixthTable.push(sixthTable[i]);
            finalseventhTable.push(textseventhTable[i]);
            finalseventhTable.push(seventhTable[i]);
            finaleighthTable.push(texteighthTable[i]);
            finaleighthTable.push(eighthTable[i]);
            finalninthTable.push(textninthTable[i]);
            finalninthTable.push(ninthTable[i]);
        }

        let convertTwo = finalthirdTable.join(' ')
        let convertthree = finalsecondTable.join(' ');
        let convertfour = finalfourthTable.join(' ');
        let convertfive = finalfifthTable.join(' ');
        let convertsix = finalsixthTable.join(' ');
        let convertseven = finalseventhTable.join(' ');
        let converteight = finaleighthTable.join(' ');
        let convertnine = finalninthTable.join(' ');

        alert(`таблиця множення для 2 
        ${convertTwo}, 

        таблиця множення для 3 
        ${convertthree},

        таблиця множення для 4 
        ${convertfour},

        таблиця множення для 5
        ${convertfive},

        таблиця множення для 6
        ${convertsix},

        таблиця множення для 7
        ${convertseven},

        таблиця множення для 8
        ${converteight},
        
        таблиця множення для 9
        ${convertnine}.      
        `);
    }
    task10.onclick = function() {
        alert("lets play game 'Guess the number'. Ok, think of a number from 0 to 100 ");
        let i = true;
        let guessNumberMax = 100;
        let guessNumberMin = 0;
        while (i) {
            let probablyNumber = ((guessNumberMax + guessNumberMin) / 2).toFixed(0);
            let askNumber = prompt(`Your number bigger, less or equal my variant ${probablyNumber}`, "Insert > or < or =");
            if (askNumber == ">") {
                guessNumberMin = probablyNumber++;
            } else if (askNumber == "<") {
                guessNumberMax = probablyNumber--;
            } else if (askNumber == "=") {
                alert("Good game.Thanks!!!");
                break;
            }

        }
    }
}