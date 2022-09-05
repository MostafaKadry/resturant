import { header } from "../database.js";

const leftmenuHomeBody = () => {
  header.forEach((e) => {
    document.getElementById("home-accordion-body").innerHTML += `
    <div class="box-shadow-effect rounded"> 
      <div class="box-shadow-effect-container w-100">
           <div class="img-shadow-effect">
      <a href="${e.url}" class="w-100">
      <img class="rounded w-100 h-100" src="${e.imgUrl}" alt=""/>
      </a>
      </div>
        <div class="home-accordion-title">
            Home <span style="color: #4d8526;">0${e.id}</span> ${
      e.id === 2 ? " (Megashop) " : ""
    }
        </div>
      </div>
    </div>
        <hr style="margin-top :2rem;" />
  `;
  });
};
export const leftmenuPagesBody = () => {
  document.getElementById("pages-accordion-body").innerHTML = `
  <ul class="text-start"
   style="display: block;">
    <li class="menu-item-page">
   <a href="https://demo.casethemes.net/organio/about/">
   <span>About Us</span>
   </a>
   </li>
   <li
   class="menu-item-page">
   <a href="https://demo.casethemes.net/organio/services/">
   <span>Our Services</span>
   </a>
   </li>
   <li class="menu-item-page">
   <a href="https://demo.casethemes.net/organio/service/organic-store-services/">
   <span>Single Service</span>
   </a></li>
   <li class="menu-item-page">
   <a href="https://demo.casethemes.net/organio/team/"><span>Our Team</span>
   </a></li>
    <li 
    class="menu-item-page">
    <a href="https://demo.casethemes.net/organio/contact-us/">
    <span>Contact Us</span>
    </a></li>
     <li 
      class="menu-item-page">
      <a href="https://demo.casethemes.net/organio/testimonials/"><span>Testimonials</span> 
      </a></li>
      <ul class="menu-item-page">
      <div class="accordion accordion-flush" id="accordion-user-pages">
<div class="accordion-item">
<h2 class="accordion-header" id="flush-heading-pages">
<button style="color:#000000 !important; font-size:14px !important; line-height: 34px" class="accordion-button py-0 collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapse-user-pages" aria-expanded="false" aria-controls="flush-collapse-user-pages">
<a href="#"> 
<span>User Pages</span>
</a>
</button>
</h2>

<div id="flush-collapse-user-pages" class="accordion-collapse collapse"
aria-labelledby="flush-heading-pages" data-bs-parent="#accordion-user-pages">
<div class="accordion-body p-0 ps-3">
<div id="user-pages-accordion-body" class="">

<ul class="sub-menu">
<li class="menu-item-page ">
<a href="https://demo.casethemes.net/organio/sign-in/"><span>Sign In</span>
</a></li><li  
class="menu-item-page ">
<a href="https://demo.casethemes.net/organio/sign-up/"><span>Sign Up</span>
</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</ul>
<li 
class="menu-item-page">
<a href="https://demo.casethemes.net/organio/404-page"><span>404 Page</span>
</a></li>
<li 
class="menu-item-page">
<a href="https://demo.casethemes.net/organio/landing/">
<span>Landing</span>
</a>
</li>
</ul>
  `;
  return;
};

export const leftmenuShopBody = () => {
  document.getElementById("shop-accordion-body").innerHTML = `

<ul class="menu-item-shop">
Product Layout
<ul class="sub-menu">
    <li> <a href="https://demo.casethemes.net/organio/product-grid-2-columns/">
<span>Grid 2 Columns</span> </a></li>
<li>
<a href="https://demo.casethemes.net/organio/product-grid-3-columns/">
<span>Grid 3 Columns</span> </a></li>
<li> 
<a href="https://demo.casethemes.net/organio/product-grid-4-columns/"> 
<span>Grid 4 Columns</span> </a>
</li>
<li> 
<a href="https://demo.casethemes.net/organio/product-grid-4-columns-full-width/">
<span>Grid 4 Columns Wide</span> </a>
</li>
</ul>
</ul>

<ul class="menu-item-shop"> 
<span>Product Layout</span></ul>

<ul class="sub-menu">
<li>
<a href="https://demo.casethemes.net/organio/shop/?sidebar-shop=left">
<span>Grid Left Sidebar</span> </a>
</li>
<li> 
<a href="https://demo.casethemes.net/organio/shop/?sidebar-shop=right">
<span>Grid Right Sidebar</span> </a></li>
<li>
<a href="https://demo.casethemes.net/organio/shop/?shop-layout=list"> 
<span>Product List</span> </a></li>
<li> 
<a href="https://demo.casethemes.net/organio/product-masonry/"> 
<span>Product Masonry</span> </a></li>
</ul>


<ul class="menu-item-shop" style="visibility: visible;"> 
<span>Product Types</span></ul>


<ul class="sub-menu">
<li> 
<a href="https://demo.casethemes.net/organio/product/indigi-teas/">
<span>Simple</span> 
</a></li><li> 
<a href="https://demo.casethemes.net/organio/product/organic-juice/">

<span>Variable</span>
</a></li><li>
<a href="https://demo.casethemes.net/organio/product/raw-cashew-butter/">

<span>External</span>
</a></li><li> 
<a href="https://demo.casethemes.net/organio/product/blueberry-cookies/">
<span>Grouped</span> </a></li>
</ul>

<ul class="menu-item-shop"> 
<span>Shop Pages</span>
</ul>
<ul class="sub-menu">
<li> <a href="https://demo.casethemes.net/organio/sign-in/"> 
<span>My Account</span> </a></li><li> <a href="https://demo.casethemes.net/organio/cart/"> 
<span>Cart</span> </a></li><li> <a href="https://demo.casethemes.net/organio/checkout/"> 
<span>Checkout</span> </a></li><li> <a href="https://demo.casethemes.net/organio/wishlist/"> 
<span>Wishlist</span> </a></li>
</ul>
`;
  return;
};

