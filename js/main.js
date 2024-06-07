
const encode = string => string.replace(/(.)\1+/g, (chunk, char) => chunk.length + char);
const decode = string => string.replace(/(\d+)(.)/g, (pair, count, char) => char.repeat(count));

function performEncode() {
  const input = document.getElementById('inputText').value;
  const encoded = encode(input);
  document.getElementById('outputText').value = encoded;
}

function performDecode() {
  const input = document.getElementById('inputText').value;
  const decoded = decode(input);
  document.getElementById('outputText').value = decoded;
}