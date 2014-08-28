module.exports = function thirteen(number) {
  if (number !== undefined && typeof number != "number") {
    return new Error("I can only deal with numbers");
  } else {
    return number * 13;
  }
};
