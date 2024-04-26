function getPefix(strs) {
  let prefix = "";

  for (let i = 0; i < strs.length; i++) {
    let currentChar = "";
    let nextChar = "";

    if (strs[i][i] != undefined) {
      currentChar = strs[i][i];
    }

    if (i < strs.length - 1) {
      nextChar = strs[i + 1][i];
    } else if (strs.length == 1) {
      prefix = currentChar;
    }

    console.log("Actual: " + currentChar)
    console.log("Prox:" + nextChar)

    if (currentChar == nextChar) {
      prefix += currentChar;
    } else {
      return prefix;
    }
  }

  return prefix;
}

console.log(getPefix(["flower","flower","flower","flower"]));
