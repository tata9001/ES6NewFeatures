"use strict"
function f1() {
  let n = 5;
  if (true) {
      //console.log(n);
      let n = 10;
 }
  console.log(n);
}

function f2() {
  var n = 5;
  if (true) {
    console.log(n);
    var n = 10;
  }
  console.log(n);
}

f1();
f2();