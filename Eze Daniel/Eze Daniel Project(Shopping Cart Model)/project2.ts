interface ProductMart {
  id: number;
  price: number;
  name: string;
  quantity: number;
}

class ProductCart implements ProductMart {
  constructor(
    public id: number,
    public price: number,
    public name: string,
    public quantity: number
  ) {}
}
class TechProductCart implements ProductMart {
  constructor(
    public id: number,
    public price: number,
    public name: string,
    public quantity: number
  ) {}
}

//Product Interface: Define a generic interface for products.
//Concrete Product Classes: Implement different types of products such as electronics, clothing,
//books, etc., each implementing the product interface.
//Shopping Cart Class: Implement a shopping cart that aggregates products.
//User Interface Class: Implement an interface for the user to interact with the system.
class shoppingCart {
  private items: ProductMart[] = [];
  addItem(items: ProductMart) {
    this.items.push(items);
  }
  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
  getItems() {
    return this.items;
  }
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
class UserInterface {
  private cart: shoppingCart;
  constructor(cart: shoppingCart) {
    this.cart = cart;
  }
  displayproducts(products: ProductMart[]) {
    console.log("Available Products");
    products.forEach((product) => {
      console.log(product.name);
    });
  }
  addProductToCart(productId: number) {
    const product = getProductById(productId);
    if (product == null) {
      console.log("Product not found");
      return;
    }
    if (product) {
      this.cart.addItem(product);
      console.log(`${product.name} added to cart.`);
    }
  }
  removeFromCart(productId: number) {
    this.cart.removeItem(productId);
    console.log("Product removed from cart.");
  }

  displayTotal() {
    console.log(`Total Price: $${this.cart.getTotalPrice()}`);
  }
}
function getProductById(productId: number): ProductMart | undefined {
  const product: ProductCart[] = [
    new ProductCart(1, 66, "cloth", 5),
    new TechProductCart(2, 37, "Laptop", 5),
    new ProductCart(3, 10, "Beverges", 5),
  ];
  return product.find((product) => product.id === productId);
}
const cart = new shoppingCart();
const ui = new UserInterface(cart);
ui.displayproducts([
  new ProductCart(1, 66, "cloth", 5),
  new TechProductCart(2, 37, "Laptop", 5),
  new ProductCart(3, 10, "Beverges", 5),
]);
ui.addProductToCart(1);
ui.addProductToCart(2);
ui.displayTotal();
ui.removeFromCart(1);
