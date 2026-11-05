interface Product {
  readonly productId: number;   // cannot be changed after creation
  productName: string;          // required
  price: number;                // required
  discount?: number;            // optional (percentage)
}

function getFinalPrice(product: Product): number {
  const discountPercent = product.discount ?? 0;
  return product.price - (product.price * discountPercent) / 100;
}

const product1: Product = { productId: 1, productName: "Laptop", price: 50000, discount: 10 };
const product2: Product = { productId: 2, productName: "Mouse", price: 800 };  // no discount
const product3: Product = { productId: 3, productName: "Keyboard", price: 2000, discount: 25 };

const products: Product[] = [product1, product2, product3];

products.forEach((p) => {
  console.log(`ID: ${p.productId}`);
  console.log(`Name: ${p.productName}`);
  console.log(`Price: ₹${p.price}`);
  console.log(`Discount: ${p.discount ?? 0}%`);
  console.log(`Final Price: ₹${getFinalPrice(p)}`);
  console.log("---------------------");
});