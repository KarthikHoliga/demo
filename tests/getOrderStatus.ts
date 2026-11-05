function getOrderStatus(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Order Delivered");
    }, 3000);
  });
}

console.log("Checking Order...");

getOrderStatus().then((status: string) => {
  console.log(status);
});