// 1: 
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  alert( ucFirst("john") ); // John
  //

// 2: 
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + ' ' : str;
  }
//

//: 3
let aArray = ["Jazz", "Blues"];
alert(aArray);
aArray.push("Rock-n-Roll");
alert(aArray);
aArray[Math.floor(aArray.length/2)] = "Classics"
alert(aArray);
alert(aArray);
aArray.unshift("Reggae");
aArray.unshift("Rap");
alert(aArray)
//

//:4 Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }