# Shopping Cart System Documentation

## ProductMart Interface:

- **id**: A unique identifier for the product.
- **price**: The price of the product.
- **name**: The name or title of the product.
- **quantity**: The quantity of the product available.

## ProductCart Class:

- **Constructor**: Initializes a product with id, price, name, and quantity.
- Implements the `ProductMart` interface.

## TechProductCart Class:

- **Constructor**: Initializes a technical product (presumably a subclass of `ProductCart`).
- Implements the `ProductMart` interface.

## Shopping Cart Class:

- **addItem(items: ProductMart)**: Adds a product item to the shopping cart.
- **removeItem(id: number)**: Removes a product item from the shopping cart based on its id.
- **getItems()**: Retrieves all items in the shopping cart.
- **getTotalPrice()**: Calculates and returns the total price of all items in the shopping cart.

## UserInterface Class:

- **Constructor(cart: shoppingCart)**: Initializes the user interface with a shopping cart instance.
- **displayproducts(products: ProductMart[])**: Displays available products to the user.
- **addProductToCart(productId: number)**: Adds a product to the shopping cart based on its id.
- **removeFromCart(productId: number)**: Removes a product from the cart based on its id.
- **displayTotal()**: Displays the total price of the products in the shopping cart.

## getProductById Function:

- **getProductById(productId: number)**: Retrieves a product from the available products based on its id.

## Usage:

- Creates a new shopping cart instance.
- Creates a new user interface instance with the shopping cart.
- Displays available products.
- Adds products to the cart.
- Displays the total price of the items in the cart.
- Removes a product from the cart.
