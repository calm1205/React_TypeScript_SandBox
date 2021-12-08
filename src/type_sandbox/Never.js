var echo = function (word) {
  console.log(word);
};
console.log(echo('hello world'));
// => undefinedが返る。
// undefinedすらも返さないのがnever
var error = function (message) {
  throw error(message);
};
error('This is an error.');
