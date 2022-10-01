const pwdLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const pwdUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const pwdNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const pwdCharacter = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "\\",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];

const genBtn = document.getElementById("generate");

genBtn.addEventListener("click", () => {
  const isUpper = document.getElementById("uCheck").checked;
  const isLower = document.getElementById("lCheck").checked;
  const isNum = document.getElementById("nCheck").checked;
  const isSym = document.getElementById("sCheck").checked;

  const inputArr = [];
  inputArr.push(pwdNumber);
  isUpper && inputArr.push(pwdUpperCase);
  isLower && inputArr.push(pwdLowerCase);
  isSym && inputArr.push(pwdCharacter);
  console.log(inputArr);
  console.log(getPwd(inputArr));
});

function getPwdLength() {
  const pwdLengthInput = document.getElementById("pwdls");
  let pwdLength = +pwdLengthInput.value;
  if (pwdLengthInput.value) {
    if (+pwdLengthInput.value < 4) {
      pwdLength = 4;
      pwdLengthInput.value = 4;
    } else if (+pwdLengthInput.value > 20) {
      pwdLength = 20;
      pwdLengthInput.value = 20;
    }
  } else {
    pwdLength = 4;
  }
  return pwdLength;
}

function getPwd(arr) {
  const pwdLs = getPwdLength();
  const restLs = pwdLs - arr.length;
  const firstArr = [...arr];
  const restArr = [];
  arr.forEach((item) => restArr.push(...item));
  //   const desIdx = Math.floor(Math.random() * arr.length);
  let password = "";
  for (let i = 0; i < firstArr.length + 1; i++) {
    const targetArr = [...firstArr];
    const desIdx = Math.floor(Math.random() * targetArr.length);
    const removed = targetArr.splice(desIdx, 1);
    const strIdx = Math.floor(Math.random() * removed[0].length);
    password += removed[0][strIdx];
  }

  for (let i = 0; i < restLs; i++) {
    const ranIdx = Math.floor(Math.random() * restArr.length);
    password += restArr[ranIdx];
  }

  return password;
}
