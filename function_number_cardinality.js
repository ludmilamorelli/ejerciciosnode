function number_cardinality(numero) {
    if (numero % 10 === 0) {
      return "zero";
    } else if (numero % 10 === 5) {
      return "five";
    } else if (numero % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  console.log(number_cardinality(100));
