const Cart = () => {
  return `
          
          <div class="cart-black-back" id="cart-black-back">
              <div class="cart-container" id="cart-container">
                <div class="cart-close-container">
                <div class="cart-header">	Cart	 </div>
                <div class="cart-close-icon-container" onclick="hideCart()">
                    <i class="fa-solid fa-xmark fa-xmark-cart"></i>
                </div>
            
                </div> 

                <div class="cart-body">
                  <div class="empty">
                  <div class="cart-img-container">
                   <img src="./imgs/shopping-cart.png" alt="Profile">
                  </div>
                
                    <span>Your cart is empty</span>
                    <a class="btn btn-animate" href="https://demo.casethemes.net/organio/shop/">Browse Shop</a>
                  </div>
                </div>

              </div>
          </div>

    `;
};
export default Cart;
