var longestCommonPrefix = function (strs) {
  if (!strs.length) return ""

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (prefix && strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

let stringTeste = "Cachorro"
console.log(stringTeste.substring(1,4))

// var longestCommonPrefix2 = function (strs) {
//   if (!strs.length) return "";

  // let prefix = strs[0];
  // for (let i = 1; i < strs.length; i++) {
  //   while (prefix && strs[i].indexOf(prefix) != 0) {
  //     prefix = prefix.substring(0, prefix.length - 1);
  //   }
  // }

//   return prefix;
// };

// console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
