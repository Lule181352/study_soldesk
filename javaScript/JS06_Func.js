function call() {
  console.log("ms");
  console.log(27);
}

function print2dan() {
  for (let i = 1; i < 10; i++) {
    console.log(`2 X ${i} = ${i * 2}`);
  }
}

function add(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}
function printGugudan(a) {
  for (let i = 1; i < 10; i++) {
    console.log(`${a} X ${i} = ${a * i}`);
  }
}

function printGugudan2() {
  let myInput = document.getElementById("i1");
  let myValue = myInput.value;
  for (let i = 1; i < 10; i++) {
    console.log(`${myValue} X ${i} = ${myValue * i}`);
  }

  myInput.value = "";
  myInput.focus();
}

function printGugudan3() {
  let myInput = document.myForm.i2;
  let myValue = myInput.value;
  for (let i = 1; i < 10; i++) {
    console.log(`${myValue} X ${i} = ${myValue * i}`);
  }
  myInput.value = "";
  myInput.focus();

  return false;
}
