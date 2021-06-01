//1

const arr1 = [
  { name: "name1", url: "wwww.ccc.com", number: 1 },
  { name: "name2", url: "wwww.ccfff.com", number: 9 },
  { name: "name3", url: "wwww.fgghhj.com", number: 4 },
  { name: "name4", url: "wwww.bbb.com", number: 7 },
  { name: "name5", url: "wwww.cbnk.com", number: 8 },
  { name: "name6", url: "wwww.ccflllf.com", number: 6 },
  { name: "name7", url: "http.fcfff.com", number: 3 },
  { name: "name8", url: "wwww.llsff.com", number: 2 },
  { name: "name9", url: "wwww.bbbvfff.com", number: 5 },
  { name: "name10", url: "http.f.com", number: 0 },
];
console.log(arr1);
//2

let arr2 = arr1.map((x) => x.name);
console.log(arr2);

//3
arr1.forEach((x) => {
  if (x.url.slice(0, 4) === "http") {
    console.log(x.url + " " + x.name);
  } else {
    console.log("Invalid URL for " + x.name);
  }
});

//4

arr1.forEach((x, i) => {
  const index = Math.floor(Math.random() * arr1.length);
  console.log(`x name: ${x.name}, i: ${i}`);

  //arr1[i] = arr1[index];
});

//5
const sortedArray = arr1.map((x) => x.number);

sortedArray.sort();
const invertedArray = sortedArray.reverse();

sortedArray.forEach((sortedElement, i) => {
  arr1.forEach((element) => {
    if (sortedElement === element.number) {
      sortedArray[i] = element;
    }
  });
});

console.log(sortedArray);

// const sortLow = arr1.slice().sort((a, b) => a.number - b.number);
// console.log(sortLow);

// //6.
// const sortHigh = arr1.slice().sort((a, b) => b.number - a.number);
// console.log(sortHigh);

// //7.
// const nameLine = arr.reduce((acc, v, i) => {
//   if (i <= arr.length - 3) {
//     return (acc += `${v.name} , `);
//   } else if (i === arr.length - 2) {
//     return (acc += `${v.name} and `);
//   } else {
//     return (acc += v.name);
//   }
// }, "");

let string = "";

arr1.forEach((element, i) => {
  if (i === arr1.length - 1) {
    string = string.slice(0, string.length - 2) + " and " + element.name;
    return;
  }
  string = string + element.name + ", ";
});

console.log(string);
// console.log(nameLine);

//******************************************************** */

//  const array = [1, 5, 4, 5, 3, 7, 9, 1, 4];
// array.sort();
// console.log(array);
