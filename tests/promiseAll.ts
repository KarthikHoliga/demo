interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Order {
  orderId: number;
  item: string;
  status: string;
}

function getUser(): Promise<User> {
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Karthik" }), 1000);
  });
}

function getProducts(): Promise<Product[]> {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, name: "Laptop", price: 55000 },
        { id: 102, name: "Mouse", price: 800 },
      ]);
    }, 2000);
  });
}

function getOrders(): Promise<Order[]> {
  return new Promise<Order[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { orderId: 5001, item: "Laptop", status: "Delivered" },
        { orderId: 5002, item: "Mouse", status: "Shipped" },
      ]);
    }, 3000);
  });
}

console.log("Fetching all data...");

Promise.all([getUser(), getProducts(), getOrders()])
  .then(([user, products, orders]) => {
    console.log("User:", user);
    console.log("Products:", products);
    console.log("Orders:", orders);
  })
  .catch((error) => {
    console.error("Something failed:", error);
  });

export {};