export const leftmenuPortfolioBody = () => {
  document.getElementById("portfolio-accordion-body").innerHTML = `

   <ul class="menu-item-portfolio">
<div class="accordion accordion-flush" id="accordion-portfolio-grid">
<div class="accordion-item">
<h2 class="accordion-header mb-2" id="flush-heading-portfolio-grid">
<button style="color:#000000 !important; font-size:14px !important; line-height: 34px"
 class="accordion-button py-0 collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapse-portfolio-grid" aria-expanded="false" aria-controls="flush-collapse-portfolio-grid">
<a href="#"> 
    <span>Portfolio Grid</span>
</a>
</button>
</h2>
<div id="flush-collapse-portfolio-grid" class="accordion-collapse collapse"
aria-labelledby="flush-heading-portfolio-grid" data-bs-parent="#accordion-portfolio-grid">
<div class="accordion-body p-0 ps-3">
<div id="portfolio-grid-accordion-body" class="">

   <ul class="sub-menu">
   <li  class="menu-item-portfolio">
   <a href="https://demo.casethemes.net/organio/portfolio-grid-2-columns/">
   <span>2 Columns</span>
   </a></li>
   
   <li class="menu-item-portfolio">
     <a href="https://demo.casethemes.net/organio/portfolio-grid-3-columns/">
     <span>3 Columns</span>
     </a></li>
     <li class="menu-item-portfolio">
     <a href="https://demo.casethemes.net/organio/portfolio-grid/"><span>4 Columns</span>
      </a></li>
      <li 
      class="menu-item-portfolio">
      <a href="https://demo.casethemes.net/organio/portfolio-grid-4-columns-wide/"><span>4 
      Columns Wide</span>
      </a></li>
      <li class="menu-item-portfolio">
      <a href="https://demo.casethemes.net/organio/portfolio-grid-3-columns-full-width-no-space/">
       <span>Full Width No Space</span></a>
       </li>
       </ul>
</div>
</div>
</div>
</div>
</div>

<div class="accordion accordion-flush" id="accordion-portfolio-masonry">
<div class="accordion-item">
<h2 class="accordion-header" id="flush-heading-portfolio-masonry">
<button style="color:#000000 !important; font-size:14px !important; line-height: 34px"
 class="accordion-button py-0 collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapse-portfolio-masonry" aria-expanded="false" aria-controls="flush-collapse-portfolio-masonry">
<a href="#"> 
          <span>Portfolio Masonry</span>
</a>
</button>
</h2>
<div id="flush-collapse-portfolio-masonry" class="accordion-collapse collapse"
aria-labelledby="flush-heading-portfolio-masonry" data-bs-parent="#accordion-portfolio-masonry">
<div class="accordion-body p-0 ps-3">
<div id="portfolio-masonry-accordion-body" class="">
       <ul class="sub-menu">
       <li class="menu-item-portfolio">
       <a href="https://demo.casethemes.net/organio/portfolio-masonry/">
       <span>Portfolio Masonry 1
       </span></a></li><li
        class="menu-item-portfolio">
        <a href="https://demo.casethemes.net/organio/portfolio-masonry-2/">
        <span>Portfolio 
        Masonry 2</span></a>
        </li><li class="menu-item-portfolio">
        <a href="https://demo.casethemes.net/organio/portfolio-masonry-3/">
         <span>Portfolio Masonry 3</span>
         </span></a></li>
         </ul>
</div>
</div>
</div>
</div>
</div>

<li class="menu-item-portfolio">
<a href="https://demo.casethemes.net/organio/portfolio-gallery/"><span>Portfolio Gallery</span>
</a>
</li>

<li class="menu-item-portfolio">
<a href="https://demo.casethemes.net/organio/portfolio/holding-fresh-radishes/">
<span>Portfolio Details</span>
</span>
</a>
</li>
</ul>   
  `;
  return;
};
export const leftmenuBlogBody = () => {
  document.getElementById("blog-accordion-body").innerHTML = `
<ul class="menu-item-blog">


<li class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/blog-carousel/">
<span>Blog Carousel</span>
</a>
</li>


<div class="accordion accordion-flush" id="accordion-blog-list">
<div class="accordion-item">
<h2 class="accordion-header mb-2" id="flush-heading-blog-list">
<button style="color:#000000 !important; font-size:14px !important; line-height: 34px"
class="accordion-button py-0 collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapse-blog-list" aria-expanded="false" aria-controls="flush-collapse-blog-list">
<a href="#"> 
    <span>Blog List</span>
</a>
</button>
</h2>
<div id="flush-collapse-blog-list" class="accordion-collapse collapse"
aria-labelledby="flush-heading-blog-list" data-bs-parent="#accordion-blog-list">
<div class="accordion-body p-0 ps-3">
<div id="blog-list-accordion-body" class="">
<ul class="sub-menu">
<li class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/blog-list-left-sidebar/">
<span>Left Sidebar</span></a></li>
<li class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/blog-list-full-width/">
<span>Full Width</span>
</a>
</li>
<li class="menu-item-blog"><a href="https://demo.casethemes.net/organio/blog/">
<span>Right Sidebar</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>


<div class="accordion accordion-flush" id="accordion-blog-grid">
<div class="accordion-item">
<h2 class="accordion-header" id="flush-heading-blog-grid">
<button style="color:#000000 !important; font-size:14px !important; line-height: 34px"
 class="accordion-button py-0 collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapse-blog-grid" aria-expanded="false" aria-controls="flush-collapse-blog-grid">
<a href="#"> 
        <span>Blog Grid</span>
</a>
</button>
</h2>
<div id="flush-collapse-blog-grid" class="accordion-collapse collapse"
aria-labelledby="flush-heading-blog-grid" data-bs-parent="#accordion-blog-grid">
<div class="accordion-body p-0 ps-2">
<div id="blog-grid-accordion-body" class="">
<ul class="sub-menu"><li  class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/blog-grid-2-columns/"><span>2 Columns</span>
</a></li><li class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/blog-grid-2-columns-left-sidebar/">
<span>2 Columns : Left Sidebar</span></a></li><li class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/blog-grid-2-columns-right-sidebar/">
<span>2 Columns : Right Sidebar</span></a></li><li 
class="menu-item-blog"><a href="https://demo.casethemes.net/organio/blog-grid-3-columns/">
<span>3 Columns</span></a></li><li class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/blog-grid-4-columns-full-width/">
<span>4 Columns : Full Width</span></a></li></ul>
</div>
</div>
</div>
</div>
</div>

<li class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/blog-masonry/"><span>Blog Masonry</span></a>
</li>


<div class="accordion accordion-flush mb-2" id="accordion-blog-details">
<div class="accordion-item">
<h2 class="accordion-header" id="flush-heading-blog-details">
<button style="color:#000000 !important; font-size:14px !important; line-height: 34px"
 class="accordion-button py-0 collapsed" type="button" data-bs-toggle="collapse"
data-bs-target="#flush-collapse-blog-details" aria-expanded="false" aria-controls="flush-collapse-blog-details">
<a href="#"> 
      <span>Blog Details</span>
</a>
</button>
</h2>
<div id="flush-collapse-blog-details" class="accordion-collapse collapse"
aria-labelledby="flush-heading-blog-details" data-bs-parent="#accordion-blog-details">
<div class="accordion-body p-0 ps-3">
<div id="blog-details-accordion-body" class="">

<ul class="sub-menu"><li 
class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/zechsal-magnesium-flakes-especially-made/">
<span>Left Sidebar</span></a></li>
<li class="menu-item-blog"><a 
href="https://demo.casethemes.net/organio/best-guide-to-shopping-for-organic-ingredients/">
<span>Full Width</span></a></li>
<li class="menu-item-blog">
<a href="https://demo.casethemes.net/organio/we-advocate-swapping-screen-time-for-crafting/">
<span>Right Sidebar</span>
</a>
</li>
</ul>

</div>
</div>
</div>
</div>
</div>

</ul> `;
  return;
};
export const leftmenuElementsBody = () => {
  document.getElementById("elements-accordion-body").innerHTML = `
  <ul class="menu-item-elements">
  <li>
<a href="https://demo.casethemes.net/organio/elements/accordions-toggles/" style="pointer-events: auto;"> 
<i aria-hidden="true" class="fas fa-bars"></i>
<span>Accordions &amp; Toggles</span>
 </a>
</li>

 <li>
<a href="https://demo.casethemes.net/organio/elements/blog-carousel/"
style="pointer-events: auto;"> 
<i aria-hidden="true" class="fas fa-newspaper"></i> 
<span>Blog Carousel</span> </a>
</li>
<li> <a href="https://demo.casethemes.net/organio/elements/blog-grid/"
style="pointer-events: auto;"> <i aria-hidden="true" class="far fa-newspaper"></i> <span>Blog Grid</span>
</a></li><li> <a href="https://demo.casethemes.net/organio/elements/buttons/" 
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-cube"></i> <span>Buttons</span> 
</a></li><li> <a href="https://demo.casethemes.net/organio/elements/clients/" 
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-user-astronaut"></i> 
<span>Clients Carousel</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/contact-form-7/"
style="pointer-events: auto;"> <i aria-hidden="true" class="fab fa-wpforms"></i> 
<span>Contact Form 7</span> </a></li>
  
  </ul>



<ul class="menu-item-elements">
<li> 
<a href="https://demo.casethemes.net/organio/elements/countdown/"
style="pointer-events: auto;">
<i aria-hidden="true" class="fas fa-sort-numeric-down-alt"></i> 
<span>Countdown</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/google-maps/" 
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-map-marked-alt"></i> 
<span>Google Maps</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/icon-with-text/"
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-layer-group"></i> 
<span>Icon With Text</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/info-box/" 
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-toolbox"></i> 
<span>Info Box</span> </a></li><li> <a href="https://demo.casethemes.net/organio/elements/lists/" 
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-list"></i> <span>Lists</span>
</a></li><li> <a href="https://demo.casethemes.net/organio/elements/message-box/"
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-info-circle"></i>
<span>Message Box</span> </a></li>
</ul>
  



<ul class="menu-item-elements"><li> 
<a href="https://demo.casethemes.net/organio/elements/portfolio-carousel/"
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-band-aid"></i>
<span>Portfolio Carousel</span> </a></li><li>
<a href="https://demo.casethemes.net/organio/elements/portfolio-grid/" 
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-wallet"></i>
<span>Portfolio Grid</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/product-carousel/"
style="pointer-events: auto;"> 
<i aria-hidden="true" class="flaticon flaticon-dairy-products"></i> 
<span>Product Carousel</span> </a></li><li>
<a href="https://demo.casethemes.net/organio/elements/product-grid/"
style="pointer-events: auto;"> <i aria-hidden="true" 
class="fas fa-shopping-bag"></i> <span>Product Grid</span> </a></li><li>
<a href="https://demo.casethemes.net/organio/elements/services-carousel/"
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-cog"></i>
<span>Services Carousel</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/services-grid/"
style="pointer-events: auto;"> <i aria-hidden="true" class="fas fa-cogs"></i> 
<span>Services Grid</span> </a></li></ul>


<ul class="menu-item-elements">
<li> <a href="https://demo.casethemes.net/organio/elements/team-carousel/" style="pointer-events: auto;">
<i aria-hidden="true" class="fas fa-user-circle"></i> <span>Team Carousel</span> </a></li><li>
<a href="https://demo.casethemes.net/organio/elements/team-grid/" style="pointer-events: auto;">
<i aria-hidden="true" class="fas fa-users"></i> <span>Team Grid</span> </a></li><li>
<a href="https://demo.casethemes.net/organio/elements/testimonial-carousel/" style="pointer-events: auto;"> 
<i aria-hidden="true" class="fas fa-quote-left"></i> <span>Testimonial Carousel</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/testimonial-grid/" style="pointer-events: auto;">
<i aria-hidden="true" class="fas fa-quote-right"></i> <span>Testimonial Grid</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/video-buttons/" style="pointer-events: auto;"> 
<i aria-hidden="true" class="far fa-play-circle"></i> <span>Video Buttons</span> </a></li><li> 
<a href="https://demo.casethemes.net/organio/elements/counters/" style="pointer-events: auto;"> 
<i aria-hidden="true" class="fas fa-sort-numeric-up"></i> <span>Counters</span> </a></li>
</ul>
      `;
  return;
};
export default leftmenuHomeBody;
