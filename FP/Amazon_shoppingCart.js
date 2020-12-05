//Amazon shopping cart


// Implementig a cart feature
//  1. Add itms to the cart
//  2. Add 3% tax to items in cart
//  3. Buy items: cart --> purchases
//  4. Empty cart

const user = {
    name: 'Surya',
    active: true,
    cart: [],
    purchases: []
}

const AmazonHistory = [];

const compose = (f, g) => (...args) => f(g(...args))

console.log(purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToCart,
    addItemToCart
)(user, {name: 'laptop', price: 100000})
)
function purchaseItem(...fns){
    return fns.reduce(compose)
}

function addItemToCart(user, Item) {
    AmazonHistory.push(user)
    const updatedCart = user.cart.concat(Item)
    return Object.assign({}, user, { cart: updatedCart })
}

function applyTaxToCart(user){
    AmazonHistory.push(user)
    const { cart } = user
    const taxRate = 1.3
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    } )
    return Object.assign({}, user, { cart: updatedCart })
    
}

function buyItem(user){
    AmazonHistory.push(user)
    return Object.assign( {}, user, { purchases: user.cart } )
}

function emptyCart(user){
    AmazonHistory.push(user)
    return Object.assign( {}, user, { cart:[] })
}

console.log(AmazonHistory)

