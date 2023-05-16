function range_vision(number) {
    const digits = Array.from(String(number), Number);
    let minValue = Infinity;
  
    for (let i = 0; i < digits.length; i++) {
      const leftRange = digits.slice(Math.max(0, i - digits[i]), i);
      const rightRange = digits.slice(i + 1, i + digits[i] + 1);
      const visionValue = leftRange.concat(rightRange).reduce((sum, digit) => sum + digit, 0);
  
      if (digits[i] === 1 && visionValue < minValue) {
        minValue = visionValue;
      }
    }
  
    return minValue === 8;
  }
  
  // Ejemplo de uso
  const number = 34315;
  const result = range_vision(number);
  console.log(result); // true