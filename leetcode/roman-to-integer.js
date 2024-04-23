const romanToInt = (romanNumber) => {
  let intNumber = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (
      romanNumber[i] == "I" &&
      (romanNumber[i + 1] != "V" || romanNumber[i + 1] != "X")
    ) {
      intNumber += 1;
      continue;
    } else if (romanNumber[i] == "I" && romanNumber[i + 1] == "V") {
      intNumber += 4;
      i++;
      continue;
    } else if (romanNumber[i] == "I" && romanNumber[i + 1] == "X") {
      intNumber += 9;
      i++;
      continue;
    } else if (romanNumber[i] == "V") {
      intNumber += 5;
      continue;
    } else if (romanNumber[i] == "X") {
      intNumber += 10;
      continue;
    } else if (romanNumber[i] == "X" && romanNumber[i + 1] == "L") {
      intNumber += 40;
      i++;
      continue;
    } else if (romanNumber[i] == "X" && romanNumber[i + 1] == "C") {
      intNumber += 90;
      i++;
    } else if (romanNumber[i] == "L") {
      intNumber += 50;
      continue;
    } else if (romanNumber[i] == "C") {
      intNumber += 100;
      continue;
    } else if (romanNumber[i] == "C" && romanNumber[i + 1] == "D") {
      intNumber += 400;
      i++;
    } else if (romanNumber[i] == "C" && romanNumber[i + 1] == "M") {
      intNumber += 900;
      i++;
    } else if (romanNumber[i] == "X" && romanNumber[i + 1] == "C") {
      intNumber += 90;
      i++;
      continue;
    } else if (romanNumber[i] == "D") {
      intNumber += 500;
      continue;
    } else if (romanNumber[i] == "M") {
      intNumber += 1000;
    }
  }

  return intNumber;
};

console.log(romanToInt("XXXVII"));
