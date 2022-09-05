const Leftmenu = () => {
  return `
  <div class="left-menu" id="left-menu" style="max-width: 1200px;">
  <div class="left-menu-container w-100">
    <div class="left-menu-inner-container">
      <img
        src="https://demo.casethemes.net/organio/wp-content/themes/orgio/assets/images/logo-mobile.png"
        style="
          max-height: 55px;
          max-width: 180px;
          vertical-align: middle;
          border-style: none;
          display: block;
          margin-bottom: 20px;
          text-align: center;
        "
        alt="logo"
        class="mx-auto"
      />
      <div
        class="input-group"
        style="position: relative; margin-bottom: 12px"
      >
        <input
          type="text"
          class="form-control"
          placeholder="Search..."
          aria-label="Input group example"
          aria-describedby="btnGroupAddon2"
          style="
            border: 0.51px solid #ced4da;
            border-radius: 0;
          "
        />
        <div
          class="input-group-text"
          id="btnGroupAddon2"
          style="
            border: 0.51px solid #ced4da;
            border-radius: 0;
            background-color: #ffffff;
          "
        >
          <img src="./imgs/search.png" alt="search-icon" class="icon" />
        </div>
      </div>


<div class="left-menu-headers">
<!---[1] Home -->
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
    <a href="#">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       Home
      </button>
      </a>
    </h2>
    <hr style="margin-top :1px;  margin-bottom: 2px;"  />
    <div id="flush-collapseOne" class="accordion-collapse collapse"
     aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body p-0 mt-4">
          <div id="home-accordion-body" class="text-center"></div>
       </div>
    </div>
  </div>
</div>
<!---[2] Pages -->
<div class="accordion accordion-flush" id="accordion-pages">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading-pages">
    <a href="#">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-pages" aria-expanded="false" aria-controls="flush-collapse-pages">
       Pages
      </button>
      </a>
    </h2>
    <hr style="margin-top :1px;  margin-bottom: 2px;"  />
    <div id="flush-collapse-pages" class="accordion-collapse collapse"
     aria-labelledby="flush-heading-pages" data-bs-parent="#accordion-pages">
      <div class="accordion-body p-0 ps-3">
          <div id="pages-accordion-body" class="text-center"></div>
       </div>
    </div>
  </div>
</div>
<!---[3] Shop -->

<div class="accordion accordion-flush" id="accordionFlushShop">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading-shop">
     <a href="#">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-shop" aria-expanded="false" aria-controls="flush-collapse-shop">
       Shop
      </button>
      </a>
    </h2>
    <hr style="margin-top :1px;  margin-bottom: 2px;"  />
    <div id="flush-collapse-shop" class="accordion-collapse collapse"
     aria-labelledby="flush-heading-shop" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body p-0">
          <div id="shop-accordion-body" class="text-center"></div>
       </div>
    </div>
  </div>
</div>


<!---[4] -->
<div class="accordion accordion-flush" id="accordionFlush-portfolio">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading-portfolio">
    <a href="#">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-portfolio" aria-expanded="false" aria-controls="flush-collapse-portfolio">
       Portfolio
      </button>
      </a>
    </h2>
    <hr style="margin-top :1px;  margin-bottom: 2px;"  />
    <div id="flush-collapse-portfolio" class="accordion-collapse collapse"
     aria-labelledby="flush-heading-portfolio" data-bs-parent="#accordionFlush-portfolio">
      <div class="accordion-body p-0">
          <div id="portfolio-accordion-body" class="text-center"></div>
       </div>
    </div>
  </div>
</div>

<!---[5] -->
<div class="accordion accordion-flush" id="accordionFlushBlog">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
     <a href="#">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-blog" aria-expanded="false" aria-controls="flush-collapse-blog">
       Blog
      </button>
      </a>
    </h2>
    <hr style="margin-top :1px;  margin-bottom: 2px;"  />
    <div id="flush-collapse-blog" class="accordion-collapse collapse"
     aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushBlog">
      <div class="accordion-body" style="padding: 25px 20px 22px 20px;">
          <div id="blog-accordion-body" class="text-center" style="max-width: 1200px;"></div>
       </div>
    </div>
  </div>
</div>
<!---[6] Elements-->
<div class="accordion accordion-flush" id="accordionFlushElements">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
     <a href="#">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-elements" aria-expanded="false" aria-controls="flush-collapse-elements">
       Elements
      </button>
      </a>
    </h2>
    <hr style="margin-top :1px;  margin-bottom: 2px;"  />
    <div id="flush-collapse-elements" class="accordion-collapse collapse"
     aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushElements">
      <div class="accordion-body">
          <div id="elements-accordion-body" class="text-center"></div>
       </div>
    </div>
  </div>
</div>

    </div>
    </div>
 
  </div>
</div>
`;
};

export default Leftmenu;
