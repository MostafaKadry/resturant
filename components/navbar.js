function MyNav() {
  return `<nav
  bg="light"
  class="custom-nav bg-white-720 navbar navbar-expand-lg bg-light"
>
  <div
    class="custom-grids"
    style="width: 90%; margin: auto"
  >
    <div class="navbar-brand" style="margin: 10px 15px">
      <img
        src="https://demo.casethemes.net/organio/wp-content/themes/orgio/assets/images/logo-mobile.png"
        class="d-inline-block align-top"
        alt="website-logo"
        style="
          max-height: 44px;
          vertical-align: middle;
          border-style: none;
          height: auto;
        "
      />
    </div>
    <div class="d-none show-navicons-720 m-auto text-end" style="justify-content: flex-end; width: 93%;">
      <span
        class="profile-toggler d-inline-block"
        id="profile-toggler"
        onclick="showLogin()"
      >
        <img
          src="./imgs/user.png"
          alt="Profile"
          class="profile-icon icon"
        />
      </span>
      <span class="cart-toggler mx-2 d-inline-block" onclick="showCart()">
        <img
          src="./imgs/shopping-cart.png"
          alt="Profile"
          class="profile-icon icon"
        />
      </span>
      <span
        class="menu-toggler d-inline-block"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        onclick="toggle()"
      >
        <div class="hr" id="hr-1"></div>
        <div class="hr" id="hr-2"></div>
        <div class="hr" id="hr-3"></div>
      </span>
    </div>
    <div class="hide-720 m-auto">
      <ul
        class="navbar-nav mr-auto justify-content-center"
        style="
          line-height: 70px;
          font-family: inherit;
          color: #071c1f;
        "
      >
        <a href="#" class="nav-item active">
          <span class="d-inane-block">Home</span>
          <span class="rotate-plus">+</span>
        </a>
        <a href="#" class="nav-item">
          <span class="d-inline-block">Pages</span>
          <span class="rotate-plus">+</span>
        </a>
        <a href="#" class="nav-item">
          <span class="d-inline-block">Shop</span>
          <span class="rotate-plus">+</span>
        </a>
        <a href="#" class="nav-item">
          <span class="d-inline-block">Portfolio</span>
          <span class="rotate-plus">+</span>
        </a>
        <a href="#" class="nav-item">
          <span class="d-inline-block">Plog</span>
          <span class="rotate-plus">+</span>
        </a>
        <a href="#" class="nav-item">
          <span class="d-inline-block">Elements</span>
          <span class="rotate-plus">+</span>
        </a>
      </ul>
    </div>
    <div class="hide-720 m-auto">
      <div class="row">
        <div class="text-end col p-0 col-md-3">
          <img
            src="./imgs/customer-support.svg"
            alt="customer-support"
            class="customer-support-icon"
          />
        </div>
        <div class="p-0 col">
          <div class="row">
            <div class="col-md-12">
              <a
                href="tel:+901570584567"
                style="font-size: 18px; color: #101a2c"
              >
                +90 157 058 4567
              </a>
            </div>
            <div class="col-md-12">
              <label
                style="
                  font-size: 13px;
                  color: #8f8f8f;
                  display: block;
                  margin-top: 3px;
                  margin-bottom: 0;
                "
              >
                24/7 Support
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sub-nav hide-720">  
    <div class="sub-nav-container">
        <div class="sub-nav-accordion" id="accordionExample">
        <i class="fa-solid fa-bars" style="display: flex; align-items: center;"></i>
        <span>Browse Categories</span>
        <i class="fa-solid fa-angle-down" style="display: flex; align-items: center;"></i>
        <i class="fa-solid fa-angle-up d-none" style="align-items: center;"></i>
    </div>
      <div class="sub-nav-search-container">
      <form class="sub-nav-search-form w-100" role="search">
      <div class="sub-nav-select">
      <span class="select-category-default">Select a Category</span>
      <ul class="select-category-list"><li data-value="" class="option selected focus">Select a Category</li><li data-value="organic" class="option">Organic</li><li data-value="bread-bakery" class="option">Bread &amp; Bakery</li><li data-value="coffee" class="option">Coffee</li><li data-value="discount-weekly" class="option">Discount Weekly</li><li data-value="dry-food" class="option">Dry Food</li><li data-value="food" class="option">Food</li><li data-value="food-drinks" class="option">Food Drinks</li><li data-value="fresh-fish" class="option">Fresh Fish</li><li data-value="fresh-fruits" class="option">Fresh Fruits</li><li data-value="fresh-meat" class="option">Fresh Meat</li><li data-value="fresh-nuts" class="option">Fresh Nuts</li><li data-value="grocery-frozen" class="option">Grocery &amp; Frozen</li><li data-value="millk-cream" class="option">Millk Cream</li><li data-value="nature" class="option">Nature</li><li data-value="recipies" class="option">Recipies</li><li data-value="soya-dairy-free" class="option">Soya &amp; Dairy Free</li><li data-value="vegetable" class="option">Vegetable</li></ul>
      </div>
      <i class="fa-solid fa-angle-down" style="display: flex; align-items: center; background: #ffffff; color: #9b9b9b; position: absolute; left: 27%;"></i>
        <input class="" type="search" placeholder="Search Products..." aria-label="Search">
        <button class="btn select-search-btn" type="submit">
        <img src="./imgs/light-search.png" alt="search-icon" class="icon" />
        </button>
      </form>
      </div>
      <div class="sub-nav-icons">
      <span
        class="sub-nav-heart-icon-container"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        onclick=""
      >
      <a class="" href="https://demo.casethemes.net/organio/wishlist/">
        <img src="./imgs/light-heart.png" class="profile-icon icon" alt="heart"/> 
      </a>
      </span>

      <span class="sub-nav-cart-icon-container" onclick="showCart()" style="margin-left: 20px !important;">
        <img
          src="./imgs/light-cart.png"
          alt="Profile"
          class="profile-icon icon"
        />
      </span>

               
      <span
        class="sub-nav-profile-icon-container"
        id="profile-toggler"
        onclick="showLogin()"
      >
        <img
          src="./imgs/light-user.png"
          alt="Profile"
          class="profile-icon icon"
        />
      </span>
    </div>
   </div>

  </div>


</nav>
`;
}
export { MyNav };
