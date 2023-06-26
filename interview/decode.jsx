
// Decode a string using a specific decoding scheme
function decodeString(str, decodingScheme) {
    let decodedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (decodingScheme.hasOwnProperty(char)) {
        decodedStr += decodingScheme[char];
      } else {
        decodedStr += char;
      }
    }
  
    return decodedStr;
  }
  
  // Decoding scheme
  const decodingScheme = {
    a: 'z',
    b: 'y',
    c: 'x',
    d: 'w',
    e: 'v',
    f: 'u',
    g: 't',
    h: 's',
    i: 'r',
    j: 'q',
    k: 'p',
    l: 'o',
    m: 'n',
    n: 'm',
    o: 'l',
    p: 'k',
    q: 'j',
    r: 'i',
    s: 'h',
    t: 'g',
    u: 'f',
    v: 'e',
    w: 'd',
    x: 'c',
    y: 'b',
    z: 'a',
  };
  
  
  // Input string to decode
  const encodedString = 'santo9sh0';
  
  // Decode the string
  const decodedString = decodeString(encodedString, decodingScheme);
  
  console.log(decodedString);  // Output: war
  
