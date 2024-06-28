function pattern() {
  for (let i = 1; i <= 4; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    console.log(str);
  }
}

pattern();
