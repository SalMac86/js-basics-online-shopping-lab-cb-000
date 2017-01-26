var cart = []; //our empty cart

function setCart(newCart) { //takes the a new cart, replaces the old
  cart = newCart;
}

function total() { //tallies up the cost of everything in the cart
  let t = 0   // let allows us to refresh the total each time

  for (var i = 0, l = cart.length; i < l; i++) { // index up to cart length
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){  //yup, that's the cart object
  return cart;
}

function makePrice() { //dynamically makes a price
  let price = 0;
  price = (Math.floor(Math.random() * 100));
  return price;
}

function addToCart(item){
  var thisPrice = makePrice();
  cart.push({[item]:thisPrice});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  var cartView = "In your cart, you have "
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
    return
  }
  else {
    let i = 0
    for (var  l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        cartView += `${item} at $${cart[i][item]}`
      }
      cartView += ", "
      }
    cartView = cartView.slice(0, -2) + ".";
    console.log(cartView);
    return cart
  }
}

function removeFromCart(item) {
  var removed = undefined;
  for(var i=0; i<cart.length; i++) {
      if(cart[i].hasOwnProperty([item])) {
          cart.splice(i, 1);
          removed = true;
      }
  }
  if (!removed) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  }
}
