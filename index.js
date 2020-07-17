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
  var itemObj = {itemName: name , itemPrice: price}
  cart.push(itemObj);
  return itemObj.itemName + ' has been added to your cart.'
}

function viewCart() {
  var string = "In your cart, you have";
  if (cart.length == 0){
    return 'Your shopping cart is empty.'
  }
  else {
    for (let i = 0 ; i < cart.length ; i++){
      string = `${string} ${cart[i].itemName} at $${cart[i].itemPrice},`
      if (cart.length == 1|| i<cart.length-1) {
        string = string
      }
      else if (i == cart.length - 2){
        string = `${string}, and`
      }
      else {
        string = `${string}`
      }
    }
    return `${string}.`
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
