function urlLoader() {
  let urlParams = new URL(location.href).searchParams;

  let nameValue = urlParams.get("aa");
  let idValue = urlParams.get("bb");
  let pwValue = urlParams.get("cc");

  // alert(nameValue);
  // alert(idValue);
  // alert(pwValue);

  document.write(
    "<h1> 이름 : " +
      nameValue +
      "</h1><h1> ID : " +
      idValue +
      "</h1><h1> PW : " +
      pwValue +
      "</h1>"
  );
}
