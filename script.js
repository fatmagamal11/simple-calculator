inp = document.getElementById("inp");
function eraseAll() {
  inp.value = "";
}
function eraseOne() {
  let x = inp.value.toString();
  str = x.substring(0, x.length - 1);
  console.log(str);
  inp.value = str;
}
function dis(num) {
  inp.value += num;
}

function calc() {
  x = inp.value.toString();
  if (x[x.length - 1] == "%") {
    let first = x.slice(x.indexOf("*") + 1, x.indexOf("%"));
    f = first / 100;
    let second = x.slice(0, x.indexOf("*"));
    inp.value = f*second
  } else inp.value = eval(inp.value);
}
