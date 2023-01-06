function call() {
  let i1Input = document.getElementById("i1");
  let i2Input = document.getElementById("i2");
  let i3Input = document.getElementById("i3");

  // alert(i1Input);
  //alert(i2Input.value);
  //alert(i3Input.value);

  if (i1Input.value == "") {
    alert("이름을 입력하세요!!");
    i1Input.focus();
    return "";
  }
  if (i2Input.value == "") {
    alert("ID를 입력하세요!!");
    i2Input.focus();
    return "";
  }
  if (i3Input.value == "") {
    alert("PW를  입력하세요!!");
    i3Input.focus();
    return "";
  }

  location.href =
    "test3.html?aa=" +
    i1Input.value +
    "&bb=" +
    i2Input.value +
    "&cc=" +
    i3Input.value;
}
