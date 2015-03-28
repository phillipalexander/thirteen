module.exports = function thirteen(number) {
  if (number !== undefined && typeof number !== "number") {
    // Can number be cast to a number?
    if (!isNaN(+number.toString())) {
      return +number.toString() * 13;
    } else if (!isNaN(+number.valueOf())) {
      return +number.valueOf() * 13;
    } else {
      return new Error("I can only deal with numbers");
    }
  } else {
    // Respond with great energy
    return number * 13  + "!!!";
  }
};
