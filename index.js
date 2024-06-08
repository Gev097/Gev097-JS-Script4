//Գտնել տրված իրական թվերի հաջորդականության 
//փոքրագույն անդամը և տեղերով փոխել
// վերջին տարրի հետ:
// let arr = [3.5, 1.2, 4.8, -0.5, 7.6, -2.4, 2.0];
// console.log(arr);
// let minIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) {
//         minIndex = i;
//     }
// }

// let tarr = arr[minIndex];
// arr[minIndex] = arr[arr.length - 1];
// arr[arr.length - 1] = tarr;

// console.log(arr);


// // Տրված է ամբողջ թվերի հաջորդականություն: Արտածել այդ հաջորդականության
// let arr = [3, 17, 25, -3, 8, 12, 4, 0, 19, 7, 1, 5, -2, 14];

// // Part a) առաջին միանիշ տարրը,
// let firstDigit = arr.find(num => num >= 0 && num < 10);
// console.log('a) առաջին միանիշ տարրը:', firstDigit);

// // Part b) 5-ին պատիկ վերջին տարրը,
// let fifthLayerLastElement = arr[4];
// console.log('b) 5-ին պատիկ վերջին տարրը:', fifthLayerLastElement);

// // Part c) վերջին երկնիշ տարրը և դրան հաջորդող կենտ տարրերի քանակը,
// let lastTwoDigit = arr.length - 1;
// while (lastTwoDigit >= 0 && (arr[lastTwoDigit] < 10 || arr[lastTwoDigit] >= 100)) {
//     lastTwoDigit--;
// }
// let oddCount = arr.slice(lastTwoDigit + 1).filter(num => num % 2 !== 0).length;
// console.log('c) վերջին երկնիշ տարրը:', arr[lastTwoDigit]);
// console.log('c) դրան հաջորդող կենտ տարրերի քանակը:', oddCount);

// // Part d) առաջին զույգ տարրը և դրան նախորդող տարրերի գումարը,
// let first = 1;
// let sum = 0;
// while (first < arr.length && arr[first] % 2 !== 0) {
//     sum += arr[first - 1];
//     first++;
// }
// console.log('d) առաջին զույգ տարրը:', arr[first - 1], arr[first]);
// console.log('d) դրան նախորդող տարրերի գումարը:', sum);

// // Part e) 7-ից մեծ վերջին տարրը և դրան նախորդող զույգ տարրերի արտադրյալը,
// let lastSeven = arr.length - 1;
// while (lastSeven >= 0 && arr[lastSeven] <= 7) {
//     lastSeven--;
// }
// let product = arr[lastSeven - 1] * arr[lastSeven - 2];
// console.log('e) 7-ից մեծ վերջին տարրը:', arr[lastSeven]);
// console.log('e) դրան նախորդող զույգ տարրերի արտադրյալը:', product);

// // Part f) մինչև առաջին բացասական տարրը եղած այն տարրերի քանակը, որոնք պատկանում են [0,20] միջակայքին,
// let firstNegative = arr.findIndex(num => num < 0);
// let countt = arr.slice(0, firstNegative).filter(num => num >= 0 && num <= 20).length;
// console.log('f) մինչև առաջին բացասական տարրը եղած այն տարրերի քանակը, որոնք պատկանում են [0,20] միջակայքին:', countt);

// // Part g) [5,24] միջակայքում գտնվող առաջին տարրը և դրան հաջորդող տարրերի միջին թվաբանականը,
// let firstInRange = arr.findIndex(num => num >= 5 && num <= 24);
// let summ = 0;
// let count = 0;
// for (let i = firstInRange + 1; i < arr.length; i++) {
//     summ += arr[i];
//     count++;
// }
// let mijin = summ / count;
// console.log('g) [5,24] միջակայքում գտնվող առաջին տարրը:', arr[firstInRange]);
// console.log('g) դրան հաջորդող տարրերի միջին թվաբանականը:', mijin);

// // Part h) առաջին 0-ին հաջորդող 1-ով սկսվող թվերի գումարը (եթե հաջորդականությունը 0 չի պարունակում՝ արտածել -1):
// let firstZero = arr.indexOf(0);
// let summm = -1;
// if (firstZero !== -1) {
//     summm = arr.slice(firstZero + 1).filter(num => num.toString().startsWith('1')).reduce((acc, num) => acc + num, 0);
// }
// console.log('h) առաջին 0-ին հաջորդող 1-ով սկսվող թվերի գումարը (եթե հաջորդականությունը 0 չի պարունակում՝ արտածել -1):', summm);
