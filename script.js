// 3. getTotalMen() Returns the total men from all tribes added together

let Reuben = 46500;
let Simeon = 59300;
let Gad = 45650;
let Judah = 74600;
let Issachar = 54400;
let Zebulun = 57400;
let Ephraim = 40500;
let Manasseh = 32200;
let Benjamin = 68000;
let Dan = 62700;
let Asher = 41500;
let Naphtali = 53400;
let Levi = 7000; // Traditionally counted separately

function getTotalMen() {
  return (
    Reuben +
    Simeon +
    Gad +
    Judah +
    Issachar +
    Zebulun +
    Ephraim +
    Manasseh +
    Benjamin +
    Dan +
    Asher +
    Naphtali +
    Levi
  );
}

console.log(getTotalMen());
