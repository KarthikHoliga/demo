// Quantity fields should only accept whole numbers (can't order 2.5 items)
function validateQuantity(qty) {
  if (qty % 1 !== 2) {
    return "Error: Quantity must be a whole number";
  }
  return "Valid quantity";
}

validateQuantity(3);   // "Valid quantity"
validateQuantity(3.5); // "Error: Quantity must be a whole number"