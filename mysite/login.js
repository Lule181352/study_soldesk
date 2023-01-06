function login1() {
  let nameInput = document.getElementById("name");
  let idInput = document.getElementById("id");
  let pwInput = document.getElementById("pw");

  //alert(nameInput.value);

  if (nameInput.value == "") {
    alert("이름을 입력하세요");
    nameInput.focus;
    return "";
  } else if (idInput.value == "") {
    alert("ID를 입력하세요");
    idInput.focus;
    return "";
  } else if (pwInput.value == "") {
    alert("PW를 입력하세요");
    pwInput.focus;
    return "";
  }

  location.href =
    "loginOutput.html?" +
    "aa=" +
    nameInput.value +
    "&bb=" +
    idInput.value +
    "&cc=" +
    pwInput.value;
}

function login2() {
  let nameVal = document.getElementById("name").value;
  let idVal = document.getElementById("id").value;
  let pwVal = document.getElementById("pw").value;

  alert(nameInput);
  document.write(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="index.css" />
      <script src="login.js"></script>
    </head>
    <body>
      <table id="siteTbl">
        <tr>
          <td><a href="index.html">Ms's website</a></td>
        </tr>
      </table>
      <table id="siteMenuTbl">
        <tr>
          <td><a class="menuClass" href="menu.html"> menu</a></td>
          <td><a class="menuClass" href="join.html">가입</a></td>
          <td><a class="menuClass" href="slide.html">슬라이드</a></td>
          <td><a href="http://www.naver.com" target="_blank">네이버</a></td>
          <td><a href="login.html">로그인</a></td>
          <td><a href="calcAge.html">나이</a></td>
        </tr>
      </table>
      <table id="contentTbl">
        <tr>
          <td>
            <table border="1" id="loginTbl">
              <tr>
                <td>이름</td>
                <td id="nameTd" width="400px">${nameVal}</td>
              </tr>
              <tr>
                <td>ID</td>
                <td id="idTd" width="400px">${idVal}</td>
              </tr>
              <tr>
                <td>PW</td>
                <td id="pwTd" width="400px">${pwVal}</td>
              </tr>
              <tr>
                <td colspan="2">
                  <button onclick="login1()">로그인(param o)</button>
                  <button onclick="login2()">로그인(조잡-다 그려내기)</button>
                  <button onclick="login3()">로그인(param x)</button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `);
}

function login3() {
  let nameInput = document.getElementById("name");
  let idInput = document.getElementById("id");
  let pwInput = document.getElementById("pw");

  // nameInput.remove();
  let nameVal = nameInput.value;
  let idVal = idInput.value;
  let pwVal = pwInput.value;

  let nameTd = document.getElementById("nameTd");
  let idTd = document.getElementById("idTd");
  let pwTd = document.getElementById("pwTd");
  //  innerText : 기존 값이 밀리고 변경이 된다.
  //   nameTd.innerText = nameVal;
  //   idTd.innerText = idVal;
  //   pwTd.innerText = pwVal;

  nameTd.innerText = "<h1>" + nameVal + "<h1>";
  idTd.innerText = idVal;
  pwTd.innerHTML = "<h1>" + pwVal + "<h1>";
}

//LoginOutput 영역
/////////////////////////////////////////////////////////////////////////////////////////
function setVal() {
  let urlParams = new URL(location.href).searchParams;
  let nameParam = urlParams.get("aa");
  let idParam = urlParams.get("bb");
  let pwParam = urlParams.get("cc");

  //alert(nameParam);

  let nameTd = document.getElementById("nameTd");
  let idTd = document.getElementById("idTd");
  let pwTd = document.getElementById("pwTd");

  //alert(nameTd);
  nameTd.innerText = nameParam;
  idTd.innerText = idParam;
  pwTd.innerText = pwParam;
}
