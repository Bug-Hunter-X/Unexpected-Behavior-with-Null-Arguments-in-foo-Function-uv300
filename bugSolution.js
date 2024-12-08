function foo(a, b) {
  if (a === null || b === null) {
    console.error('Null values are not allowed.');
    return null; // Or throw an error
  }
  // ...
}