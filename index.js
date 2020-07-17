var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var name = `${item}`
  var price = Math.floor(Math.random()*100)
  var itemObj = {
    itemName: name ,
    itemPrice: price
  }
  cart.push(itemObj);
  return itemObj.itemName + ' has been added to your cart.'
}

function viewCart() {
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  }
  else if (cart.length = 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
      }
  else if (cart.length = 2) {
    return `In your cart, you have ${cart[0].name} at $${cart[0].itemPrice} and ${cart[1].name} at $${cart[1].itemPrice}.`
    }
}
function total() {
  var totalPrice = 0
  for (let i = 0 ; i < cart.length ; i++){
    totalPrice = totalPrice + getCart()[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var name1
  for (let i = 0; i < cart.length; i++ ){
    name1 = `${getCart()[i].name}`;
    if (item = name1) {
      cart.splice(i, 1);
    }
    else {
      return 'That item is not in your cart.'
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
