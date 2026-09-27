let numbers = [10,20,30,100];
let target = 3;
let includes = numbers.includes(target);
console.log(includes)


let validCouponCodes = ["SWIGGY50", "FIRSTORDER", "FREESHIP"];
let enteredCode = "SWIGGY50";

if (validCouponCodes.includes(enteredCode)) {
  console.log("Coupon applied! ₹50 off");
} else {
  console.log("Invalid coupon code");
}


let dishTags = ["veg", "bestseller", "spicy"];
let dietaryFilter = "veg";

if (dishTags.includes(dietaryFilter)) {
  console.log("Show this dish under Veg filter");
}


let completedStages = ["Order Placed", "Restaurant Confirmed", "Food Prepared"];
let checkStage = "Out for Delivery";

if (!completedStages.includes(checkStage)) {
  console.log("Still waiting for this stage");
}