function isPalindromeNumber(x) {
  const toString = x.toString();
  let reverseNumber = "";

  for (let i = toString.length - 1; i >= 0; i--) {
    reverseNumber += toString[i];
  }

  console.log(x);
  console.log(reverseNumber);

  if (x == parseInt(reverseNumber)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindromeNumber(121));
