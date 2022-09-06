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
</nav>
`;
}
export { MyNav };
