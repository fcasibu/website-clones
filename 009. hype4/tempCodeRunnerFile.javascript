function human(name, age, height, quote) {
  function giveInfo() {
     console.log(`My name is ${name}, I am ${age} years old, and my height is ${height}cm`)
  }
  function sayQuote() {
    console.log( `"${quote}"`)
  }
  giveInfo();
  sayQuote();
}

human('Francis', 22, 178, "I love programming!");
