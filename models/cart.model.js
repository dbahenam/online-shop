class Cart {
  constructor(items = [], totalItems = 0, totalPrice = 0) {
    this.items = items;
    this.totalItems = totalItems;
    this.totalPrice = totalPrice;
  }
  addItem(product) {
    const cartItem = {
      product: product,
      quantity: 1,
      totalPrice: product.price,
    };
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.id === product.id) {
        cartItem.quantity = this.items[i].quantity + 1;
        cartItem.totalPrice = cartItem.quantity * product.price;
        this.items[i] = cartItem;
        this.totalItems++;
        this.totalPrice += cartItem.totalPrice;
        return;
      }
    }
    this.items.push(cartItem);
    this.totalItems++;
    this.totalPrice += cartItem.totalPrice;
  }
}

module.exports = Cart;