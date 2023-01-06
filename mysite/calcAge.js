function calcAge() {
  let ageInput = document.getElementById("ageInput");

  let today = new Date();
  let year = today.getFullYear();

  let ageVal = year - ageInput.value + 1;
  //alert(ageVal);
  ageInput.parentNode.innerText = "당신의 나이는 " + ageVal + "살 입니다.";

  // parentNode 는 그 위에 있는 걸 선택
}

function calcAge2() {
  let ageInput = document.getElementById("ageInput");

  let today = new Date();
  let year = today.getFullYear();
  //   날짜 계산하는거 getFullYear은 년도만 가져오는거
  let ageVal = year - ageInput.value + 1;

  window.open(
    "agePopup.html?aaa=" + ageVal,
    "_blank", //속성값
    "top=400,left=500,width=300,height=200" //팝업창의 위치와 크기

    // window.open으로 팝업 검색하면 다 나옴
  );
}

function agePop() {
  let urlParams = new URL(location.href).searchParams;
  let age = urlParams.get("aaa");

  document.write("당신의 나이는 " + age + "살 입니다!");
}
