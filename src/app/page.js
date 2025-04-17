import Image from "next/image";
import styles from "./page.module.css";
import CountdownTimer from "./component/CountdownTimer.js"

export default function Home() {
  return (
    <>
      
      <main>
       {/* <!--==================== Preloader Start ====================--> */}
      {/* <!-- <div className="preloader">
          <img src="assets/images/icon/preloader.gif" alt=""/>
      </div> --> */}
      {/* <!--==================== Preloader End ====================--> */}

      {/* <!--==================== Overlay Start ====================--> */}
      <div className="overlay"></div>
      {/* <!--==================== Overlay End ====================--> */}

      {/* <!--==================== Sidebar Overlay End ====================--> */}
      <div className="side-overlay"></div>
      {/* <!--==================== Sidebar Overlay End ====================--> */}

      {/* <!-- ==================== Scroll to Top End Here ==================== --> */}
      <div className="progress-wrap">
          <svg className="progress-circle svg-content" width={"100%"} height={"100%"} viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
      </div>
      {/* <!-- ==================== Scroll to Top End Here ==================== --> */}

      {/* <!-- ==================== Search Box Start Here ==================== --> */}
      <form action="#" className="search-box">
          <button type="button"
              className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1">
              <i className="ph ph-x"></i>
          </button>
          <div className="container">
              <div className="position-relative">
                  <input type="text" className="form-control py-16 px-24 text-xl rounded-pill pe-64"
                      placeholder="Search for a product or brand" />
                  <button type="submit"
                      className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8">
                      <i className="ph ph-magnifying-glass"></i>
                  </button>
              </div>
          </div>
      </form>
      {/* <!-- ==================== Search Box End Here ==================== --> */}

      {/* <!-- ==================== Mobile Menu Start Here ==================== --> */}
      <div className="mobile-menu scroll-sm d-lg-none d-block">
          <button type="button" className="close-button"> <i className="ph ph-x"></i> </button>
          <div className="mobile-menu__inner">
              <a href="index.html" className="mobile-menu__logo">
                  <img src="assets/images/logo/logo.png" alt="Logo" />
              </a>
              <div className="mobile-menu__menu">
                  {/* <!-- Nav Menu Start --> */}
                  <ul className="nav-menu flex-align nav-menu--mobile">
                      <li className="on-hover-item nav-menu__item has-submenu activePage">
                          <a href="javascript:void(0)" className="nav-menu__link">Home</a>
                          <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item activePage">
                                  <a href="index.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Home
                                      Grocery</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="index-two.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Home
                                      Electronics</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="index-three.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Home
                                      Fashion</a>
                              </li>
                          </ul>
                      </li>
                      <li className="on-hover-item nav-menu__item has-submenu">
                          <a href="javascript:void(0)" className="nav-menu__link">Shop</a>
                          <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="shop.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Shop</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="product-details.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Shop
                                      Details</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="product-details-two.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Shop Details
                                      Two</a>
                              </li>
                          </ul>
                      </li>
                      <li className="on-hover-item nav-menu__item has-submenu">
                          <span
                              className="badge-notification bg-warning-600 text-white text-sm py-2 px-8 rounded-4">New</span>
                          <a href="javascript:void(0)" className="nav-menu__link">Pages</a>
                          <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="cart.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Cart</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="wishlist.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Wishlist</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="checkout.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Checkout </a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="become-seller.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Become
                                      Seller</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="account.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Account</a>
                              </li>
                          </ul>
                      </li>
                      <li className="on-hover-item nav-menu__item has-submenu">
                          <span
                              className="badge-notification bg-tertiary-600 text-white text-sm py-2 px-8 rounded-4">New</span>
                          <a href="javascript:void(0)" className="nav-menu__link">Vendors</a>
                          <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="vendor.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Vendors </a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="vendor-details.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Vendor Details
                                  </a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="vendor-two.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Vendors
                                      Two</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="vendor-two-details.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Vendors Two
                                      Details</a>
                              </li>
                          </ul>
                      </li>
                      <li className="on-hover-item nav-menu__item has-submenu">
                          <a href="javascript:void(0)" className="nav-menu__link">Blog</a>
                          <ul className="on-hover-dropdown common-dropdown nav-submenu scroll-sm">
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="blog.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Blog</a>
                              </li>
                              <li className="common-dropdown__item nav-submenu__item">
                                  <a href="blog-details.html"
                                      className="common-dropdown__link nav-submenu__link hover-bg-neutral-100"> Blog
                                      Details</a>
                              </li>
                          </ul>
                      </li>
                      <li className="nav-menu__item">
                          <a href="contact.html" className="nav-menu__link">Contact Us</a>
                      </li>
                  </ul>
                  {/* <!-- Nav Menu End --> */}
              </div>
          </div>
      </div>
      {/* <!-- ==================== Mobile Menu End Here ==================== --> */}


      {/* <!-- ======================= Middle Header Two Start ========================= --> */}
      <header className="header-middle style-two bg-color-neutral"
          style={{backgroundColor: "#121535", color: "rgb(255, 255, 255)"}}>
          <div className="container container-lg">
              <nav className="header-inner flex-between">
                  {/* <!-- Logo Start --> */}
                  <div className="logo">

                      <div className="logo">
                          <a href="http://127.0.0.1:8000" className="user_dashboard_logo">
                              <img src="https://ecbackend.cazhier.com/storage/logo/cangelxlogo1.png" style={{height: "47px"}}
                                  alt=""/>
                          </a>
                      </div>

                  </div>
                  {/* <!-- Logo End  --> */}

                  {/* <!-- form Category Start --> */}
                  <div className="flex-align gap-16">


                      <form role="search" action="http://127.0.0.1:8000/products"
                          data-ajax-url="http://127.0.0.1:8000/ajax/search-products" method="GET"
                          className="bb-form-quick-search" id="bb-form-quick-search">
                          <div className="search-category style-two d-flex h-40 search-form d-sm-flex d-none">
                              <select name="categories[]" data-bb-toggle="init-categories-dropdown"
                                  data-url="http://127.0.0.1:8000/ajax/categories-dropdown"
                                  aria-label="Product categories"
                                  className="js-example-basic-single border border-gray-200 border-end-0 rounded-0 border-0 select2-hidden-accessible"
                                  data-select2-id="select2-data-1-p6gy" tabIndex={-1} aria-hidden="true">
                                  <option value="" data-select2-id="select2-data-3-9qhd">All Categories</option>
                                  <option value="268">Electronics</option>

                                  <option value="269">&nbsp;&nbsp;TV &amp; Visual</option>

                                  <option value="270">&nbsp;&nbsp;&nbsp;&nbsp;LCD TV</option>

                                  <option value="271">&nbsp;&nbsp;&nbsp;&nbsp;LED TV</option>

                                  <option value="273">&nbsp;&nbsp;&nbsp;&nbsp;Plasma TV</option>

                                  <option value="272">&nbsp;&nbsp;&nbsp;&nbsp;Curved TV</option>

                                  <option value="274">&nbsp;&nbsp;&nbsp;&nbsp;Satellite Decoders</option>

                                  <option value="275">&nbsp;&nbsp;&nbsp;&nbsp;Tv Components</option>

                                  <option value="276">&nbsp;&nbsp;&nbsp;&nbsp;Projector</option>

                                  <option value="277">&nbsp;&nbsp;&nbsp;&nbsp;VR Headset</option>

                                  <option value="278">&nbsp;&nbsp;&nbsp;&nbsp;Media Streamers</option>

                                  <option value="279">&nbsp;&nbsp;&nbsp;&nbsp;Spares</option>

                                  <option value="280">&nbsp;&nbsp;Refrigerator</option>

                                  <option value="281">&nbsp;&nbsp;&nbsp;&nbsp;Single Door Fridge</option>

                                  <option value="282">&nbsp;&nbsp;&nbsp;&nbsp;Double Door Fridge</option>

                                  <option value="283">&nbsp;&nbsp;&nbsp;&nbsp;Quad Door Fridge</option>

                                  <option value="284">&nbsp;&nbsp;&nbsp;&nbsp;Mini Fridge</option>

                                  <option value="285">&nbsp;&nbsp;&nbsp;&nbsp;Wine Fridge</option>

                                  <option value="286">&nbsp;&nbsp;&nbsp;&nbsp;Bar Fridge</option>

                                  <option value="287">&nbsp;&nbsp;&nbsp;&nbsp;Freezers</option>

                                  <option value="288">&nbsp;&nbsp;Washing Machine</option>

                                  <option value="289">&nbsp;&nbsp;&nbsp;&nbsp;Front Loading</option>

                                  <option value="290">&nbsp;&nbsp;&nbsp;&nbsp;Top Loading</option>

                                  <option value="291">&nbsp;&nbsp;&nbsp;&nbsp;Washer Dryer Combo</option>

                                  <option value="292">&nbsp;&nbsp;&nbsp;&nbsp;Dish Washing Machine</option>

                                  <option value="293">&nbsp;&nbsp;&nbsp;&nbsp;Tumble Dryers</option>

                                  <option value="294">&nbsp;&nbsp;Air Conditioner</option>

                                  <option value="295">&nbsp;&nbsp;&nbsp;&nbsp;Air Humidifier</option>

                                  <option value="296">&nbsp;&nbsp;&nbsp;&nbsp;Air Purifier</option>

                                  <option value="297">&nbsp;&nbsp;&nbsp;&nbsp;Air Conditioner Components</option>

                                  <option value="298">&nbsp;&nbsp;&nbsp;&nbsp;Air Conditioner Filter</option>

                                  <option value="299">&nbsp;&nbsp;&nbsp;&nbsp;Electric Fan</option>

                                  <option value="300">&nbsp;&nbsp;&nbsp;&nbsp;Air Cooler</option>

                                  <option value="301">&nbsp;&nbsp;Audio Systems</option>

                                  <option value="302">&nbsp;&nbsp;&nbsp;&nbsp;Home Theatre</option>

                                  <option value="303">&nbsp;&nbsp;&nbsp;&nbsp;Amplifier</option>

                                  <option value="304">&nbsp;&nbsp;&nbsp;&nbsp;Subwoofer &amp; Woofer</option>

                                  <option value="305">&nbsp;&nbsp;&nbsp;&nbsp;Midrange Speakers</option>

                                  <option value="306">&nbsp;&nbsp;&nbsp;&nbsp;Tweeters</option>

                                  <option value="307">&nbsp;&nbsp;&nbsp;&nbsp;Full Range Driver Speakers</option>

                                  <option value="308">&nbsp;&nbsp;&nbsp;&nbsp;Outdoors Speakers</option>

                                  <option value="309">&nbsp;&nbsp;&nbsp;&nbsp;Sound Bar</option>

                                  <option value="310">&nbsp;&nbsp;&nbsp;&nbsp;Piano &amp; Keyboard</option>

                                  <option value="311">&nbsp;&nbsp;&nbsp;&nbsp;Music Production Equipment</option>

                                  <option value="312">&nbsp;&nbsp;&nbsp;&nbsp;DJing Equipment</option>

                                  <option value="313">&nbsp;&nbsp;&nbsp;&nbsp;Headphones &amp; Headsets</option>

                                  <option value="314">&nbsp;&nbsp;Computer</option>

                                  <option value="315">&nbsp;&nbsp;&nbsp;&nbsp;Laptop</option>

                                  <option value="316">&nbsp;&nbsp;&nbsp;&nbsp;Notebook</option>

                                  <option value="317">&nbsp;&nbsp;&nbsp;&nbsp;Accessories &amp; Peripherals</option>

                                  <option value="318">&nbsp;&nbsp;&nbsp;&nbsp;Desktop</option>

                                  <option value="319">&nbsp;&nbsp;&nbsp;&nbsp;Printers</option>

                                  <option value="320">&nbsp;&nbsp;&nbsp;&nbsp;WiFi &amp; Networking</option>

                                  <option value="321">&nbsp;&nbsp;&nbsp;&nbsp;Computer Components</option>

                                  <option value="322">&nbsp;&nbsp;&nbsp;&nbsp;Software</option>

                                  <option value="323">&nbsp;&nbsp;&nbsp;&nbsp;Monitor</option>

                                  <option value="324">&nbsp;&nbsp;&nbsp;&nbsp;Storage Devices</option>

                                  <option value="325">&nbsp;&nbsp;&nbsp;&nbsp;Scanners</option>

                                  <option value="326">&nbsp;&nbsp;&nbsp;&nbsp;Wiring &amp; Cables</option>

                                  <option value="327">&nbsp;&nbsp;Cameras &amp; Photo</option>

                                  <option value="328">&nbsp;&nbsp;&nbsp;&nbsp;Digital Cameras</option>

                                  <option value="329">&nbsp;&nbsp;&nbsp;&nbsp;Lenses &amp; Photo</option>

                                  <option value="330">&nbsp;&nbsp;&nbsp;&nbsp;Flash &amp; Accessories</option>

                                  <option value="331">&nbsp;&nbsp;&nbsp;&nbsp;Vintage Filmography</option>

                                  <option value="332">&nbsp;&nbsp;&nbsp;&nbsp;Camera Drones</option>

                                  <option value="333">&nbsp;&nbsp;&nbsp;&nbsp;Tripods &amp; Supports</option>

                                  <option value="334">&nbsp;&nbsp;&nbsp;&nbsp;Lighting &amp; Studio</option>

                                  <option value="335">&nbsp;&nbsp;&nbsp;&nbsp;Internet Cameras</option>

                                  <option value="336">&nbsp;&nbsp;&nbsp;&nbsp;Binoculars &amp; Telescopes</option>

                                  <option value="337">&nbsp;&nbsp;&nbsp;&nbsp;Video Editing Software</option>

                                  <option value="338">&nbsp;&nbsp;&nbsp;&nbsp;Surveillance &amp; Video</option>

                                  <option value="339">&nbsp;&nbsp;&nbsp;&nbsp;Camera Accessories</option>

                                  <option value="40">Fashion &amp; Style</option>

                                  <option value="41">&nbsp;&nbsp;Accessories</option>

                                  <option value="42">&nbsp;&nbsp;&nbsp;&nbsp;Shavers &amp; Trimmers</option>

                                  <option value="43">&nbsp;&nbsp;&nbsp;&nbsp;Gloves</option>

                                  <option value="44">&nbsp;&nbsp;&nbsp;&nbsp;Eyewear</option>

                                  <option value="45">&nbsp;&nbsp;&nbsp;&nbsp;Scarves</option>

                                  <option value="46">&nbsp;&nbsp;&nbsp;&nbsp;Belts</option>

                                  <option value="47">&nbsp;&nbsp;&nbsp;&nbsp;Wallets</option>

                                  <option value="48">&nbsp;&nbsp;&nbsp;&nbsp;Purses</option>

                                  <option value="49">&nbsp;&nbsp;&nbsp;&nbsp;Headwear</option>

                                  <option value="50">&nbsp;&nbsp;&nbsp;&nbsp;Hairclips &amp; Combs</option>

                                  <option value="51">&nbsp;&nbsp;&nbsp;&nbsp;Ties</option>

                                  <option value="52">&nbsp;&nbsp;&nbsp;&nbsp;Umbrellas</option>

                                  <option value="53">&nbsp;&nbsp;&nbsp;&nbsp;Other Staff</option>

                                  <option value="54">&nbsp;&nbsp;Bags</option>

                                  <option value="55">&nbsp;&nbsp;&nbsp;&nbsp;Hand bags</option>

                                  <option value="56">&nbsp;&nbsp;&nbsp;&nbsp;School Bags</option>

                                  <option value="57">&nbsp;&nbsp;&nbsp;&nbsp;College Bags</option>

                                  <option value="58">&nbsp;&nbsp;&nbsp;&nbsp;Garment Bags</option>

                                  <option value="59">&nbsp;&nbsp;&nbsp;&nbsp;Waist Bag</option>

                                  <option value="60">&nbsp;&nbsp;&nbsp;&nbsp;Suitcases</option>

                                  <option value="61">&nbsp;&nbsp;&nbsp;&nbsp;Business Bags</option>

                                  <option value="62">&nbsp;&nbsp;&nbsp;&nbsp;Travel Bags</option>

                                  <option value="63">&nbsp;&nbsp;&nbsp;&nbsp;Kids Luggage</option>

                                  <option value="64">&nbsp;&nbsp;&nbsp;&nbsp;Crossbody Bags</option>

                                  <option value="65">&nbsp;&nbsp;&nbsp;&nbsp;Shoulder Bags</option>

                                  <option value="66">&nbsp;&nbsp;&nbsp;&nbsp;Backpacks</option>

                                  <option value="87">&nbsp;&nbsp;Cosmetics</option>

                                  <option value="90">&nbsp;&nbsp;&nbsp;&nbsp;Make ups</option>

                                  <option value="89">&nbsp;&nbsp;&nbsp;&nbsp;Hands &amp; Nail Care</option>

                                  <option value="88">&nbsp;&nbsp;&nbsp;&nbsp;Skin Care</option>

                                  <option value="91">&nbsp;&nbsp;&nbsp;&nbsp;Hair Care</option>

                                  <option value="92">&nbsp;&nbsp;&nbsp;&nbsp;Body Cream</option>

                                  <option value="93">&nbsp;&nbsp;&nbsp;&nbsp;After Shave</option>

                                  <option value="94">&nbsp;&nbsp;&nbsp;&nbsp;Hair Removal Cream</option>

                                  <option value="95">&nbsp;&nbsp;&nbsp;&nbsp;Gift Sets</option>

                                  <option value="96">&nbsp;&nbsp;&nbsp;&nbsp;Oral Care</option>

                                  <option value="98">&nbsp;&nbsp;&nbsp;&nbsp;Lips</option>

                                  <option value="101">&nbsp;&nbsp;&nbsp;&nbsp;Sanitizer</option>

                                  <option value="104">&nbsp;&nbsp;&nbsp;&nbsp;Wigs &amp; Weaves</option>

                                  <option value="105">&nbsp;&nbsp;&nbsp;&nbsp;Eye Lashes</option>

                                  <option value="106">&nbsp;&nbsp;&nbsp;&nbsp;Hair Styling Products</option>

                                  <option value="107">&nbsp;&nbsp;&nbsp;&nbsp;Fragrance Candles</option>

                                  <option value="110">&nbsp;&nbsp;Fragrances</option>

                                  <option value="111">&nbsp;&nbsp;&nbsp;&nbsp;Perfume</option>

                                  <option value="113">&nbsp;&nbsp;&nbsp;&nbsp;Cologne</option>

                                  <option value="120">&nbsp;&nbsp;&nbsp;&nbsp;Eau de Parfum</option>

                                  <option value="121">&nbsp;&nbsp;&nbsp;&nbsp;Eau de Toilette</option>

                                  <option value="122">&nbsp;&nbsp;&nbsp;&nbsp;Eau de Cologne</option>

                                  <option value="123">&nbsp;&nbsp;&nbsp;&nbsp;Aerosol Spray</option>

                                  <option value="124">&nbsp;&nbsp;&nbsp;&nbsp;Essential Oils</option>

                                  <option value="125">&nbsp;&nbsp;&nbsp;&nbsp;Fragrance Oils</option>

                                  <option value="126">&nbsp;&nbsp;&nbsp;&nbsp;Scented Candles</option>

                                  <option value="127">&nbsp;&nbsp;&nbsp;&nbsp;Fragrance Diffuser</option>

                                  <option value="128">&nbsp;&nbsp;Womens Fashion</option>

                                  <option value="129">&nbsp;&nbsp;&nbsp;&nbsp;Dresses &amp; Skirts</option>

                                  <option value="130">&nbsp;&nbsp;&nbsp;&nbsp;Shorts</option>

                                  <option value="131">&nbsp;&nbsp;&nbsp;&nbsp;Jeans &amp; Pants</option>

                                  <option value="132">&nbsp;&nbsp;&nbsp;&nbsp;Formal Wear</option>

                                  <option value="133">&nbsp;&nbsp;&nbsp;&nbsp;Jumpsuits &amp; Playsuits</option>

                                  <option value="134">&nbsp;&nbsp;&nbsp;&nbsp;T-Shirts &amp; Vests</option>

                                  <option value="135">&nbsp;&nbsp;&nbsp;&nbsp;Leggings &amp; Tights</option>

                                  <option value="136">&nbsp;&nbsp;&nbsp;&nbsp;Sweaters &amp; Jackets</option>

                                  <option value="137">&nbsp;&nbsp;&nbsp;&nbsp;Blouses &amp; Shirts</option>

                                  <option value="139">&nbsp;&nbsp;&nbsp;&nbsp;Underwear &amp; Sleepwear</option>

                                  <option value="140">&nbsp;&nbsp;&nbsp;&nbsp;Leisure &amp; Sportswear</option>

                                  <option value="141">&nbsp;&nbsp;&nbsp;&nbsp;Sneakers &amp; Boots</option>

                                  <option value="143">&nbsp;&nbsp;&nbsp;&nbsp;Heels &amp; Sandals</option>

                                  <option value="144">&nbsp;&nbsp;&nbsp;&nbsp;Flats &amp; Sleepers</option>

                                  <option value="145">&nbsp;&nbsp;Mens Fashion</option>

                                  <option value="146">&nbsp;&nbsp;&nbsp;&nbsp;Jeans &amp; Trousers</option>

                                  <option value="147">&nbsp;&nbsp;&nbsp;&nbsp;Jackets &amp; Coats</option>

                                  <option value="150">&nbsp;&nbsp;&nbsp;&nbsp;Vests &amp; T-Shirts</option>

                                  <option value="151">&nbsp;&nbsp;&nbsp;&nbsp;Bermudas &amp; Shorts</option>

                                  <option value="153">&nbsp;&nbsp;&nbsp;&nbsp;Formal Attire</option>

                                  <option value="154">&nbsp;&nbsp;&nbsp;&nbsp;Sportswear &amp; Leisure</option>

                                  <option value="155">&nbsp;&nbsp;&nbsp;&nbsp;Shirts</option>

                                  <option value="156">&nbsp;&nbsp;&nbsp;&nbsp;Sweaters and Hoodies</option>

                                  <option value="157">&nbsp;&nbsp;&nbsp;&nbsp;Pajamas &amp; Underwear</option>

                                  <option value="158">&nbsp;&nbsp;&nbsp;&nbsp;Formal Shoes</option>

                                  <option value="159">&nbsp;&nbsp;&nbsp;&nbsp;Boots &amp; Sneakers</option>

                                  <option value="160">&nbsp;&nbsp;&nbsp;&nbsp;Sleepers &amp; Flats</option>

                                  <option value="138">Health</option>

                                  <option value="142">&nbsp;&nbsp;Dietary Supplements</option>

                                  <option value="149">&nbsp;&nbsp;Natural Herbs</option>

                                  <option value="152">&nbsp;&nbsp;Vitamin Supplements</option>

                                  <option value="148">&nbsp;&nbsp;Energy Tonics</option>

                                  <option value="163">&nbsp;&nbsp;Patent Medicine</option>

                                  <option value="162">&nbsp;&nbsp;Antibacterial &amp; Antiseptic</option>

                                  <option value="161">&nbsp;&nbsp;Sexual Health</option>

                                  <option value="200">&nbsp;&nbsp;Sports Nutrition</option>

                                  <option value="203">&nbsp;&nbsp;Pain Killers</option>

                                  <option value="205">&nbsp;&nbsp;Eyes &amp; Vision</option>

                                  <option value="210">&nbsp;&nbsp;Electro &amp; Mechanical</option>

                                  <option value="192">Art &amp; Crafts</option>

                                  <option value="193">&nbsp;&nbsp;Paintings &amp; Drawings</option>

                                  <option value="194">&nbsp;&nbsp;Sculptures &amp; Molds</option>

                                  <option value="195">&nbsp;&nbsp;Antiques</option>

                                  <option value="196">&nbsp;&nbsp;Beading &amp; Decorating</option>

                                  <option value="197">&nbsp;&nbsp;Crafting</option>

                                  <option value="198">&nbsp;&nbsp;Knitting &amp; Crochet</option>

                                  <option value="199">&nbsp;&nbsp;Collectibles</option>

                                  <option value="201">&nbsp;&nbsp;Art Instruments</option>

                                  <option value="202">&nbsp;&nbsp;Art Accessories</option>

                                  <option value="204">Cell Phones &amp; Tablets</option>

                                  <option value="206">&nbsp;&nbsp;Smartphones</option>

                                  <option value="208">&nbsp;&nbsp;Tablets</option>

                                  <option value="209">&nbsp;&nbsp;Smart Watches</option>

                                  <option value="211">&nbsp;&nbsp;Mobile Accessories</option>

                                  <option value="212">Gadgets</option>

                                  <option value="213">&nbsp;&nbsp;Drones</option>

                                  <option value="214">&nbsp;&nbsp;Personal Safety</option>

                                  <option value="215">&nbsp;&nbsp;Secret Surveillance</option>

                                  <option value="216">&nbsp;&nbsp;Smart Accessories</option>

                                  <option value="217">&nbsp;&nbsp;Wearables</option>

                                  <option value="207">Jewellery &amp; Watches</option>

                                  <option value="218">&nbsp;&nbsp;Body Jewellery</option>

                                  <option value="220">&nbsp;&nbsp;&nbsp;&nbsp;Wrist Watches</option>

                                  <option value="223">&nbsp;&nbsp;&nbsp;&nbsp;Necklaces &amp; Pendants</option>

                                  <option value="250">&nbsp;&nbsp;&nbsp;&nbsp;Bracelets &amp; Bangles</option>

                                  <option value="251">&nbsp;&nbsp;&nbsp;&nbsp;Rings</option>

                                  <option value="252">&nbsp;&nbsp;&nbsp;&nbsp;Ear Rings</option>

                                  <option value="253">&nbsp;&nbsp;&nbsp;&nbsp;Brooches and Pins</option>

                                  <option value="254">&nbsp;&nbsp;&nbsp;&nbsp;Cufflinks</option>

                                  <option value="255">&nbsp;&nbsp;&nbsp;&nbsp;Anklets</option>

                                  <option value="256">&nbsp;&nbsp;&nbsp;&nbsp;Bespoke Jewellery</option>

                                  <option value="263">&nbsp;&nbsp;Ethnic &amp; Tribal Jewellery</option>

                                  <option value="267">&nbsp;&nbsp;&nbsp;&nbsp;Artistic Handwork</option>

                                  <option value="266">&nbsp;&nbsp;&nbsp;&nbsp;Waist Jewellery</option>

                                  <option value="265">&nbsp;&nbsp;&nbsp;&nbsp;Head Gear &amp; Jewellery</option>

                                  <option value="264">&nbsp;&nbsp;&nbsp;&nbsp;Neck &amp; Wrist Jewellery</option>

                                  <option value="257">&nbsp;&nbsp;Jewellery Accessories</option>

                                  <option value="262">&nbsp;&nbsp;&nbsp;&nbsp;Other accessory</option>

                                  <option value="261">&nbsp;&nbsp;&nbsp;&nbsp;Cleaning Chemicals</option>

                                  <option value="260">&nbsp;&nbsp;&nbsp;&nbsp;Watch Accessories</option>

                                  <option value="259">&nbsp;&nbsp;&nbsp;&nbsp;Jewellery Cleaners</option>

                                  <option value="258">&nbsp;&nbsp;&nbsp;&nbsp;Storage &amp; Organizers</option>

                                  <option value="219">Sports &amp; Training</option>

                                  <option value="221">&nbsp;&nbsp;Sports &amp; Leisure Items</option>

                                  <option value="235">&nbsp;&nbsp;&nbsp;&nbsp;Other Sports</option>

                                  <option value="234">&nbsp;&nbsp;&nbsp;&nbsp;Indoor Sports</option>

                                  <option value="233">&nbsp;&nbsp;&nbsp;&nbsp;Cricket and Hockey</option>

                                  <option value="232">&nbsp;&nbsp;&nbsp;&nbsp;Yoga Equipment</option>

                                  <option value="231">&nbsp;&nbsp;&nbsp;&nbsp;Fishing Equipment</option>

                                  <option value="230">&nbsp;&nbsp;&nbsp;&nbsp;Water Sports</option>

                                  <option value="229">&nbsp;&nbsp;&nbsp;&nbsp;Skating and Skateboards</option>

                                  <option value="228">&nbsp;&nbsp;&nbsp;&nbsp;MMA &amp; Contact Sport</option>

                                  <option value="227">&nbsp;&nbsp;&nbsp;&nbsp;Netball and Tennis</option>

                                  <option value="226">&nbsp;&nbsp;&nbsp;&nbsp;Soccer and Rugby</option>

                                  <option value="225">&nbsp;&nbsp;&nbsp;&nbsp;Cycling</option>

                                  <option value="224">&nbsp;&nbsp;&nbsp;&nbsp;Golf</option>

                                  <option value="236">&nbsp;&nbsp;Exercising Equipment</option>

                                  <option value="242">&nbsp;&nbsp;&nbsp;&nbsp;Sports Nutrition</option>

                                  <option value="237">&nbsp;&nbsp;&nbsp;&nbsp;Treadmill and Bikes</option>

                                  <option value="238">&nbsp;&nbsp;&nbsp;&nbsp;Dumbells</option>

                                  <option value="239">&nbsp;&nbsp;&nbsp;&nbsp;Home Gyms</option>

                                  <option value="240">&nbsp;&nbsp;&nbsp;&nbsp;Benches</option>

                                  <option value="241">&nbsp;&nbsp;&nbsp;&nbsp;Barbells and Attachments</option>

                                  <option value="243">&nbsp;&nbsp;&nbsp;&nbsp;Gym Belts</option>

                                  <option value="244">&nbsp;&nbsp;&nbsp;&nbsp;Hand Grippers</option>

                                  <option value="245">&nbsp;&nbsp;&nbsp;&nbsp;Multi Purpose Training Machine</option>

                                  <option value="246">&nbsp;&nbsp;&nbsp;&nbsp;Electronic Training Tools</option>

                                  <option value="247">&nbsp;&nbsp;&nbsp;&nbsp;Gym Accessories</option>

                                  <option value="248">&nbsp;&nbsp;&nbsp;&nbsp;Weights</option>

                                  <option value="249">&nbsp;&nbsp;&nbsp;&nbsp;Other Training Equipment</option>

                                  <option value="340">Camping &amp; Hiking</option>

                                  <option value="341">&nbsp;&nbsp;Camping Furniture</option>

                                  <option value="342">&nbsp;&nbsp;&nbsp;&nbsp;Chairs</option>

                                  <option value="343">&nbsp;&nbsp;&nbsp;&nbsp;Tables &amp; Storage</option>

                                  <option value="344">&nbsp;&nbsp;&nbsp;&nbsp;Furniture Covers</option>

                                  <option value="345">&nbsp;&nbsp;&nbsp;&nbsp;Other Camping Furniture</option>

                                  <option value="346">&nbsp;&nbsp;Camping Equipment</option>

                                  <option value="347">&nbsp;&nbsp;&nbsp;&nbsp;Tents &amp; Gazebos</option>

                                  <option value="348">&nbsp;&nbsp;&nbsp;&nbsp;Sleeping Bags &amp; Camp Bedding</option>

                                  <option value="349">&nbsp;&nbsp;&nbsp;&nbsp;Inflatable Beds &amp; Stretchers</option>

                                  <option value="350">&nbsp;&nbsp;&nbsp;&nbsp;Braai &amp; Barbeque Equipment</option>

                                  <option value="351">&nbsp;&nbsp;&nbsp;&nbsp;Gas Cylinders &amp; Canisters</option>

                                  <option value="352">&nbsp;&nbsp;&nbsp;&nbsp;Cooler boxes &amp; Camping Fridges</option>

                                  <option value="353">&nbsp;&nbsp;&nbsp;&nbsp;Camping Utensils</option>

                                  <option value="354">&nbsp;&nbsp;&nbsp;&nbsp;Cookware &amp; Heating</option>

                                  <option value="355">&nbsp;&nbsp;&nbsp;&nbsp;Fishing &amp; Accessories</option>

                                  <option value="356">&nbsp;&nbsp;&nbsp;&nbsp;Trailers</option>

                                  <option value="357">&nbsp;&nbsp;&nbsp;&nbsp;Other Camping Gear</option>

                                  <option value="358">&nbsp;&nbsp;Associated Accessories</option>

                                  <option value="359">&nbsp;&nbsp;&nbsp;&nbsp;Torches &amp; Lights</option>

                                  <option value="360">&nbsp;&nbsp;&nbsp;&nbsp;Fire Starters</option>

                                  <option value="361">&nbsp;&nbsp;&nbsp;&nbsp;Inverters &amp; Batteries</option>

                                  <option value="362">&nbsp;&nbsp;&nbsp;&nbsp;Solar &amp; Renewable Energy</option>

                                  <option value="363">&nbsp;&nbsp;&nbsp;&nbsp;Self Defense Equipment</option>

                                  <option value="364">&nbsp;&nbsp;&nbsp;&nbsp;Water Purification</option>

                                  <option value="365">&nbsp;&nbsp;&nbsp;&nbsp;Climbing Equipment</option>

                                  <option value="366">&nbsp;&nbsp;&nbsp;&nbsp;Binoculars &amp; Night vision</option>

                                  <option value="367">&nbsp;&nbsp;&nbsp;&nbsp;Health &amp; First Aid Kits</option>

                                  <option value="368">&nbsp;&nbsp;&nbsp;&nbsp;Manual &amp; Electric Pumps</option>

                                  <option value="369">&nbsp;&nbsp;&nbsp;&nbsp;Knifes &amp; Tools</option>

                                  <option value="370">&nbsp;&nbsp;&nbsp;&nbsp;Other Accessories</option>

                                  <option value="371">&nbsp;&nbsp;Hiking Essentials</option>

                                  <option value="372">&nbsp;&nbsp;&nbsp;&nbsp;Hiking Boots &amp; Shoes</option>

                                  <option value="373">&nbsp;&nbsp;&nbsp;&nbsp;Hiking Backpacks</option>

                                  <option value="374">&nbsp;&nbsp;&nbsp;&nbsp;Navigation &amp; Electronics</option>

                                  <option value="375">&nbsp;&nbsp;&nbsp;&nbsp;Trekking Poles</option>

                                  <option value="376">&nbsp;&nbsp;&nbsp;&nbsp;Water Bottles &amp; Filtration</option>

                                  <option value="377">&nbsp;&nbsp;&nbsp;&nbsp;Pepper Sprays</option>

                                  <option value="378">&nbsp;&nbsp;&nbsp;&nbsp;Stun Guns &amp; Tasers</option>

                                  <option value="379">&nbsp;&nbsp;&nbsp;&nbsp;Survival Kits</option>

                                  <option value="380">&nbsp;&nbsp;&nbsp;&nbsp;Hiking Accessories</option>

                                  <option value="381">Home &amp; Outdoors</option>

                                  <option value="382">&nbsp;&nbsp;Indoor Furniture</option>

                                  <option value="383">&nbsp;&nbsp;&nbsp;&nbsp;Lounge Suites</option>

                                  <option value="384">&nbsp;&nbsp;&nbsp;&nbsp;Couches</option>

                                  <option value="385">&nbsp;&nbsp;&nbsp;&nbsp;Recliners</option>

                                  <option value="386">&nbsp;&nbsp;&nbsp;&nbsp;Coffee Tables</option>

                                  <option value="387">&nbsp;&nbsp;&nbsp;&nbsp;tv-stands</option>

                                  <option value="388">&nbsp;&nbsp;&nbsp;&nbsp;Lounge Accessories</option>

                                  <option value="389">&nbsp;&nbsp;Kitchen</option>

                                  <option value="390">&nbsp;&nbsp;&nbsp;&nbsp;Cooking &amp; Bakeware</option>

                                  <option value="391">&nbsp;&nbsp;&nbsp;&nbsp;Cutlery, Knifes &amp; Crockery</option>

                                  <option value="392">&nbsp;&nbsp;&nbsp;&nbsp;Serving Utensils &amp; Sets</option>

                                  <option value="393">&nbsp;&nbsp;&nbsp;&nbsp;Kitchen Fixtures</option>

                                  <option value="394">&nbsp;&nbsp;&nbsp;&nbsp;Kitchen Accessories</option>

                                  <option value="395">&nbsp;&nbsp;&nbsp;&nbsp;Kitchen Furniture</option>

                                  <option value="396">&nbsp;&nbsp;&nbsp;&nbsp;Glassware</option>

                                  <option value="397">&nbsp;&nbsp;Patio</option>

                                  <option value="398">&nbsp;&nbsp;&nbsp;&nbsp;Patio Furniture</option>

                                  <option value="399">&nbsp;&nbsp;&nbsp;&nbsp;Gazebos &amp; Umbrellas</option>

                                  <option value="400">&nbsp;&nbsp;&nbsp;&nbsp;Portable Lights</option>

                                  <option value="401">&nbsp;&nbsp;&nbsp;&nbsp;Pest Control</option>

                                  <option value="402">&nbsp;&nbsp;&nbsp;&nbsp;Patio Accessories</option>

                                  <option value="403">&nbsp;&nbsp;Lighting &amp; Ceiling</option>

                                  <option value="404">&nbsp;&nbsp;&nbsp;&nbsp;Ceiling Lights</option>

                                  <option value="406">&nbsp;&nbsp;&nbsp;&nbsp;Chandeliers</option>

                                  <option value="405">&nbsp;&nbsp;&nbsp;&nbsp;Ceiling Fans &amp; Accessories</option>

                                  <option value="407">&nbsp;&nbsp;&nbsp;&nbsp;Lamps and Shades</option>

                                  <option value="408">&nbsp;&nbsp;&nbsp;&nbsp;Wall Lights</option>

                                  <option value="409">&nbsp;&nbsp;&nbsp;&nbsp;Professional Lighting</option>

                                  <option value="410">&nbsp;&nbsp;&nbsp;&nbsp;Venue Lighting</option>

                                  <option value="411">&nbsp;&nbsp;&nbsp;&nbsp;Motion Sensor Lights</option>

                                  <option value="412">&nbsp;&nbsp;&nbsp;&nbsp;Outdoors Lighting</option>

                                  <option value="413">&nbsp;&nbsp;&nbsp;&nbsp;Lights Accessories</option>

                                  <option value="414">&nbsp;&nbsp;Garden &amp; Pool</option>

                                  <option value="415">&nbsp;&nbsp;&nbsp;&nbsp;Lawnmowers &amp; Trimmers</option>

                                  <option value="416">&nbsp;&nbsp;&nbsp;&nbsp;Watering Equipment</option>

                                  <option value="417">&nbsp;&nbsp;&nbsp;&nbsp;Tents &amp; Garden Umbrellas</option>

                                  <option value="418">&nbsp;&nbsp;&nbsp;&nbsp;Pool Pumps</option>

                                  <option value="419">&nbsp;&nbsp;&nbsp;&nbsp;Pool Cleaners &amp; Accessories</option>

                                  <option value="420">&nbsp;&nbsp;&nbsp;&nbsp;Pool Inflatables &amp; Toys</option>

                                  <option value="421">&nbsp;&nbsp;&nbsp;&nbsp;Plant Care &amp; Soil Accessories</option>

                                  <option value="422">&nbsp;&nbsp;&nbsp;&nbsp;Garden &amp; Pool Accessories</option>

                                  <option value="423">&nbsp;&nbsp;Bathroom</option>

                                  <option value="424">&nbsp;&nbsp;&nbsp;&nbsp;Bathroom Accessories</option>

                                  <option value="425">&nbsp;&nbsp;&nbsp;&nbsp;Bathroom Mats &amp; Sets</option>

                                  <option value="426">&nbsp;&nbsp;&nbsp;&nbsp;Towels</option>

                                  <option value="427">&nbsp;&nbsp;&nbsp;&nbsp;Taps &amp; Basins</option>

                                  <option value="428">&nbsp;&nbsp;&nbsp;&nbsp;Bathroom Sets</option>

                                  <option value="429">&nbsp;&nbsp;&nbsp;&nbsp;Bathroom Scales</option>

                                  <option value="430">&nbsp;&nbsp;Bedroom</option>

                                  <option value="431">&nbsp;&nbsp;&nbsp;&nbsp;Mattresses &amp; Beds</option>

                                  <option value="432">&nbsp;&nbsp;&nbsp;&nbsp;Bedding Sets</option>

                                  <option value="433">&nbsp;&nbsp;&nbsp;&nbsp;Blankets &amp; Sheets</option>

                                  <option value="434">&nbsp;&nbsp;&nbsp;&nbsp;Bed Side Lamps</option>

                                  <option value="435">&nbsp;&nbsp;&nbsp;&nbsp;Pillows &amp; Pillow Cases</option>

                                  <option value="436">&nbsp;&nbsp;&nbsp;&nbsp;Duvet Sets</option>

                                  <option value="437">&nbsp;&nbsp;&nbsp;&nbsp;Bedroom Accessories</option>

                                  <option value="438">&nbsp;&nbsp;&nbsp;&nbsp;Bedroom-Furniture</option>

                                  <option value="439">&nbsp;&nbsp;Home Deco</option>

                                  <option value="440">&nbsp;&nbsp;&nbsp;&nbsp;Curtains, Blinds &amp; Accessories</option>

                                  <option value="441">&nbsp;&nbsp;&nbsp;&nbsp;Artificial Plants &amp; Flowers</option>

                                  <option value="442">&nbsp;&nbsp;&nbsp;&nbsp;Mirrors</option>

                                  <option value="443">&nbsp;&nbsp;&nbsp;&nbsp;Flooring</option>

                                  <option value="444">&nbsp;&nbsp;&nbsp;&nbsp;Frames &amp; Wall Décor</option>

                                  <option value="445">&nbsp;&nbsp;&nbsp;&nbsp;Table Linen</option>

                                  <option value="446">&nbsp;&nbsp;&nbsp;&nbsp;Other Decorative Items</option>

                                  <option value="447">&nbsp;&nbsp;Heating Appliances</option>

                                  <option value="448">&nbsp;&nbsp;&nbsp;&nbsp;Stoves &amp; Ovens</option>

                                  <option value="449">&nbsp;&nbsp;&nbsp;&nbsp;Convection Ovens &amp; Stoves</option>

                                  <option value="450">&nbsp;&nbsp;&nbsp;&nbsp;Microwaves</option>

                                  <option value="451">&nbsp;&nbsp;&nbsp;&nbsp;Gas Stoves</option>

                                  <option value="452">&nbsp;&nbsp;&nbsp;&nbsp;Irons &amp; Ironing Boards</option>

                                  <option value="453">&nbsp;&nbsp;&nbsp;&nbsp;Pots &amp; Accessories</option>

                                  <option value="454">&nbsp;&nbsp;&nbsp;&nbsp;Bakeware &amp; Appliances</option>

                                  <option value="455">&nbsp;&nbsp;&nbsp;&nbsp;Frying Pans, Toasters &amp; Waffle Makers
                                  </option>

                                  <option value="456">&nbsp;&nbsp;&nbsp;&nbsp;Fire Places &amp; Accessories</option>

                                  <option value="457">&nbsp;&nbsp;&nbsp;&nbsp;Gas Heaters</option>

                                  <option value="458">&nbsp;&nbsp;Carpets &amp; Rugs</option>

                                  <option value="459">&nbsp;&nbsp;Other Home Accessories</option>

                                  <option value="460">&nbsp;&nbsp;&nbsp;&nbsp;Window Cleaner</option>

                                  <option value="461">&nbsp;&nbsp;&nbsp;&nbsp;Vacuum Cleaner</option>

                                  <option value="462">&nbsp;&nbsp;&nbsp;&nbsp;Other Home Accessories</option>

                                  <option value="463">&nbsp;&nbsp;Pet Supplies</option>

                                  <option value="464">&nbsp;&nbsp;&nbsp;&nbsp;Dogs</option>

                                  <option value="465">&nbsp;&nbsp;&nbsp;&nbsp;Cats</option>

                                  <option value="466">&nbsp;&nbsp;&nbsp;&nbsp;Birds</option>

                                  <option value="467">&nbsp;&nbsp;&nbsp;&nbsp;Small Animals</option>

                                  <option value="468">&nbsp;&nbsp;&nbsp;&nbsp;Fish</option>

                                  <option value="469">&nbsp;&nbsp;&nbsp;&nbsp;Exotic Animals</option>

                                  <option value="470">Liquor</option>

                                  <option value="471">&nbsp;&nbsp;Wines</option>

                                  <option value="472">&nbsp;&nbsp;&nbsp;&nbsp;Red Wine</option>

                                  <option value="473">&nbsp;&nbsp;&nbsp;&nbsp;Champagne &amp; Sparkling</option>

                                  <option value="474">&nbsp;&nbsp;&nbsp;&nbsp;White Wine</option>

                                  <option value="475">&nbsp;&nbsp;&nbsp;&nbsp;Rose Wine</option>

                                  <option value="476">&nbsp;&nbsp;&nbsp;&nbsp;Box Wines</option>

                                  <option value="477">&nbsp;&nbsp;Spirits</option>

                                  <option value="478">&nbsp;&nbsp;&nbsp;&nbsp;Cognac</option>

                                  <option value="479">&nbsp;&nbsp;&nbsp;&nbsp;Gin</option>

                                  <option value="480">&nbsp;&nbsp;&nbsp;&nbsp;Whisky</option>

                                  <option value="481">&nbsp;&nbsp;&nbsp;&nbsp;Brandy</option>

                                  <option value="482">&nbsp;&nbsp;&nbsp;&nbsp;Vodka</option>

                                  <option value="483">&nbsp;&nbsp;&nbsp;&nbsp;Rum</option>

                                  <option value="484">&nbsp;&nbsp;&nbsp;&nbsp;Minis-and-sachets</option>

                                  <option value="485">&nbsp;&nbsp;&nbsp;&nbsp;Premixes</option>

                                  <option value="486">&nbsp;&nbsp;&nbsp;&nbsp;Tequila</option>

                                  <option value="487">&nbsp;&nbsp;&nbsp;&nbsp;Liqueurs</option>

                                  <option value="488">&nbsp;&nbsp;Beers &amp; Ciders</option>

                                  <option value="489">&nbsp;&nbsp;&nbsp;&nbsp;Beer</option>

                                  <option value="490">&nbsp;&nbsp;&nbsp;&nbsp;Cider</option>

                                  <option value="502">Games &amp; Toys</option>

                                  <option value="492">&nbsp;&nbsp;Video Games</option>

                                  <option value="493">&nbsp;&nbsp;&nbsp;&nbsp;Video Game Consoles</option>

                                  <option value="494">&nbsp;&nbsp;&nbsp;&nbsp;Controllers &amp; Attachments</option>

                                  <option value="503">&nbsp;&nbsp;&nbsp;&nbsp;Video Game Software</option>

                                  <option value="495">&nbsp;&nbsp;&nbsp;&nbsp;Sony PlayStation</option>

                                  <option value="496">&nbsp;&nbsp;&nbsp;&nbsp;Microsoft XBox</option>

                                  <option value="497">&nbsp;&nbsp;&nbsp;&nbsp;Nintendo</option>

                                  <option value="498">&nbsp;&nbsp;&nbsp;&nbsp;PC Gaming</option>

                                  <option value="499">&nbsp;&nbsp;&nbsp;&nbsp;Mac</option>

                                  <option value="500">&nbsp;&nbsp;&nbsp;&nbsp;VR &amp; AR Gaming</option>

                                  <option value="501">&nbsp;&nbsp;&nbsp;&nbsp;Video Game Accessories</option>

                                  <option value="504">&nbsp;&nbsp;Toys &amp; Other Games</option>

                                  <option value="505">&nbsp;&nbsp;&nbsp;&nbsp;Snooker &amp; Pool</option>

                                  <option value="506">&nbsp;&nbsp;&nbsp;&nbsp;Table Based Games</option>

                                  <option value="507">&nbsp;&nbsp;&nbsp;&nbsp;Board Games &amp; Darts</option>

                                  <option value="508">&nbsp;&nbsp;&nbsp;&nbsp;Remote &amp; Electronic Toys</option>

                                  <option value="509">&nbsp;&nbsp;&nbsp;&nbsp;Outdoors Toys &amp; Games</option>

                                  <option value="510">&nbsp;&nbsp;&nbsp;&nbsp;Swimming &amp; Water Games</option>

                                  <option value="511">&nbsp;&nbsp;&nbsp;&nbsp;Kids Toys &amp; Games</option>

                                  <option value="512">&nbsp;&nbsp;&nbsp;&nbsp;Grownups Games &amp; Toys</option>

                                  <option value="513">&nbsp;&nbsp;&nbsp;&nbsp;Other Toys &amp; Games</option>

                                  <option value="514">Tools &amp; DIY</option>

                                  <option value="515">&nbsp;&nbsp;Cordless Power Tools</option>

                                  <option value="516">&nbsp;&nbsp;Power Tools</option>

                                  <option value="517">&nbsp;&nbsp;Hand Tools</option>

                                  <option value="518">&nbsp;&nbsp;Tool Boxes &amp; Storage</option>

                                  <option value="519">&nbsp;&nbsp;Air tools &amp; Air Compressors</option>

                                  <option value="520">&nbsp;&nbsp;Measuring &amp; Layout Tools</option>

                                  <option value="521">&nbsp;&nbsp;Protective Gear</option>

                                  <option value="522">&nbsp;&nbsp;Hand Tool Accessories</option>

                                  <option value="523">&nbsp;&nbsp;Trolleys &amp; Ladders</option>

                                  <option value="524">&nbsp;&nbsp;Paint &amp; Spray</option>

                                  <option value="525">&nbsp;&nbsp;Security</option>

                                  <option value="526">&nbsp;&nbsp;&nbsp;&nbsp;Padlocks &amp; Door Locks</option>

                                  <option value="527">&nbsp;&nbsp;&nbsp;&nbsp;Safes</option>

                                  <option value="528">&nbsp;&nbsp;&nbsp;&nbsp;Security Accessories</option>

                                  <option value="529">&nbsp;&nbsp;&nbsp;&nbsp;Surveillance Equipment</option>

                                  <option value="530">&nbsp;&nbsp;Power Tool Accessories</option>

                                  <option value="531">&nbsp;&nbsp;Air tool Accessories</option>

                                  <option value="532">&nbsp;&nbsp;Other Accessories</option>

                                  <option value="533">&nbsp;&nbsp;Wallpapers</option>

                                  <option value="534">Cars &amp; Motorcycles</option>

                                  <option value="535">&nbsp;&nbsp;Car Accessories</option>

                                  <option value="536">&nbsp;&nbsp;&nbsp;&nbsp;Exhaust System &amp; Accessories</option>

                                  <option value="537">&nbsp;&nbsp;&nbsp;&nbsp;Car Audio &amp; Display</option>

                                  <option value="538">&nbsp;&nbsp;&nbsp;&nbsp;Car Interior Accessories</option>

                                  <option value="539">&nbsp;&nbsp;&nbsp;&nbsp;Travel &amp; Off-road Gear</option>

                                  <option value="540">&nbsp;&nbsp;&nbsp;&nbsp;Exterior Vehicle Accessories</option>

                                  <option value="541">&nbsp;&nbsp;&nbsp;&nbsp;Canopies</option>

                                  <option value="542">&nbsp;&nbsp;&nbsp;&nbsp;Filters &amp; Other Engine Accessories
                                  </option>

                                  <option value="543">&nbsp;&nbsp;&nbsp;&nbsp;Other Car Accessories</option>

                                  <option value="544">&nbsp;&nbsp;Motorcycle Accessories</option>

                                  <option value="545">&nbsp;&nbsp;&nbsp;&nbsp;Wheels &amp; Tires</option>

                                  <option value="546">&nbsp;&nbsp;&nbsp;&nbsp;Exhaust Systems &amp; Accessories</option>

                                  <option value="547">&nbsp;&nbsp;&nbsp;&nbsp;Protective Clothing Gear</option>

                                  <option value="548">&nbsp;&nbsp;&nbsp;&nbsp;Motorcycle Accessories</option>

                                  <option value="549">Baby &amp; Toddler</option>

                                  <option value="550">&nbsp;&nbsp;Prams &amp; Strollers</option>

                                  <option value="551">&nbsp;&nbsp;&nbsp;&nbsp;Strollers</option>

                                  <option value="552">&nbsp;&nbsp;&nbsp;&nbsp;Baby Pram</option>

                                  <option value="553">&nbsp;&nbsp;&nbsp;&nbsp;Stroller Accessories</option>

                                  <option value="554">&nbsp;&nbsp;&nbsp;&nbsp;Stroller Parts</option>

                                  <option value="555">&nbsp;&nbsp;Cribs (Cots) &amp; Accessories</option>

                                  <option value="556">&nbsp;&nbsp;&nbsp;&nbsp;Accessories</option>

                                  <option value="557">&nbsp;&nbsp;&nbsp;&nbsp;Baby Mattresses</option>

                                  <option value="558">&nbsp;&nbsp;&nbsp;&nbsp;Moses Baskets</option>

                                  <option value="559">&nbsp;&nbsp;&nbsp;&nbsp;Nursery Bedding</option>

                                  <option value="560">&nbsp;&nbsp;&nbsp;&nbsp;Baby &amp; Toddler Chairs</option>

                                  <option value="561">&nbsp;&nbsp;Travelling &amp; Accessorries</option>

                                  <option value="562">&nbsp;&nbsp;&nbsp;&nbsp;Baby Car Seat</option>

                                  <option value="563">&nbsp;&nbsp;&nbsp;&nbsp;Baby Travel Bag</option>

                                  <option value="564">&nbsp;&nbsp;&nbsp;&nbsp;Baby Carrier</option>

                                  <option value="565">&nbsp;&nbsp;&nbsp;&nbsp;Baby Car Mirror</option>

                                  <option value="566">&nbsp;&nbsp;&nbsp;&nbsp;Other Travel Gear</option>

                                  <option value="567">&nbsp;&nbsp;Baby &amp; Maternity Clothing</option>

                                  <option value="568">&nbsp;&nbsp;&nbsp;&nbsp;Infant &amp; Toddler Clothes</option>

                                  <option value="569">&nbsp;&nbsp;&nbsp;&nbsp;Maternity Clothes</option>

                                  <option value="570">&nbsp;&nbsp;&nbsp;&nbsp;Infant &amp; Toddler Footwear</option>

                                  <option value="571">&nbsp;&nbsp;&nbsp;&nbsp;Maternity Shoes</option>

                                  <option value="572">&nbsp;&nbsp;Toys and Learning</option>

                                  <option value="573">&nbsp;&nbsp;&nbsp;&nbsp;Potty Training</option>

                                  <option value="574">&nbsp;&nbsp;&nbsp;&nbsp;Activity Centers</option>

                                  <option value="575">&nbsp;&nbsp;&nbsp;&nbsp;Walking Rings &amp; Walkers</option>

                                  <option value="576">&nbsp;&nbsp;&nbsp;&nbsp;Play Structures</option>

                                  <option value="577">&nbsp;&nbsp;&nbsp;&nbsp;Baby Rattles</option>

                                  <option value="578">&nbsp;&nbsp;&nbsp;&nbsp;Electronic Toys</option>

                                  <option value="579">&nbsp;&nbsp;&nbsp;&nbsp;Puzzles</option>

                                  <option value="580">&nbsp;&nbsp;&nbsp;&nbsp;Other Toys</option>

                                  <option value="581">&nbsp;&nbsp;Electronics &amp; Monitoring</option>

                                  <option value="582">&nbsp;&nbsp;&nbsp;&nbsp;Baby Monitoring Devices</option>

                                  <option value="583">&nbsp;&nbsp;&nbsp;&nbsp;Remote Monitoring</option>

                                  <option value="584">&nbsp;&nbsp;&nbsp;&nbsp;Digital Thermometer</option>

                                  <option value="585">&nbsp;&nbsp;&nbsp;&nbsp;Other Electronics</option>

                              </select>
                              <div className="search-form__wrapper position-relative">
                                  <input type="search" name="q" placeholder="Search for Products..." autoComplete="off"
                                      className="search-form__input common-input py-13 ps-16 pe-18 rounded-0 border-0"/>


                              </div>
                              <button type="submit"
                                  className="bg-main-two-600 flex-center text-lg text-white flex-shrink-0 w-48  d-lg-flex d-none"><i
                                      className="ph ph-magnifying-glass"></i></button>
                          </div>

                          <div className="bb-quick-search-results rounded-8"></div>
                      </form>

                  </div>
                  {/* <!-- form Category start --> */}

                  {/* <!-- Header Middle Right start --> */}
                  <div className="header-right flex-align d-lg-block d-none">
                      <div className="header-two-activities flex-align flex-wrap gap-32">
                          <button type="button" className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two">
                              <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                  <i className="ph ph-magnifying-glass"></i>
                              </span>
                          </button>

                          {/* <!-- home beforelogin--> */}
                          <div className="flex-align gap-8">
                              <a href="http://127.0.0.1:8000/login" className="flex-align flex-column  item-hover-two">
                                  <span className="text-md text-white d-flex position-relative item-hover__text ">

                                      Sign in
                                  </span>
                                  {/* <!-- <span className="loso text-md text-white item-hover__text d-none d-lg-flex">Login</span> --> */}
                              </a>|
                              <a href="http://127.0.0.1:8000/register" className="flex-align flex-column  item-hover-two">
                                  <span className="text-md text-white d-flex position-relative item-hover__text">

                                      Sign up
                                  </span>
                                  {/* <!-- <span className="text-md text-white item-hover__text d-none d-lg-flex">Signup</span> --> */}
                              </a>
                          </div>
                          <a href="http://127.0.0.1:8000/cart"
                              className="flex-align flex-column gap-8 item-hover-two  cartmini-open-btn"
                              data-bb-toggle="open-mini-cart" data-url="http://127.0.0.1:8000/ajax/cart-content">

                              <span className="text-2xl text-white d-flex position-relative me-2 mt-6 item-hover__text">
                                  <i className="ph ph-shopping-cart-simple"></i>

                                  <span
                                      className="tp-header-action-badge w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4"
                                      data-bb-value="cart-count">0</span>
                              </span>
                              {/* <!-- <span className="text-md text-white item-hover__text d-none d-lg-flex">Cart</span> --> */}
                          </a>
                          <div className="select-dropdown-for-home-two pl-0">
                              {/* <!-- Dropdown Select Start --> */}
                              <ul className="header-top__right style-two ">
                                  <li
                                      className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">

                                  </li>

                                  <li
                                      className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                      <a href="javascript:void(0)"
                                          className="curreny_text_color selected-text text-sm py-8">ZAR</a>
                                      <ul
                                          className="selectable-text-list on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                          <li>
                                              <a href="http://127.0.0.1:8000/currency/switch/USD"
                                                  className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0">USD</a>
                                          </li>
                                          <li>
                                              <a href="http://127.0.0.1:8000/currency/switch/EUR"
                                                  className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0">EUR</a>
                                          </li>
                                          <li>
                                              <a href="http://127.0.0.1:8000/currency/switch/VND"
                                                  className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0">VND</a>
                                          </li>
                                          <li>
                                              <a href="http://127.0.0.1:8000/currency/switch/NGN"
                                                  className="hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0">NGN</a>
                                          </li>
                                      </ul>


                                  </li>
                              </ul>
                              {/* <!-- Dropdown Select End --> */}
                          </div>

                      </div>
                  </div>

              </nav>
          </div>
      </header>
      {/* <!-- ======================= Middle Header Two End ========================= --> */}

      {/* <!-- ==================== Header Two Start Here ==================== --> */}
      <header className="header bg-blue border-bottom border-gray-100"
          style={{backgroundColor: "rgb(85, 142, 213)", color: "rgb(255, 255, 255)"}}>
          <div className="container container-lg">
              <nav className="header-inner d-flex justify-content-between gap-8">
                  <div className="flex-align menu-category-wrapper">

                      {/* <!-- Category Dropdown Start --> */}
                      <div className="category on-hover-item bg-main-600 text-white">
                          <button type="button"
                              className="category__button category__button_2 flex-align gap-8 fw-medium bg-main-two-600 py-7 px-10 text-white text-sm">
                              <span className="icon text-2xl d-xs-flex d-none"><i className="ph ph-dots-nine"></i></span>
                              <span className="d-sm-flex d-none">All</span> Categories

                          </button>

                          {/* <!-- Do not show the dropdown if not logged in --> */}
                          <div
                              className="responsive-dropdown max-h-800 on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper d-none">
                              <button type="button"
                                  className="close-responsive-dropdown rounded-circle text-xl position-absolute inset-inline-end-0 inset-block-start-0 mt-4 me-8 d-lg-none d-flex">
                                  <i className="ph ph-x"></i>
                              </button>
                              <div className="logo px-16 d-lg-none d-block">
                                  <a href="" className="link">
                                      <img src="https://ecbackend.cazhier.com/themes/ecomm/images/logo/logo.png"
                                          alt="Logo"/>
                                  </a>
                              </div>
                          </div>
                      </div>

                      {/* <!-- Menu Start  --> */}


                      <div className="header-top">
                          <div className="container-fluid megamenusip">
                              <ul className="exo-menu ">
                                  <li>
                                      <a className="text-white " href="http://127.0.0.1:8000/user-dashboard">Home</a>
                                  </li>


                                  <li className=" mega-drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Electronics
                                      </a>

                                      <div className="animated fadeIn mega-menu ">
                                          <div className="mega-menu-wrap">
                                              <div className="row">
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">TV &amp; Visual</h4>
                                                      <ul className="tv-visual">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/lcd-tv">LCD
                                                                  TV</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/led-tv">LED
                                                                  TV</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/curved-tv">Curved
                                                                  TV</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/plasma-tv">Plasma
                                                                  TV</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/satellite-decoders">Satellite
                                                                  Decoders</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/tv-components">Tv
                                                                  Components</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/projector">Projector</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/vr-headset">VR
                                                                  Headset</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/media-streamers">Media
                                                                  Streamers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/spares">Spares</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Refrigerator</h4>
                                                      <ul className="refrigerator">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/single-door-fridge">Single
                                                                  Door Fridge</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/double-door-fridge">Double
                                                                  Door Fridge</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/quad-door-fridge">Quad
                                                                  Door Fridge</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/mini-fridge">Mini
                                                                  Fridge</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/wine-fridge">Wine
                                                                  Fridge</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/bar-fridge">Bar
                                                                  Fridge</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/freezers">Freezers</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Washing Machine</h4>
                                                      <ul className="washing-machine">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/front-loading">Front
                                                                  Loading</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/top-loading">Top
                                                                  Loading</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/washer-dryer-combo">Washer
                                                                  Dryer Combo</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/dish-washing-machine">Dish
                                                                  Washing Machine</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/tumble-dryers">Tumble
                                                                  Dryers</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Air Conditioner</h4>
                                                      <ul className="air-conditioner">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/air-humidifier">Air
                                                                  Humidifier</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/air-purifier">Air
                                                                  Purifier</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/air-conditioner-components">Air
                                                                  Conditioner Components</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/air-conditioner-filter">Air
                                                                  Conditioner Filter</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/electric-fan">Electric
                                                                  Fan</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/air-cooler">Air
                                                                  Cooler</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Audio Systems</h4>
                                                      <ul className="audio-systems">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/home-theatre">Home
                                                                  Theatre</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/amplifier">Amplifier</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/subwoofer-woofer">Subwoofer
                                                                  &amp; Woofer</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/midrange-speakers">Midrange
                                                                  Speakers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/tweeters">Tweeters</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/full-range-driver-speakers">Full
                                                                  Range Driver Speakers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/outdoors-speakers">Outdoors
                                                                  Speakers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/sound-bar">Sound
                                                                  Bar</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/piano-keyboard">Piano
                                                                  &amp; Keyboard</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/music-production-equipment">Music
                                                                  Production Equipment</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/djing-equipment">DJing
                                                                  Equipment</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/headphones-headsets">Headphones
                                                                  &amp; Headsets</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Computer</h4>
                                                      <ul className="computer">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/laptop">Laptop</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/notebook">Notebook</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/accessories-peripherals">Accessories
                                                                  &amp; Peripherals</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/desktop">Desktop</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/printers">Printers</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/wifi-networking">WiFi
                                                                  &amp; Networking</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/computer-components">Computer
                                                                  Components</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/software">Software</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/monitor">Monitor</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/storage-devices">Storage
                                                                  Devices</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/scanners">Scanners</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/wiring-cables">Wiring
                                                                  &amp; Cables</a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>

                                  <li className=" mega-drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Fashion &amp; Style
                                      </a>

                                      <div className="animated fadeIn mega-menu ">
                                          <div className="mega-menu-wrap">
                                              <div className="row">
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Accessories</h4>
                                                      <ul className="accessories">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/shavers-trimmers">Shavers
                                                                  &amp; Trimmers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/gloves">Gloves</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/eyewear">Eyewear</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/scarves">Scarves</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/belts">Belts</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/wallets">Wallets</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/purses">Purses</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/headwear">Headwear</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/hairclips-combs">Hairclips
                                                                  &amp; Combs</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/ties">Ties</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/umbrellas">Umbrellas</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/other-staff">Other
                                                                  Staff</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Bags</h4>
                                                      <ul className="bags">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/hand-bags">Hand
                                                                  bags</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/school-bags">School
                                                                  Bags</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/college-bags">College
                                                                  Bags</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/garment-bags">Garment
                                                                  Bags</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/waist-bag">Waist
                                                                  Bag</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/suitcases">Suitcases</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/business-bags">Business
                                                                  Bags</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/travel-bags">Travel
                                                                  Bags</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/kids-luggage">Kids
                                                                  Luggage</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/crossbody-bags">Crossbody
                                                                  Bags</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/shoulder-bags">Shoulder
                                                                  Bags</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/backpacks">Backpacks</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Cosmetics</h4>
                                                      <ul className="cosmetics">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/skin-care">Skin
                                                                  Care</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/hands-nail-care">Hands
                                                                  &amp; Nail Care</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/make-ups">Make
                                                                  ups</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/hair-care">Hair
                                                                  Care</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/body-cream">Body
                                                                  Cream</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/after-shave">After
                                                                  Shave</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/hair-removal-cream">Hair
                                                                  Removal Cream</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/gift-sets">Gift
                                                                  Sets</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/oral-care">Oral
                                                                  Care</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/lips">Lips</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/sanitizer">Sanitizer</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/wigs-weaves">Wigs
                                                                  &amp; Weaves</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/eye-lashes">Eye
                                                                  Lashes</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/hair-styling-products">Hair
                                                                  Styling Products</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/fragrance-candles">Fragrance
                                                                  Candles</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Fragrances</h4>
                                                      <ul className="fragrances">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/perfume">Perfume</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/cologne">Cologne</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/eau-de-parfum">Eau
                                                                  de Parfum</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/eau-de-toilette">Eau
                                                                  de Toilette</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/eau-de-cologne">Eau
                                                                  de Cologne</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/aerosol-spray">Aerosol
                                                                  Spray</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/essential-oils">Essential
                                                                  Oils</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/fragrance-oils">Fragrance
                                                                  Oils</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/scented-candles">Scented
                                                                  Candles</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/fragrance-diffuser">Fragrance
                                                                  Diffuser</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Womens Fashion</h4>
                                                      <ul className="womens-fashion">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/dresses-skirts">Dresses
                                                                  &amp; Skirts</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/shorts">Shorts</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/jeans-pants">Jeans
                                                                  &amp; Pants</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/formal-wear">Formal
                                                                  Wear</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/jumpsuits-playsuits">Jumpsuits
                                                                  &amp; Playsuits</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/t-shirts-vests">T-Shirts
                                                                  &amp; Vests</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/leggings-tights">Leggings
                                                                  &amp; Tights</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/sweaters-jackets">Sweaters
                                                                  &amp; Jackets</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/blouses-shirts">Blouses
                                                                  &amp; Shirts</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/underwear-sleepwear">Underwear
                                                                  &amp; Sleepwear</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/leisure-sportswear">Leisure
                                                                  &amp; Sportswear</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/sneakers-boots">Sneakers
                                                                  &amp; Boots</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/heels-sandals">Heels
                                                                  &amp; Sandals</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/flats-sleepers">Flats
                                                                  &amp; Sleepers</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Mens Fashion</h4>
                                                      <ul className="mens-fashion">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/jeans-trousers">Jeans
                                                                  &amp; Trousers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/jackets-coats">Jackets
                                                                  &amp; Coats</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/vests-t-shirts">Vests
                                                                  &amp; T-Shirts</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/bermudas-shorts">Bermudas
                                                                  &amp; Shorts</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/formal-attire">Formal
                                                                  Attire</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/sportswear-leisure">Sportswear
                                                                  &amp; Leisure</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/shirts">Shirts</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/sweaters-and-hoodies">Sweaters
                                                                  and Hoodies</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/pajamas-underwear">Pajamas
                                                                  &amp; Underwear</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/formal-shoes">Formal
                                                                  Shoes</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/boots-sneakers">Boots
                                                                  &amp; Sneakers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/sleepers-flats">Sleepers
                                                                  &amp; Flats</a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>

                                  <li className="  drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Art &amp; Crafts
                                      </a>

                                      <div className="animated fadeIn  drop-down-ul ">
                                          <ul className="sub_divs">
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/paintings-drawings">Paintings
                                                      &amp; Drawings</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/sculptures-molds">Sculptures
                                                      &amp; Molds</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/antiques">Antiques</a>
                                              </li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/beading-decorating">Beading
                                                      &amp; Decorating</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/crafting">Crafting</a>
                                              </li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/knitting-crochet">Knitting
                                                      &amp; Crochet</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/collectibles">Collectibles</a>
                                              </li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/art-instruments">Art
                                                      Instruments</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/art-accessories">Art
                                                      Accessories</a></li>
                                          </ul>
                                      </div>
                                  </li>

                                  <li className="  drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Cell Phones &amp; Tablets
                                      </a>

                                      <div className="animated fadeIn  drop-down-ul ">
                                          <ul className="sub_divs">
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/smartphones">Smartphones</a>
                                              </li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/tablets">Tablets</a>
                                              </li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/smart-watches">Smart
                                                      Watches</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/mobile-accessories">Mobile
                                                      Accessories</a></li>
                                          </ul>
                                      </div>
                                  </li>

                                  <li className="  drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Gadgets
                                      </a>

                                      <div className="animated fadeIn  drop-down-ul ">
                                          <ul className="sub_divs">
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/drones">Drones</a>
                                              </li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/personal-safety">Personal
                                                      Safety</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/secret-surveillance">Secrete
                                                      Surveillance</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/smart-accessories">Smart
                                                      Accessories</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/wearables">Wearables</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </li>

                                  <li className=" mega-drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Jewellery &amp; Watches
                                      </a>

                                      <div className="animated fadeIn mega-menu ">
                                          <div className="mega-menu-wrap">
                                              <div className="row">
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Body Jewellery</h4>
                                                      <ul className="body-jewellery">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/wrist-watches">Wrist
                                                                  Watches</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/necklaces-pendants">Necklaces
                                                                  &amp; Pendants</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/bracelets-bangles">Bracelets
                                                                  &amp; Bangles</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/rings">Rings</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/ear-rings">Ear
                                                                  Rings</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/brooches-and-pins">Brooches
                                                                  and Pins</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/cufflinks">Cufflinks</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/anklets">Anklets</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/bespoke-jewellery">Bespoke
                                                                  Jewellery</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Jewellery Accessories</h4>
                                                      <ul className="jewellery-accessories">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/storage-organizers">Storage
                                                                  &amp; Organizers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/jewellery-cleaners">Jewellery
                                                                  Cleaners</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/watch-accessories">Watch
                                                                  Accessories</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/cleaning-chemicals">Cleaning
                                                                  Chemicals</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/other-accessory">Other
                                                                  accessory</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Ethnic &amp; Tribal Jewellery</h4>
                                                      <ul className="ethnic-tribal-jewellery">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/neck-wrist-jewellery">Neck
                                                                  &amp; Wrist Jewellery</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/head-gear-jewellery">Head
                                                                  Gear &amp; Jewellery</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/waist-jewellery">Waist
                                                                  Jewellery</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/artistic-handwork">Artistic
                                                                  Handwork</a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>

                                  <li className="  drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Health
                                      </a>

                                      <div className="animated fadeIn  drop-down-ul ">
                                          <ul className="sub_divs">
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/dietary-supplements">Dietary
                                                      Supplements</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/natural-herbs">Natural
                                                      Herbs</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/vitamin-supplements">Vitamin
                                                      Supplements</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/energy-tonics">Energy
                                                      Tonics</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/patent-medicine">Patent
                                                      Medicine</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/antibacterial-antiseptic">Antibacterial
                                                      &amp; Antiseptic</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/sexual-health">Sexual
                                                      Health</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/sports-nutrition">Sports
                                                      Nutrition</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/pain-killers">Pain
                                                      Killers</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/eyes-vision">Eyes
                                                      &amp; Vision</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/electro-mechanical">Electro
                                                      &amp; Mechanical</a></li>
                                          </ul>
                                      </div>
                                  </li>

                                  <li className=" mega-drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Sports &amp; Training
                                      </a>

                                      <div className="animated fadeIn mega-menu ">
                                          <div className="mega-menu-wrap">
                                              <div className="row">
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Sports &amp; Leisure Items</h4>
                                                      <ul className="sports-leisure-items">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/golf">Golf</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/cycling">Cycling</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/soccer-and-rugby">Soccer
                                                                  and Rugby</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/netball-and-tennis">Netball
                                                                  and Tennis</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/mma-contact-sport">MMA
                                                                  &amp; Contact Sport</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/skating-and-skateboards">Skating
                                                                  and Skateboards</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/water-sports">Water
                                                                  Sports</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/fishing-equipment">Fishing
                                                                  Equipment</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/yoga-equipment">Yoga
                                                                  Equipment</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/cricket-and-hockey">Cricket
                                                                  and Hockey</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/indoor-sports">Indoor
                                                                  Sports</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/other-sports">Other
                                                                  Sports</a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="col-md-2">
                                                      <h4 className="row mega-title">Exercising Equipment</h4>
                                                      <ul className="exercising-equipment">
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/treadmill-and-bikes">Treadmill
                                                                  and Bikes</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/dumbells">Dumbells</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/home-gyms">Home
                                                                  Gyms</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/benches">Benches</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/barbells-and-attachments">Barbells
                                                                  and Attachments</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/sports-nutrition-1">Sports
                                                                  Nutrition</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/gym-belts">Gym
                                                                  Belts</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/hand-grippers">Hand
                                                                  Grippers</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/multi-purpose-training-machine">Multi
                                                                  Purpose Training Machine</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/electronic-training-tools">Electronic
                                                                  Training Tools</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/gym-accessories">Gym
                                                                  Accessories</a></li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/weights">Weights</a>
                                                          </li>
                                                          <li><a className="text-color-gray"
                                                                  href="http://127.0.0.1:8000/product-categories/other-training-equipment">Other
                                                                  Training Equipment</a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>

                                  <li className="  drop-down ">
                                      <a href="javascript:void(0)" style={{color: "rgb(255, 255, 255)"}}>
                                          Gadgets
                                      </a>

                                      <div className="animated fadeIn  drop-down-ul ">
                                          <ul className="sub_divs">
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/drones">Drones</a>
                                              </li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/personal-safety">Personal
                                                      Safety</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/secret-surveillance">Secret
                                                      Surveillance</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/smart-accessories">Smart
                                                      Accessories</a></li>
                                              <li className="solo_menu"><a className="text-color-gray"
                                                      href="http://127.0.0.1:8000/product-categories/wearables">Wearables</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </li>
                              </ul>




                          </div>
                      </div>
                      {/* <!-- Menu End  --> */}
                  </div>

                  {/* <!-- Header Right start --> */}
                  <div className="header-right flex-align">



                      <div className="me-8 d-lg-none d-block">
                          <div className="header-two-activities flex-align flex-wrap gap-32">
                              <button type="button" className="flex-align search-icon d-lg-none d-flex gap-4 item-hover-two">
                                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                      <i className="ph ph-magnifying-glass"></i>
                                  </span>
                              </button>
                              <a href="#" className="flex-align flex-column gap-8 item-hover-two">
                                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                      <i className="ph ph-user"></i>
                                  </span>
                                  <span className="text-md text-white item-hover__text d-none d-lg-flex">Login</span>
                              </a>
                              <a href="#" className="flex-align flex-column gap-8 item-hover-two">
                                  <span className="text-2xl text-white d-flex position-relative item-hover__text">
                                      <i className="ph ph-user-plus"></i>
                                  </span>
                                  <span className="text-md text-white item-hover__text d-none d-lg-flex">Signup</span>
                              </a>
                              <a href="#" className="flex-align flex-column gap-8 item-hover-two">
                                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                      <i className="ph-fill ph-shuffle"></i>
                                      <span
                                          className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">2</span>
                                  </span>
                                  <span className="text-md text-white item-hover__text d-none d-lg-flex">Compare</span>
                              </a>
                              <a href="#" className="flex-align flex-column gap-8 item-hover-two">
                                  <span className="text-2xl text-white d-flex position-relative me-6 mt-6 item-hover__text">
                                      <i className="ph ph-shopping-cart-simple"></i>
                                      <span
                                          className="w-16 h-16 flex-center rounded-circle bg-main-two-600 text-white text-xs position-absolute top-n6 end-n4">2</span>
                                  </span>
                                  <span className="text-md text-white item-hover__text d-none d-lg-flex">Cart</span>
                              </a>
                          </div>
                      </div>
                      <button type="button"
                          className="responsive_burger_btn toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex">
                          <i className="ph ph-list"></i>
                      </button>
                  </div>
                  {/* <!-- Header Right End  --> */}
              </nav>


              <div id="mobile-menu" className="mobile-menu-overlay d-lg-none">
                  <div className="mobile-menu-container">
                      <div className="mobile-menu-header">
                          <span className="text-black mobile_title">All Categories</span>
                          <button className="close-mobile-menu mobile_close">×</button>
                      </div>
                      <div className="mobile-menu-content">
                          <div className="main-menu">
                              <ul className="mobile-menu-list">
                                  <li className="menu-item" data-submenu="appliances">
                                      <img src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img1.png"
                                          alt="Appliances"/>
                                      <span className="span_menu">Appliances</span>
                                  </li>
                                  <li className="menu-item" data-submenu="bikes-scooters">
                                      <img src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img3.png"
                                          alt="Bikes &amp; Scooters"/>
                                      <span className="span_menu">Bikes &amp; Scooters</span>
                                  </li>
                                  <li className="menu-item" data-submenu="trending">
                                      <img src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img2.png"
                                          alt="Trending Now"/>
                                      <span className="span_menu">Trending Now</span>
                                  </li>
                                  <li className="menu-item" data-submenu="brands">
                                      <img src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img5.png"
                                          alt="Shop By Brand"/>
                                      <span className="span_menu">Shop By Brand</span>
                                  </li>
                              </ul>

                          </div>

                          <div className="submenu-container">
                              <div className="submenu" id="appliances" style={{display: "none"}}>
                                  <div className="final-menu">
                                      <h3>Bikes &amp; Scooters</h3>
                                      <ul>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/bg/promo-bg-img1.png"
                                                  alt="Sale is Live!"/> Sale is Live for bike and scooters</li>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/bg/promo-bg-img2.png"
                                                  alt="Bikes and Scooters"/> New Wego</li>
                                      </ul>
                                  </div>
                                  <div className="final-menu">
                                      <h3>Clothes</h3>
                                      <ul>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/bg/week-deal-bg.png"
                                                  alt="Sale is Live!"/>Kurta</li>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img9.png"
                                                  alt="Bikes and Scooters"/>Saree</li>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/week-deal-img2.png"
                                                  alt="Sale is Live!"/>Tops and bottom</li>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img2.png"
                                                  alt="Sale is Live!"/>Bottom wear</li>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img3.png"
                                                  alt="Bikes and Scooters"/>Western tops</li>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img5.png"
                                                  alt="Bikes and Scooters"/>Bodycon</li>
                                      </ul>
                                  </div>
                                  <div className="final-menu">
                                      <h3>Mobiles</h3>
                                      <ul>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/bg/promo-bg-img1.png"
                                                  alt="Sale is Live!"/> Samsung</li>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/bg/promo-bg-img2.png"
                                                  alt="Bikes and Scooters"/> Vivo</li>
                                          <li className="list_submenu text-black"><img
                                                  src="https://ecbackend.cazhier.com/themes/ecomm/images/bg/promo-bg-img3.png"
                                                  alt="Sale is Live!"/> Oppo</li>
                                      </ul>
                                  </div>
                              </div>
                              <div className="submenu" id="bikes-scooters" style={{display: "none"}}>
                                  <h3>Computers</h3>
                                  <ul>
                                      <li className="list_submenu text-black"><img
                                              src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img6.png"
                                              alt="Sale is Live!"/> Laptop</li>
                                  </ul>
                              </div>
                              <div className="submenu" id="trending" style={{display: "none"}}>
                                  <h3>Trending Now</h3>
                                  <ul>
                                      <li className="list_submenu text-black"><img
                                              src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img7.png"
                                              alt="Magnus Neo Sale"/> Iphone 16</li>
                                      <li className="list_submenu text-black"><img
                                              src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img8.png"
                                              alt="Chetak 3502"/> Chetak 3502</li>
                                      <li className="list_submenu text-black"><img
                                              src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img9.png"
                                              alt="Vida V2 EV"/> VIDA V2 EV</li>
                                  </ul>
                              </div>
                              <div className="submenu" id="brands" style={{display: "none"}}>
                                  <h3>Shop By Brand</h3>
                                  <ul>
                                      <li className="list_submenu text-black"><img
                                              src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/trending-products-img1.png"
                                              alt="Hero"/> Hero</li>
                                      <li className="list_submenu text-black"><img
                                              src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/trending-products-img2.png"
                                              alt="Vida"/> Vida</li>
                                      <li className="list_submenu text-black"><img
                                              src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/product-two-img9.png"
                                              alt="Jawa Yezdi"/> Jawa Yezdi</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- End Mobile Menu --> */}

          </div>
      </header>
      {/* <!-- ==================== Header End Here ==================== --> */}
       {/* <!-- ============================ Banner Section start =============================== --> */}
       <div className="banner-two homepagetwo_afterlogin_wrapper">
            <div className="container container-lg">
                <div className="banner-two-wrapper  align-items-start">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 left-card" style={{marginTop:"10px"}} >
                            <div className="col-xxl-12 ">
                                <div className="border border-gray-100 py-2 px-12 rounded-16 bg-white">
                                    <div className="cat-drop-sidebar">


                                        <ul className="responsive-dropdown__list scroll-sm p-0 py-8 overflow-y-auto ">

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/electronics"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Electronics</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/tv-visual">
                                                                TV &amp; Visual

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/lcd-tv">
                                                                        LCD TV

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/led-tv">
                                                                        LED TV

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/plasma-tv">
                                                                        Plasma TV

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/curved-tv">
                                                                        Curved TV

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/satellite-decoders">
                                                                        Satellite Decoders

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tv-components">
                                                                        Tv Components

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/projector">
                                                                        Projector

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/vr-headset">
                                                                        VR Headset

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/media-streamers">
                                                                        Media Streamers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/spares">
                                                                        Spares

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/refrigerator">
                                                                Refrigerator

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/single-door-fridge">
                                                                        Single Door Fridge

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/double-door-fridge">
                                                                        Double Door Fridge

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/quad-door-fridge">
                                                                        Quad Door Fridge

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/mini-fridge">
                                                                        Mini Fridge

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/wine-fridge">
                                                                        Wine Fridge

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bar-fridge">
                                                                        Bar Fridge

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/freezers">
                                                                        Freezers

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/washing-machine">
                                                                Washing Machine

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/front-loading">
                                                                        Front Loading

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/top-loading">
                                                                        Top Loading

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/washer-dryer-combo">
                                                                        Washer Dryer Combo

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/dish-washing-machine">
                                                                        Dish Washing Machine

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tumble-dryers">
                                                                        Tumble Dryers

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/air-conditioner">
                                                                Air Conditioner

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/air-humidifier">
                                                                        Air Humidifier

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/air-purifier">
                                                                        Air Purifier

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/air-conditioner-components">
                                                                        Air Conditioner Components

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/air-conditioner-filter">
                                                                        Air Conditioner Filter

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/electric-fan">
                                                                        Electric Fan

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/air-cooler">
                                                                        Air Cooler

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/audio-systems">
                                                                Audio Systems

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/home-theatre">
                                                                        Home Theatre

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/amplifier">
                                                                        Amplifier

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/subwoofer-woofer">
                                                                        Subwoofer &amp; Woofer

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/midrange-speakers">
                                                                        Midrange Speakers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tweeters">
                                                                        Tweeters

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/full-range-driver-speakers">
                                                                        Full Range Driver Speakers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/outdoors-speakers">
                                                                        Outdoors Speakers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sound-bar">
                                                                        Sound Bar

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/piano-keyboard">
                                                                        Piano &amp; Keyboard

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/music-production-equipment">
                                                                        Music Production Equipment

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/djing-equipment">
                                                                        DJing Equipment

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/headphones-headsets">
                                                                        Headphones &amp; Headsets

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/computer">
                                                                Computer

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/laptop">
                                                                        Laptop

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/notebook">
                                                                        Notebook

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/accessories-peripherals">
                                                                        Accessories &amp; Peripherals

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/desktop">
                                                                        Desktop

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/printers">
                                                                        Printers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/wifi-networking">
                                                                        WiFi &amp; Networking

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/computer-components">
                                                                        Computer Components

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/software">
                                                                        Software

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/monitor">
                                                                        Monitor

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/storage-devices">
                                                                        Storage Devices

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/scanners">
                                                                        Scanners

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/wiring-cables">
                                                                        Wiring &amp; Cables

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/cameras-photo">
                                                                Cameras &amp; Photo

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/digital-cameras">
                                                                        Digital Cameras

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/lenses-photo">
                                                                        Lenses &amp; Photo

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/flash-accessories">
                                                                        Flash &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/vintage-filmography">
                                                                        Vintage Filmography

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/camera-drones">
                                                                        Camera Drones

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tripods-supports">
                                                                        Tripods &amp; Supports

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/lighting-studio">
                                                                        Lighting &amp; Studio

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/internet-cameras">
                                                                        Internet Cameras

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/binoculars-telescopes">
                                                                        Binoculars &amp; Telescopes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/video-editing-software">
                                                                        Video Editing Software

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/surveillance-video">
                                                                        Surveillance &amp; Video

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/camera-accessories">
                                                                        Camera Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/fashion-style"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Fashion &amp; Style</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/accessories">
                                                                Accessories

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/shavers-trimmers">
                                                                        Shavers &amp; Trimmers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/gloves">
                                                                        Gloves

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/eyewear">
                                                                        Eyewear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/scarves">
                                                                        Scarves

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/belts">
                                                                        Belts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/wallets">
                                                                        Wallets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/purses">
                                                                        Purses

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/headwear">
                                                                        Headwear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hairclips-combs">
                                                                        Hairclips &amp; Combs

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/ties">
                                                                        Ties

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/umbrellas">
                                                                        Umbrellas

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-staff">
                                                                        Other Staff

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/bags">
                                                                Bags

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hand-bags">
                                                                        Hand bags

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/school-bags">
                                                                        School Bags

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/college-bags">
                                                                        College Bags

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/garment-bags">
                                                                        Garment Bags

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/waist-bag">
                                                                        Waist Bag

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/suitcases">
                                                                        Suitcases

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/business-bags">
                                                                        Business Bags

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/travel-bags">
                                                                        Travel Bags

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/kids-luggage">
                                                                        Kids Luggage

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/crossbody-bags">
                                                                        Crossbody Bags

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/shoulder-bags">
                                                                        Shoulder Bags

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/backpacks">
                                                                        Backpacks

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/cosmetics">
                                                                Cosmetics

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/make-ups">
                                                                        Make ups

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hands-nail-care">
                                                                        Hands &amp; Nail Care

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/skin-care">
                                                                        Skin Care

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hair-care">
                                                                        Hair Care

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/body-cream">
                                                                        Body Cream

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/after-shave">
                                                                        After Shave

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hair-removal-cream">
                                                                        Hair Removal Cream

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/gift-sets">
                                                                        Gift Sets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/oral-care">
                                                                        Oral Care

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/lips">
                                                                        Lips

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sanitizer">
                                                                        Sanitizer

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/wigs-weaves">
                                                                        Wigs &amp; Weaves

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/eye-lashes">
                                                                        Eye Lashes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hair-styling-products">
                                                                        Hair Styling Products

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/fragrance-candles">
                                                                        Fragrance Candles

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/fragrances">
                                                                Fragrances

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/perfume">
                                                                        Perfume

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cologne">
                                                                        Cologne

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/eau-de-parfum">
                                                                        Eau de Parfum

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/eau-de-toilette">
                                                                        Eau de Toilette

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/eau-de-cologne">
                                                                        Eau de Cologne

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/aerosol-spray">
                                                                        Aerosol Spray

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/essential-oils">
                                                                        Essential Oils

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/fragrance-oils">
                                                                        Fragrance Oils

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/scented-candles">
                                                                        Scented Candles

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/fragrance-diffuser">
                                                                        Fragrance Diffuser

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/womens-fashion">
                                                                Womens Fashion

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/dresses-skirts">
                                                                        Dresses &amp; Skirts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/shorts">
                                                                        Shorts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/jeans-pants">
                                                                        Jeans &amp; Pants

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/formal-wear">
                                                                        Formal Wear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/jumpsuits-playsuits">
                                                                        Jumpsuits &amp; Playsuits

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/t-shirts-vests">
                                                                        T-Shirts &amp; Vests

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/leggings-tights">
                                                                        Leggings &amp; Tights

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sweaters-jackets">
                                                                        Sweaters &amp; Jackets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/blouses-shirts">
                                                                        Blouses &amp; Shirts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/underwear-sleepwear">
                                                                        Underwear &amp; Sleepwear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/leisure-sportswear">
                                                                        Leisure &amp; Sportswear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sneakers-boots">
                                                                        Sneakers &amp; Boots

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/heels-sandals">
                                                                        Heels &amp; Sandals

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/flats-sleepers">
                                                                        Flats &amp; Sleepers

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/mens-fashion">
                                                                Mens Fashion

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/jeans-trousers">
                                                                        Jeans &amp; Trousers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/jackets-coats">
                                                                        Jackets &amp; Coats

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/vests-t-shirts">
                                                                        Vests &amp; T-Shirts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bermudas-shorts">
                                                                        Bermudas &amp; Shorts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/formal-attire">
                                                                        Formal Attire

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sportswear-leisure">
                                                                        Sportswear &amp; Leisure

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/shirts">
                                                                        Shirts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sweaters-and-hoodies">
                                                                        Sweaters and Hoodies

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pajamas-underwear">
                                                                        Pajamas &amp; Underwear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/formal-shoes">
                                                                        Formal Shoes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/boots-sneakers">
                                                                        Boots &amp; Sneakers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sleepers-flats">
                                                                        Sleepers &amp; Flats

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/health"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Health</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar  py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm yes">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/dietary-supplements">
                                                                Dietary Supplements

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/natural-herbs">
                                                                Natural Herbs

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/vitamin-supplements">
                                                                Vitamin Supplements

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/energy-tonics">
                                                                Energy Tonics

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/patent-medicine">
                                                                Patent Medicine

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/antibacterial-antiseptic">
                                                                Antibacterial &amp; Antiseptic

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/sexual-health">
                                                                Sexual Health

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/sports-nutrition">
                                                                Sports Nutrition

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/pain-killers">
                                                                Pain Killers

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/eyes-vision">
                                                                Eyes &amp; Vision

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/electro-mechanical">
                                                                Electro &amp; Mechanical

                                                            </a>

                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/art-crafts"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Art &amp; Crafts</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar  py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm yes">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/paintings-drawings">
                                                                Paintings &amp; Drawings

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/sculptures-molds">
                                                                Sculptures &amp; Molds

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/antiques">
                                                                Antiques

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/beading-decorating">
                                                                Beading &amp; Decorating

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/crafting">
                                                                Crafting

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/knitting-crochet">
                                                                Knitting &amp; Crochet

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/collectibles">
                                                                Collectibles

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/art-instruments">
                                                                Art Instruments

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/art-accessories">
                                                                Art Accessories

                                                            </a>

                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/cell-phones-tablets"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Cell Phones &amp; Tablets</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar  py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm yes">
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/smartphones">
                                                                Smartphones

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/tablets">
                                                                Tablets

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/smart-watches">
                                                                Smart Watches

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/mobile-accessories">
                                                                Mobile Accessories

                                                            </a>

                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/gadgets"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Gadgets</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar  py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm yes">
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/drones">
                                                                Drones

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/personal-safety">
                                                                Personal Safety

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/secret-surveillance">
                                                                Secret Surveillance

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/smart-accessories">
                                                                Smart Accessories

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/wearables">
                                                                Wearables

                                                            </a>

                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/jewellery-watches"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Jewellery &amp; Watches</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/body-jewellery">
                                                                Body Jewellery

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/wrist-watches">
                                                                        Wrist Watches

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/necklaces-pendants">
                                                                        Necklaces &amp; Pendants

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bracelets-bangles">
                                                                        Bracelets &amp; Bangles

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/rings">
                                                                        Rings

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/ear-rings">
                                                                        Ear Rings

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/brooches-and-pins">
                                                                        Brooches and Pins

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cufflinks">
                                                                        Cufflinks

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/anklets">
                                                                        Anklets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bespoke-jewellery">
                                                                        Bespoke Jewellery

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/ethnic-tribal-jewellery">
                                                                Ethnic &amp; Tribal Jewellery

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/artistic-handwork">
                                                                        Artistic Handwork

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/waist-jewellery">
                                                                        Waist Jewellery

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/head-gear-jewellery">
                                                                        Head Gear &amp; Jewellery

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/neck-wrist-jewellery">
                                                                        Neck &amp; Wrist Jewellery

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/jewellery-accessories">
                                                                Jewellery Accessories

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-accessory">
                                                                        Other accessory

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cleaning-chemicals">
                                                                        Cleaning Chemicals

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/watch-accessories">
                                                                        Watch Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/jewellery-cleaners">
                                                                        Jewellery Cleaners

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/storage-organizers">
                                                                        Storage &amp; Organizers

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/sports-training"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Sports &amp; Training</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/sports-leisure-items">
                                                                Sports &amp; Leisure Items

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-sports">
                                                                        Other Sports

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/indoor-sports">
                                                                        Indoor Sports

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cricket-and-hockey">
                                                                        Cricket and Hockey

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/yoga-equipment">
                                                                        Yoga Equipment

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/fishing-equipment">
                                                                        Fishing Equipment

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/water-sports">
                                                                        Water Sports

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/skating-and-skateboards">
                                                                        Skating and Skateboards

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/mma-contact-sport">
                                                                        MMA &amp; Contact Sport

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/netball-and-tennis">
                                                                        Netball and Tennis

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/soccer-and-rugby">
                                                                        Soccer and Rugby

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cycling">
                                                                        Cycling

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/golf">
                                                                        Golf

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/exercising-equipment">
                                                                Exercising Equipment

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sports-nutrition-1">
                                                                        Sports Nutrition

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/treadmill-and-bikes">
                                                                        Treadmill and Bikes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/dumbells">
                                                                        Dumbells

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/home-gyms">
                                                                        Home Gyms

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/benches">
                                                                        Benches

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/barbells-and-attachments">
                                                                        Barbells and Attachments

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/gym-belts">
                                                                        Gym Belts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hand-grippers">
                                                                        Hand Grippers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/multi-purpose-training-machine">
                                                                        Multi Purpose Training Machine

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/electronic-training-tools">
                                                                        Electronic Training Tools

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/gym-accessories">
                                                                        Gym Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/weights">
                                                                        Weights

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-training-equipment">
                                                                        Other Training Equipment

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/camping-hiking"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Camping &amp; Hiking</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/camping-furniture">
                                                                Camping Furniture

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/chairs">
                                                                        Chairs

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tables-storage">
                                                                        Tables &amp; Storage

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/furniture-covers">
                                                                        Furniture Covers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-camping-furniture">
                                                                        Other Camping Furniture

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/camping-equipment">
                                                                Camping Equipment

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tents-gazebos">
                                                                        Tents &amp; Gazebos

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sleeping-bags-camp-bedding">
                                                                        Sleeping Bags &amp; Camp Bedding

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/inflatable-beds-stretchers">
                                                                        Inflatable Beds &amp; Stretchers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/braai-barbeque-equipment">
                                                                        Braai &amp; Barbeque Equipment

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/gas-cylinders-canisters">
                                                                        Gas Cylinders &amp; Canisters

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cooler-boxes-camping-fridges">
                                                                        Cooler boxes &amp; Camping Fridges

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/camping-utensils">
                                                                        Camping Utensils

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cookware-heating">
                                                                        Cookware &amp; Heating

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/fishing-accessories">
                                                                        Fishing &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/trailers">
                                                                        Trailers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-camping-gear">
                                                                        Other Camping Gear

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/associated-accessories">
                                                                Associated Accessories

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/torches-lights">
                                                                        Torches &amp; Lights

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/fire-starters">
                                                                        Fire Starters

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/inverters-batteries">
                                                                        Inverters &amp; Batteries

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/solar-renewable-energy">
                                                                        Solar &amp; Renewable Energy

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/self-defense-equipment">
                                                                        Self Defense Equipment

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/water-purification">
                                                                        Water Purification

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/climbing-equipment">
                                                                        Climbing Equipment

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/binoculars-night-vision">
                                                                        Binoculars &amp; Night vision

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/health-first-aid-kits">
                                                                        Health &amp; First Aid Kits

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/manual-electric-pumps">
                                                                        Manual &amp; Electric Pumps

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/knifes-tools">
                                                                        Knifes &amp; Tools

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-accessories">
                                                                        Other Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/hiking-essentials">
                                                                Hiking Essentials

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hiking-boots-shoes">
                                                                        Hiking Boots &amp; Shoes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hiking-backpacks">
                                                                        Hiking Backpacks

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/navigation-electronics">
                                                                        Navigation &amp; Electronics

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/trekking-poles">
                                                                        Trekking Poles

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/water-bottles-filtration">
                                                                        Water Bottles &amp; Filtration

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pepper-sprays">
                                                                        Pepper Sprays

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/stun-guns-tasers">
                                                                        Stun Guns &amp; Tasers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/survival-kits">
                                                                        Survival Kits

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/hiking-accessories">
                                                                        Hiking Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/home-outdoors"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Home &amp; Outdoors</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/indoor-furniture">
                                                                Indoor Furniture

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/lounge-suites">
                                                                        Lounge Suites

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/couches">
                                                                        Couches

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/recliners">
                                                                        Recliners

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/coffee-tables">
                                                                        Coffee Tables

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tv-stands">
                                                                        tv-stands

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/lounge-accessories">
                                                                        Lounge Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/kitchen">
                                                                Kitchen

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cooking-bakeware">
                                                                        Cooking &amp; Bakeware

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cutlery-knifes-crockery">
                                                                        Cutlery, Knifes &amp; Crockery

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/serving-utensils-sets">
                                                                        Serving Utensils &amp; Sets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/kitchen-fixtures">
                                                                        Kitchen Fixtures

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/kitchen-accessories">
                                                                        Kitchen Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/kitchen-furniture">
                                                                        Kitchen Furniture

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/glassware">
                                                                        Glassware

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/patio">
                                                                Patio

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/patio-furniture">
                                                                        Patio Furniture

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/gazebos-umbrellas">
                                                                        Gazebos &amp; Umbrellas

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/portable-lights">
                                                                        Portable Lights

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pest-control">
                                                                        Pest Control

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/patio-accessories">
                                                                        Patio Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/lighting-ceiling">
                                                                Lighting &amp; Ceiling

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/ceiling-lights">
                                                                        Ceiling Lights

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/chandeliers">
                                                                        Chandeliers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/ceiling-fans-accessories">
                                                                        Ceiling Fans &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/lamps-and-shades">
                                                                        Lamps and Shades

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/wall-lights">
                                                                        Wall Lights

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/professional-lighting">
                                                                        Professional Lighting

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/venue-lighting">
                                                                        Venue Lighting

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/motion-sensor-lights">
                                                                        Motion Sensor Lights

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/outdoors-lighting">
                                                                        Outdoors Lighting

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/lights-accessories">
                                                                        Lights Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/garden-pool">
                                                                Garden &amp; Pool

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/lawnmowers-trimmers">
                                                                        Lawnmowers &amp; Trimmers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/watering-equipment">
                                                                        Watering Equipment

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tents-garden-umbrellas">
                                                                        Tents &amp; Garden Umbrellas

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pool-pumps">
                                                                        Pool Pumps

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pool-cleaners-accessories">
                                                                        Pool Cleaners &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pool-inflatables-toys">
                                                                        Pool Inflatables &amp; Toys

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/plant-care-soil-accessories">
                                                                        Plant Care &amp; Soil Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/garden-pool-accessories">
                                                                        Garden &amp; Pool Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/bathroom">
                                                                Bathroom

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bathroom-accessories">
                                                                        Bathroom Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bathroom-mats-sets">
                                                                        Bathroom Mats &amp; Sets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/towels">
                                                                        Towels

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/taps-basins">
                                                                        Taps &amp; Basins

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bathroom-sets">
                                                                        Bathroom Sets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bathroom-scales">
                                                                        Bathroom Scales

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/bedroom">
                                                                Bedroom

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/mattresses-beds">
                                                                        Mattresses &amp; Beds

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bedding-sets">
                                                                        Bedding Sets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/blankets-sheets">
                                                                        Blankets &amp; Sheets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bed-side-lamps">
                                                                        Bed Side Lamps

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pillows-pillow-cases">
                                                                        Pillows &amp; Pillow Cases

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/duvet-sets">
                                                                        Duvet Sets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bedroom-accessories">
                                                                        Bedroom Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bedroom-furniture">
                                                                        Bedroom-Furniture

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/home-deco">
                                                                Home Deco

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/curtains-blinds-accessories">
                                                                        Curtains, Blinds &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/artificial-plants-flowers">
                                                                        Artificial Plants &amp; Flowers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/mirrors">
                                                                        Mirrors

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/flooring">
                                                                        Flooring

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/frames-wall-decor">
                                                                        Frames &amp; Wall Décor

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/table-linen">
                                                                        Table Linen

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-decorative-items">
                                                                        Other Decorative Items

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/heating-appliances">
                                                                Heating Appliances

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/stoves-ovens">
                                                                        Stoves &amp; Ovens

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/convection-ovens-stoves">
                                                                        Convection Ovens &amp; Stoves

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/microwaves">
                                                                        Microwaves

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/gas-stoves">
                                                                        Gas Stoves

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/irons-ironing-boards">
                                                                        Irons &amp; Ironing Boards

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pots-accessories">
                                                                        Pots &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/bakeware-appliances">
                                                                        Bakeware &amp; Appliances

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/frying-pans-toasters-waffle-makers">
                                                                        Frying Pans, Toasters &amp; Waffle Makers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/fire-places-accessories">
                                                                        Fire Places &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/gas-heaters">
                                                                        Gas Heaters

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/carpets-rugs">
                                                                Carpets &amp; Rugs

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/other-home-accessories">
                                                                Other Home Accessories

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/window-cleaner">
                                                                        Window Cleaner

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/vacuum-cleaner">
                                                                        Vacuum Cleaner

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-home-accessories-1">
                                                                        Other Home Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/pet-supplies">
                                                                Pet Supplies

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/dogs">
                                                                        Dogs

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/cats">
                                                                        Cats

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/birds">
                                                                        Birds

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/small-animals">
                                                                        Small Animals

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/fish">
                                                                        Fish

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/exotic-animals">
                                                                        Exotic Animals

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/liquor"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Liquor</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/wines">
                                                                Wines

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/red-wine">
                                                                        Red Wine

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/champagne-sparkling">
                                                                        Champagne &amp; Sparkling

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/white-wine">
                                                                        White Wine

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/rose-wine">
                                                                        Rose Wine

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/box-wines">
                                                                        Box Wines

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/spirits">
                                                                Spirits

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cognac">
                                                                        Cognac

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/gin">
                                                                        Gin

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/whisky">
                                                                        Whisky

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/brandy">
                                                                        Brandy

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/vodka">
                                                                        Vodka

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/rum">
                                                                        Rum

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/minis-and-sachets">
                                                                        Minis-and-sachets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/premixes">
                                                                        Premixes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/tequila">
                                                                        Tequila

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/liqueurs">
                                                                        Liqueurs

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/beers-ciders">
                                                                Beers &amp; Ciders

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/beer">
                                                                        Beer

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/cider">
                                                                        Cider

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/games-toys"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Games &amp; Toys</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/video-games">
                                                                Video Games

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/video-game-consoles">
                                                                        Video Game Consoles

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/controllers-attachments">
                                                                        Controllers &amp; Attachments

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/video-game-software">
                                                                        Video Game Software

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/sony-playstation">
                                                                        Sony PlayStation

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/microsoft-xbox">
                                                                        Microsoft XBox

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/nintendo">
                                                                        Nintendo

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/pc-gaming">
                                                                        PC Gaming

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a href="http://127.0.0.1:8000/product-categories/mac">
                                                                        Mac

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/vr-ar-gaming">
                                                                        VR &amp; AR Gaming

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/video-game-accessories">
                                                                        Video Game Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/toys-other-games">
                                                                Toys &amp; Other Games

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/snooker-pool">
                                                                        Snooker &amp; Pool

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/table-based-games">
                                                                        Table Based Games

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/board-games-darts">
                                                                        Board Games &amp; Darts

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/remote-electronic-toys">
                                                                        Remote &amp; Electronic Toys

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/outdoors-toys-games">
                                                                        Outdoors Toys &amp; Games

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/swimming-water-games">
                                                                        Swimming &amp; Water Games

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/kids-toys-games">
                                                                        Kids Toys &amp; Games

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/grownups-games-toys">
                                                                        Grownups Games &amp; Toys

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-toys-games">
                                                                        Other Toys &amp; Games

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/tools-diy"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Tools &amp; DIY</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar  py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm yes">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/cordless-power-tools">
                                                                Cordless Power Tools

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/power-tools">
                                                                Power Tools

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/hand-tools">
                                                                Hand Tools

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/tool-boxes-storage">
                                                                Tool Boxes &amp; Storage

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/air-tools-air-compressors">
                                                                Air tools &amp; Air Compressors

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/measuring-layout-tools">
                                                                Measuring &amp; Layout Tools

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/protective-gear">
                                                                Protective Gear

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/hand-tool-accessories">
                                                                Hand Tool Accessories

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/trolleys-ladders">
                                                                Trolleys &amp; Ladders

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/paint-spray">
                                                                Paint &amp; Spray

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/security">
                                                                Security

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/padlocks-door-locks">
                                                                        Padlocks &amp; Door Locks

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/safes">
                                                                        Safes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/security-accessories">
                                                                        Security Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/surveillance-equipment">
                                                                        Surveillance Equipment

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/power-tool-accessories">
                                                                Power Tool Accessories

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/air-tool-accessories">
                                                                Air tool Accessories

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/other-accessories-1">
                                                                Other Accessories

                                                            </a>

                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a href="http://127.0.0.1:8000/product-categories/wallpapers">
                                                                Wallpapers

                                                            </a>

                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/cars-motorcycles"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Cars &amp; Motorcycles</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/car-accessories">
                                                                Car Accessories

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/exhaust-system-accessories">
                                                                        Exhaust System &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/car-audio-display">
                                                                        Car Audio &amp; Display

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/car-interior-accessories">
                                                                        Car Interior Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/travel-off-road-gear">
                                                                        Travel &amp; Off-road Gear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/exterior-vehicle-accessories">
                                                                        Exterior Vehicle Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/canopies">
                                                                        Canopies

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/filters-other-engine-accessories">
                                                                        Filters &amp; Other Engine Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-car-accessories">
                                                                        Other Car Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/motorcycle-accessories">
                                                                Motorcycle Accessories

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/wheels-tires">
                                                                        Wheels &amp; Tires

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/exhaust-systems-accessories">
                                                                        Exhaust Systems &amp; Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/protective-clothing-gear">
                                                                        Protective Clothing Gear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/motorcycle-accessories-1">
                                                                        Motorcycle Accessories

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>

                                            <li className="has-submenus-submenu sidebar_hasmenu">
                                                <a href="http://127.0.0.1:8000/product-categories/baby-toddler"
                                                    className="text-gray-500 text-15 py-8 px-16 flex-align gap-8 rounded-0">
                                                    <span>Baby &amp; Toddler</span>

                                                    <span className="icon text-md d-flex ms-auto"><i
                                                            className="ph ph-caret-right"></i></span>

                                                </a>

                                                <div className="submenus-submenu sidebar mega py-4">
                                                    <ul className="submenus-submenu__list  overflow-y-auto scroll-sm ">
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/prams-strollers">
                                                                Prams &amp; Strollers

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/strollers">
                                                                        Strollers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-pram">
                                                                        Baby Pram

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/stroller-accessories">
                                                                        Stroller Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/stroller-parts">
                                                                        Stroller Parts

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/cribs-cots-accessories">
                                                                Cribs (Cots) &amp; Accessories

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/accessories-1">
                                                                        Accessories

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-mattresses">
                                                                        Baby Mattresses

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/moses-baskets">
                                                                        Moses Baskets

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/nursery-bedding">
                                                                        Nursery Bedding

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-toddler-chairs">
                                                                        Baby &amp; Toddler Chairs

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/travelling-accessorries">
                                                                Travelling &amp; Accessorries

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-car-seat">
                                                                        Baby Car Seat

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-travel-bag">
                                                                        Baby Travel Bag

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-carrier">
                                                                        Baby Carrier

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-car-mirror">
                                                                        Baby Car Mirror

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-travel-gear">
                                                                        Other Travel Gear

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/baby-maternity-clothing">
                                                                Baby &amp; Maternity Clothing

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/infant-toddler-clothes">
                                                                        Infant &amp; Toddler Clothes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/maternity-clothes">
                                                                        Maternity Clothes

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/infant-toddler-footwear">
                                                                        Infant &amp; Toddler Footwear

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/maternity-shoes">
                                                                        Maternity Shoes

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/toys-and-learning">
                                                                Toys and Learning

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/potty-training">
                                                                        Potty Training

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/activity-centers">
                                                                        Activity Centers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/walking-rings-walkers">
                                                                        Walking Rings &amp; Walkers

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/play-structures">
                                                                        Play Structures

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-rattles">
                                                                        Baby Rattles

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/electronic-toys">
                                                                        Electronic Toys

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/puzzles">
                                                                        Puzzles

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-toys">
                                                                        Other Toys

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="child-category sidebar_child_category">
                                                            <a
                                                                href="http://127.0.0.1:8000/product-categories/electronics-monitoring">
                                                                Electronics &amp; Monitoring

                                                            </a>

                                                            <ul className="nested-category-list sidebar_nestedlist pl-16 ">
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/baby-monitoring-devices">
                                                                        Baby Monitoring Devices

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/remote-monitoring">
                                                                        Remote Monitoring

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/digital-thermometer">
                                                                        Digital Thermometer

                                                                    </a>
                                                                </li>
                                                                <li className="pl-16">
                                                                    <a
                                                                        href="http://127.0.0.1:8000/product-categories/other-electronics">
                                                                        Other Electronics

                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </li>
                                        </ul>



                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-9 px-0 right-card">

                            <div
                                className="banner-item-two-wrapper dash homepage_home rounded-24 overflow-hidden position-relative arrow-center flex-grow-1 mb-0 ml-5">
                                {/* <!-- Background Image --> */}
                                <img src="https://ecbackend.cazhier.com/storage/banner/banner-two-bg-2.png" alt=""
                                    className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-8"/>
                                <img src="https://ecbackend.cazhier.com/storage/banner/banner-two-bg-2.png" alt=""
                                    className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-8"/>

                                {/* <!-- Slider Wrapper --> */}
                                <div className="banner-item-two__slider">
                                    <div className="banner-item-two" style={{width: "100%", display: "inline-block"}}>

                                        {/* <!-- Content Section --> */}
                                        <div className="banner-item-two__content">
                                            <span className="text-white mb-8 h6 wow bounceInDown"
                                                style={{visibility: "visible", animationName: "bounceInDown"}}>Starting
                                                at only <b>$250</b></span>

                                            <h3 className="banner-item-two__title bounce text-white wow bounceInLeft"
                                                style={{visibility: "visible", animationName: "bounceInLeft"}}>
                                                Get The Sound You Sound For Less
                                            </h3>

                                            <a href="/products"
                                                className="start_button_1 btn d-inline-flex align-items-center rounded-pill gap-8 wow bounceInUp"
                                                tabIndex={-1} style={{visibility: "visible"}}>
                                                Shop Now
                                                <span className="icon text-xl d-flex">
                                                    <i className="ph ph-shopping-cart-simple"></i>
                                                </span>
                                            </a>
                                            <br />
                                            <a href="http://127.0.0.1:8000/vendor/manage-business"
                                                className="start_button_2 btn  d-inline-flex align-items-center rounded-pill gap-8 mt-10"
                                                tabIndex={-1}>


                                                Start Business
                                                <span className="icon text-xl d-flex"> <i className="ph ph-arrow-bend-up-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                        <h6>
                                            <a href="#tellmemore" className="pt-20 ps-5 mb-8 slider-readmore wow bounceInDown"
                                                tabIndex={-1} style={{visibility: "visible"}}>
                                                How does C-Angelx work?
                                            </a>
                                        </h6>
                                        {/* <!-- Thumbnail Section --> */}
                                        <div className="banner-item-two__thumb position-absolute bottom-0 wow bounceInUp"
                                            data-wow-duration="1s" data-tilt="" data-tilt-max="12" data-tilt-speed="500"
                                            data-tilt-perspective="5000" data-tilt-scale="1.06"
                                            style={{willChange: "transform", transition: "500ms cubic-bezier(0.03, 0.98, 0.52, 0.99)", transform: "perspective(5000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)", visibility: "visible", animationDuration: "1s", animationName: "bounceInUp"}}>

                                            <a href="http://127.0.0.1:8000/products" tabIndex={-1}>
                                                {/* <picture> */}
                                                    {/* <source
                                                        srcset="https://ecbackend.cazhier.com/storage/banner/banner-two-img2-1.png"
                                                        media="(min-width: 1200px)">
                                                    <source
                                                        srcset="https://ecbackend.cazhier.com/storage/banner/banner-two-img2-1.png"
                                                        media="(min-width: 768px)">
                                                    <source
                                                        srcset="https://ecbackend.cazhier.com/storage/banner/banner-two-img2-1.png"
                                                        media="(max-width: 767px)"> */}
                                                    <img src="https://ecbackend.cazhier.com/storage/banner/banner-two-img2-1.png"
                                                        loading="eager" alt="Get The Sound You Sound For Less"/>
                                                {/* </picture> */}
                                            </a>

                                        </div>
                                    </div>
                                    <div className="banner-item-two" style={{width:" 100%", display: "inline-block"}}>

                                        {/* <!-- Content Section --> */}
                                        <div className="banner-item-two__content">
                                            <span className="text-white mb-8 h6 wow bounceInDown"
                                                style={{visibility: "visible", animationName: "bounceInDown"}}>Starting
                                                at only <b>$250</b></span>

                                            <h3 className="banner-item-two__title bounce text-white wow bounceInLeft"
                                                style={{visibility: "visible", animationName: "bounceInLeft"}}>
                                                Get The Sound You Sound For Less
                                            </h3>

                                            <a href="/products"
                                                className="start_button_1 btn d-inline-flex align-items-center rounded-pill gap-8 wow bounceInUp"
                                                tabIndex={0} style={{visibility: "visible"}}>
                                                Start Shopping
                                                <span className="icon text-xl d-flex">
                                                    <i className="ph ph-shopping-cart-simple"></i>
                                                </span>
                                            </a>
                                            <br />
                                            <a href="http://127.0.0.1:8000/vendor/manage-business"
                                                className="start_button_2 btn  d-inline-flex align-items-center rounded-pill gap-8 mt-10"
                                                tabIndex={0}>


                                                Start Business
                                                <span className="icon text-xl d-flex"> <i className="ph ph-arrow-bend-up-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                        <h6>
                                            <a href="#tellmemore" className="pt-20 ps-5 mb-8 slider-readmore wow bounceInDown"
                                                tabIndex={0} style={{visibility: "visible"}}>
                                                How does C-Angelx work?
                                            </a>
                                        </h6>
                                        {/* <!-- Thumbnail Section --> */}
                                        <div className="banner-item-two__thumb position-absolute bottom-0 wow bounceInUp"
                                            data-wow-duration="1s" data-tilt="" data-tilt-max="12" data-tilt-speed="500"
                                            data-tilt-perspective="5000" data-tilt-scale="1.06"
                                            style={{willChange: "transform", transform: "perspective(5000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) ",visibility: "visible", animationDuration: "1s", animationName:" bounceInUp"}}>

                                            <a href="http://127.0.0.1:8000/products" tabIndex={0}>
                                                <picture>
                                                    {/* <source
                                                        srcset="https://ecbackend.cazhier.com/storage/banner/banner-two-img-1.png"
                                                        media="(min-width: 1200px)">
                                                    <source
                                                        srcset="https://ecbackend.cazhier.com/storage/banner/banner-two-img-1.png"
                                                        media="(min-width: 768px)">
                                                    <source
                                                        srcset="https://ecbackend.cazhier.com/storage/banner/banner-two-img-1.png"
                                                        media="(max-width: 767px)"> */}
                                                    <img src="https://ecbackend.cazhier.com/storage/banner/banner-two-img-1.png"
                                                        loading="eager" alt="Get The Sound You Sound For Less"/>
                                                </picture>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ============================ Banner Section End =============================== --> */}


              {/* <!-- ============================ promotional banner Start ========================== --> */}
              <section className="Ad_product_one promotional-banner pt-20">
            <div className="container container-lg">
                <div className="row gy-4 ">
                    <div className="col-lg-4 col-sm-6 px-10 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                        <div className="position-relative rounded-16 overflow-hidden z-1 p-32">

                            <img src="https://ecbackend.cazhier.com/storage/ad-product/promo-bg-img1-1.png"
                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                                loading="lazy"/>

                            <div className="flex-between flex-wrap gap-16">
                                <div className="">
                                    <span className="text-heading text-sm mb-8">Latest Deal</span>





                                    <h6 className="mb-0">
                                        <a href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal"
                                            target="_blank" className="product_name_ad text-heading">iPhone 16 5G Mob..</a>
                                    </h6>

                                    <a href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal"
                                        target="_blank"
                                        className="product_button_ad d-inline-flex align-items-center gap-8 mt-16 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600">
                                        Shop Now 1
                                        <span className="icon text-md d-flex"><i className="ph ph-plus"></i></span>
                                    </a>

                                </div>

                                <div className="pe-xxl-4">



                                    <a href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal"
                                        target="_blank">
                                        <img src="https://ecbackend.cazhier.com/storage/products-2/71csc3m2agl-sl1500.jpg"
                                            alt="iPhone 16 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Teal"
                                            className="dynamic-product-image"/>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 px-10 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                        <div className="position-relative rounded-16 overflow-hidden z-1 p-32">

                            <img src="https://ecbackend.cazhier.com/storage/ad-product/promo-bg-img2-1.png"
                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                                loading="lazy"/>

                            <div className="flex-between flex-wrap gap-16">
                                <div className="">
                                    <span className="text-heading text-sm mb-8">Get 60% off</span>





                                    <h6 className="mb-0">
                                        <a href="http://127.0.0.1:8000/products/samsung-galaxy-s25-ultra-5g-ai-smartphone-titanium-gray-12gb-ram-256gb-storage-200mp-camera-s-pen-included-long-battery-life"
                                            target="_blank" className="product_name_ad text-heading">Samsung Galaxy S..</a>
                                    </h6>

                                    <a href="http://127.0.0.1:8000/products/samsung-galaxy-s25-ultra-5g-ai-smartphone-titanium-gray-12gb-ram-256gb-storage-200mp-camera-s-pen-included-long-battery-life"
                                        target="_blank"
                                        className="product_button_ad d-inline-flex align-items-center gap-8 mt-16 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600">
                                        Shop Now 2
                                        <span className="icon text-md d-flex"><i className="ph ph-plus"></i></span>
                                    </a>

                                </div>

                                <div className="pe-xxl-4">



                                    <a href="http://127.0.0.1:8000/products/samsung-galaxy-s25-ultra-5g-ai-smartphone-titanium-gray-12gb-ram-256gb-storage-200mp-camera-s-pen-included-long-battery-life"
                                        target="_blank">
                                        <img src="https://ecbackend.cazhier.com/storage/products-2/71rs4aer71l-sl1500.jpg"
                                            alt="Samsung Galaxy S25 Ultra 5G AI Smartphone (Titanium Gray, 12GB RAM, 256GB Storage), 200MP Camera, S Pen Included, Long Battery Life"
                                            className="dynamic-product-image"/>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 px-10 aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                        <div className="position-relative rounded-16 overflow-hidden z-1 p-32">

                            <img src="https://ecbackend.cazhier.com/storage/ad-product/promo-bg-img3-1.png"
                                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1"
                                loading="lazy"/>

                            <div className="flex-between flex-wrap gap-16">
                                <div className="">
                                    <span className="text-heading text-sm mb-8">Start From $250</span>





                                    <h6 className="mb-0">
                                        <a href="http://127.0.0.1:8000/products/quick-heal-total-security-renewal-upgrade-gold-pack-1-user-3-years-email-delivery-in-1-hour-no-cd-existing-quick-heal-single-user-subscription-needed"
                                            target="_blank" className="product_name_ad text-heading">Quick Heal | Tot..</a>
                                    </h6>

                                    <a href="http://127.0.0.1:8000/products/quick-heal-total-security-renewal-upgrade-gold-pack-1-user-3-years-email-delivery-in-1-hour-no-cd-existing-quick-heal-single-user-subscription-needed"
                                        target="_blank"
                                        className="product_button_ad d-inline-flex align-items-center gap-8 mt-16 text-heading text-md fw-medium border border-top-0 border-end-0 border-start-0 border-gray-900 hover-text-main-two-600 hover-border-main-two-600">
                                        Shop Now 3
                                        <span className="icon text-md d-flex"><i className="ph ph-plus"></i></span>
                                    </a>

                                </div>

                                <div className="pe-xxl-4">



                                    <a href="http://127.0.0.1:8000/products/quick-heal-total-security-renewal-upgrade-gold-pack-1-user-3-years-email-delivery-in-1-hour-no-cd-existing-quick-heal-single-user-subscription-needed"
                                        target="_blank">
                                        <img src="https://ecbackend.cazhier.com/storage/products-2/61kxwwz1l-l-sl1414.jpg"
                                            alt="Quick Heal | Total Security Renewal Upgrade Gold pack | 1 User | 3 years | Email Delivery in 1 Hour - no CD| Existing Quick Heal Single User Subscription Needed"
                                            className="dynamic-product-image"/>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ============================ promotional banner End ========================== --> */}
            {/* <!-- ========================= Deals Week Start ================================ --> */}
            <section className="deals-weeek pt-20 overflow-hidden new ">
            <div className="container container-lg ">
                <div className="row px-10">
                    <div className="border border-gray-100 p-10 rounded-16 bg-white">

                        <div className="section-heading mb-12">
                            <div className="flex-between flex-wrap gap-8">

                                <h5 className="mb-0 pl-5">
                                    Deal of The Day

                                </h5>
                                <div className="flex-align gap-16 animate_once
                                    
                                    ">
                                    <a href="/products"
                                        className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">
                                        View All Deals
                                    </a>


                                </div>

                            </div>
                        </div>

                        <div className="deal-week-box rounded-16 overflow-hidden flex-between position-relative z-1 mb-12">
                            <img src="https://ecbackend.cazhier.com/storage/ads/week-deal-bg-1.png" alt="bg card Image"
                                className="position-absolute inset-block-start-0 inset-block-start-0 w-100 h-100 z-n1 object-fit-cover"/>

                            {/* <!-- left image  --> */}
                            <div className="d-lg-block d-none ps-32 flex-shrink-0" data-aos="zoom-in">
                                <img src="https://ecbackend.cazhier.com/storage/ads/week-deal-img1-1.png" alt="Left Image"/>
                            </div>
                            <div className="deal-week-box__content px-sm-4 d-block w-100 text-center">

                                <h6 className="mb-20 wow bounceIn" style={{visibility: "visible", animationName: "bounceIn"}}>Apple
                                    AirPods Max, Over Ear Headphones</h6>

                                {/* <div className="countdown mt-20" id="countdown">
                                    <ul className="countdown-list style-four flex-center flex-wrap">
                                        <li
                                            className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                            <span className="days">{timeLeft.days}</span> Days
                                        </li>
                                        <li
                                            className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                            <span className="hours">{timeLeft.hours}</span> Hours
                                        </li>
                                        <li
                                            className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                            <span className="minutes">{timeLeft.minutes}</span> Min
                                        </li>
                                        <li
                                            className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                            <span className="seconds">{timeLeft.seconds}</span> Sec
                                        </li>
                                    </ul>
                                </div> */}
                                <CountdownTimer />

                            </div>
                            {/* <!-- right image --> */}
                            <div className="d-lg-block d-none flex-shrink-0 pe-xl-5 aos-init aos-animate" data-aos="zoom-in">
                                <div className="me-xxl-5">
                                    <img src="https://ecbackend.cazhier.com/storage/ads/week-deal-img2-1.png" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- code3 --> */}


                        {/* <!-- code4 --> */}
                        <div className="deals-week-slider-container">
                            <button type="button" id="deal-week-prev"
                                className="slick-prev deal_leftarrow slick-arrow hlo flex-center rounded-circle hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1">
                                <i className="ph ph-caret-left"></i>
                            </button>

                            <div className="deals-week-slider arrow-style-two pt-0">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2" tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar"
                                                aria-label="Basic example" aria-valuenow="35" aria-valuemin="0"
                                                aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button type="button" id="deal-week-next"
                                className="slick-next deal_rightarrow slick-arrow flex-center rounded-circle hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1">
                                <i className="ph ph-caret-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
       {/* <!-- ========================= Deals Week End ================================ --> */}
       {/* <!-- ========================= Top Selling Products Start ================================ --> */}
    <section className="top_sellss top-selling-products pt-20 overflow-hidden">
        <div className="container container-lg">
            <div className="border border-gray-100 p-12 rounded-16 bg-white">

                <div className="section-heading mb-10">
                    <div className="flex-between flex-wrap gap-8">
                        <h5 className="mb-0 ">
                            Top Selling Products
                        </h5>
                        <div className="flex-align gap-16  animate_once
                            
                            ">
                            <a href="#"
                                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">View
                                All Deals</a>

                        </div>
                    </div>
                </div>
                <div className="row g-12">
                    <div className="col-md-4 aos-init aos-animate">
                        <div className="position-relative rounded-30 overflow-hidden p-28 z-1 text-center">

                            <img src="https://ecbackend.cazhier.com/themes/ecomm/images/bg/promo-bg-img1.png" alt=""
                                className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100"/>

                            <div className="py-xl-4">
                                <h6><a className="mb-4 fw-semibold link text-line-2"
                                        href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal">iPhone
                                        16 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery
                                        Life. Works with AirPods; Teal</a></h6>

                                <a href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal"
                                    className="btn text-heading border-neutral-600 hover-bg-neutral-600 hover-text-white py-16 px-24 flex-center d-inline-flex rounded-pill gap-8 fw-medium"
                                    tabIndex="0">

                                    <i className="ph ph-shopping-cart text-xl d-flex"></i>
                                </a>
                            </div>
                            <div className="d-md-block ">


                                <a
                                    href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal">
                                    <img style={{maxHeight: "240px"}}
                                        src="https://ecbackend.cazhier.com/storage/products-2/71csc3m2agl-sl1500.jpg"
                                        alt="iPhone 16 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Teal"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="topselling_product_container">
                            <button type="button" id="top-selling-prev"
                                className="slick-prev deal_leftarrow slick-arrow hlo flex-center rounded-circle hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1">
                                <i className="ph ph-caret-left"></i>
                            </button>



                            <div className="top-selling-product-slider arrow-style-two">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2"
                                                tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="35"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2"
                                                tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="35"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2"
                                                tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="35"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2"
                                                tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="35"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2"
                                                tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="35"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2"
                                                tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="35"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="product-details-two.html"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative">
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sold
                                        </span>
                                        <img src="assets/images/thumbs/product-two-img1.png" alt=""
                                            className="w-auto max-w-unset"/>
                                    </a>
                                    <div className="product-card__content mt-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-xs fw-medium text-gray-500">4.8</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                        </div>
                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="product-details-two.html" className="link text-line-2"
                                                tabIndex="0">Taylor
                                                Farms Broccoli Florets Vegetables</a>
                                        </h6>
                                        <div className="flex-align gap-4">
                                            <span className="text-tertiary-600 text-md d-flex"><i
                                                    className="ph-fill ph-storefront"></i></span>
                                            <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                        </div>
                                        <div className="mt-8">
                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="35"
                                                aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                            <span className="text-gray-900 text-xs fw-medium mt-8">Sold: 18/35</span>
                                        </div>


                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                $28.99</span>
                                            <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                    className="text-gray-500 fw-normal">/Qty</span> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" id="top-selling-next"
                                className="slick-next deal_rightarrow slick-arrow flex-center rounded-circle hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1">
                                <i className="ph ph-caret-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ========================= Top Selling Products End ================================ --> */}
    
    {/* <!-- ========================= Trending Products Start ================================ --> */}
    <section className="trending-productss pt-20 overflow-hidden">
        <div className="container container-lg">
            <div className="border border-gray-100 p-10 rounded-16 bg-white">
                <div className="section-heading mb-10">
                    <div className="flex-between flex-wrap mb-0">
                        <h5 className=" mb-0 ">
                            Trending Products

                        </h5>
                        <ul className=" mb-0 nav common-tab style-two nav-pills animate_once
                            
                            " id="pills-tab" role="tablist"
                            data-ajax-url="http://127.0.0.1:8000/ajax/products?limit=8">

                            <li className="nav-item" role="presentation">




                                <button className="nav-link active" id="all-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-All" type="button" role="tab" aria-controls="pills-All"
                                    aria-selected="true">
                                    All
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">




                                <button className="nav-link" id="featured-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Featured" type="button" role="tab"
                                    aria-controls="pills-Featured" aria-selected="false" tabIndex="-1">
                                    Featured
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">




                                <button className="nav-link" id="on-sale-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-On-sale" type="button" role="tab"
                                    aria-controls="pills-On-sale" aria-selected="false" tabIndex="-1">
                                    On sale
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">




                                <button className="nav-link" id="trending-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Trending" type="button" role="tab"
                                    aria-controls="pills-Trending" aria-selected="false" tabIndex="-1">
                                    Trending
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">




                                <button className="nav-link" id="top-rated-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Top-rated" type="button" role="tab"
                                    aria-controls="pills-Top-rated" aria-selected="false" tabIndex="-1">
                                    Top rated
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="trending-products-box rounded-16 overflow-hidden flex-between position-relative mb-10">
                    <div className="d-md-block d-none ps-xxl-5 ps-md-4 aos-init aos-animate" data-aos="zoom-in"
                        data-aos-duration="800">
                        {/* <!-- <img src="https://ecbackend.cazhier.com/themes/ecomm/images/thumbs/trending-products-img1.png" alt=""/> --> */}
                        <img src="https://ecbackend.cazhier.com/storage/ads/trending-products-img1.png"
                            alt="bg card Image"/>
                    </div>
                    <div className="trending-products-box__content px-4 d-block w-100 text-center py-32 wow bounceIn"
                        style={{visibility: "hidden", animationName: "none"}}>
                        {/* <!-- <h6 className="mb-0 trending-products-box__title">
                            Laptop Pro 
                            <span className="h4 mb-0 fw-semibold">
                                20%
                            </span>
                            off All Time On Order Now $980
                        </h6> --> */}
                        <h6 className="mb-0 trending-products-box__title">
                            Laptop Pro
                            <span className="h4 mb-0 fw-semibold" style={{fontWeight: "600"}}> 
                                20%
                            </span>
                            off All Time On Order Now $980
                        </h6>
                    </div>
                    <div className="d-md-block d-none pe-xxl-5 me-xxl-5 pe-md-4 aos-init aos-animate" data-aos="zoom-in"
                        data-aos-duration="800">
                        <img src="https://ecbackend.cazhier.com/storage/ads/trending-products-img2.png"
                            alt="right Image"/>
                    </div>
                </div>


                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-All" role="tabpanel"
                        aria-labelledby="pills-All-tab" tabIndex="0">
                        <div className="row g-12">



                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/samsung-23-l-solo-microwave-oven-ms23a3513aktl-black-auto-cook-programs-child-safety-lock-memory-feature-deodorization-ceramic-enamel-cavity-with-10-year-warranty"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/71jffnoticl-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#9A3B00 !important"}}>
                                            Sale


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/169"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/samsung-23-l-solo-microwave-oven-ms23a3513aktl-black-auto-cook-programs-child-safety-lock-memory-feature-deodorization-ceramic-enamel-cavity-with-10-year-warranty"
                                                className="link text-line-2" tabIndex="0">Samsung 23 L Solo Microwave Oven
                                                (MS23A3513AK/TL, Black, Auto Cook Programs, Child Safety Lock, Memory
                                                Feature, Deodorization, Ceramic Enamel Cavity with 10 year warranty)</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/sports-nike">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Sports@Nike</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R8,990.00</span>
                                            <span className="text-heading text-md fw-semibold ">R8,000.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        
            style={{  
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/51qaswl4jrl-sl1442.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition: "center"  ,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f0f0f0"  
                                        }}
            >
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/168"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black"
                                                className="link text-line-2" tabIndex="0">Vidiem Vogue 3-Burner Gas
                                                Cooktop/Hob | World's First Fully Removable Burner Assembly | 10Mm
                                                Toughened Glass | 5Mm Thick Pan Support | Manual Ignition - Black</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R4,300.00</span>
                                            <span className="text-heading text-md fw-semibold ">R4,250.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/vidiem-mixer-grinder-608-a-tuskermixer-grinder-750-watt-with-3-jars-1-juicer-mixer-grinder4-leakproof-jars-with-self-lock-for-wet-dry-spices-chutneys"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        
            style={{  
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/81c2dwbtmfl-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition: "center"  ,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f0f0f0"  
                                        }}
            >
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/167"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/vidiem-mixer-grinder-608-a-tuskermixer-grinder-750-watt-with-3-jars-1-juicer-mixer-grinder4-leakproof-jars-with-self-lock-for-wet-dry-spices-chutneys"
                                                className="link text-line-2" tabIndex="0">Vidiem Mixer Grinder 608 A
                                                Tusker|Mixer grinder 750 watt with 3 Jars &amp; 1 Juicer Mixer Grinder|4
                                                Leakproof Jars with self-lock for wet &amp; dry spices, chutneys</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R4,999.00</span>
                                            <span className="text-heading text-md fw-semibold ">R4,500.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/tcl-248-cm-98-inches-4k-ultra-hd-smart-qd-mini-led-google-tv-98c755-black"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/719yjcos-al-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/166"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/tcl-248-cm-98-inches-4k-ultra-hd-smart-qd-mini-led-google-tv-98c755-black"
                                                className="link text-line-2" tabIndex="0">TCL 248 cm (98 inches) 4K Ultra HD
                                                Smart QD-Mini LED Google TV 98C755 (Black)</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R165,000.00</span>
                                            <span className="text-heading text-md fw-semibold ">R164,000.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="https://ecbackend.cazhier.com/products/nr-250-steam-wallet-codedigital-code-email-delivery-within-2-hours"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/3792e6d9-e64d-48a4-b16c-304d325ac1e0-cr00800800-pt0-sx220-v1.jpeg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#AC2200 !important"}}>
                                            Hot


                                        </span>
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/165"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="https://ecbackend.cazhier.com/products/nr-250-steam-wallet-codedigital-code-email-delivery-within-2-hours"
                                                className="link text-line-2" tabIndex="0">INR 250 Steam Wallet Code(Digital
                                                Code-Email Delivery within 2 hours)</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/c-angelx-cares-jhb">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">C-Angelx_cares@JhB</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R90.00</span>
                                            <span className="text-heading text-md fw-semibold ">R80.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/xbox-game-pass-ultimate-1-month-membership-digital-code"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/71md9ggyf6l-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/164"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/xbox-game-pass-ultimate-1-month-membership-digital-code"
                                                className="link text-line-2" tabIndex="0">Xbox Game Pass Ultimate : 1 Month
                                                Membership (Digital Code)</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/c-angelx-cares-jhb">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">C-Angelx_cares@JhB</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R125.00</span>
                                            <span className="text-heading text-md fw-semibold ">R120.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/far-cry-3-pc-game-dvd-for-windows"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/91o6fcnfxdl-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/163"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/far-cry-3-pc-game-dvd-for-windows"
                                                className="link text-line-2" tabIndex="0">Far Cry-3 Pc Game DVD For
                                                Windows</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/c-angelx-cares-jhb">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">C-Angelx_cares@JhB</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R120.00</span>
                                            <span className="text-heading text-md fw-semibold ">R100.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/microsoft-windows-10-professional-8-gb-32bit64bit-english-intl-for-1-pc-laptop-user-32-and-64-bits-on-usb-30-included-full-retail-pack-multicolor"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/61jaihpn07l-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#AC2200 !important"}}>
                                            Hot


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/162"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/microsoft-windows-10-professional-8-gb-32bit64bit-english-intl-for-1-pc-laptop-user-32-and-64-bits-on-usb-30-included-full-retail-pack-multicolor"
                                                className="link text-line-2" tabIndex="0">Microsoft Windows 10 Professional
                                                8 GB, 32Bit/64Bit English INTL For 1 PC Laptop/ User: 32 And 64 Bits On
                                                USB 3.0 Included - Full Retail Pack, Multicolor</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/c-angelx-cares-jhb">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">C-Angelx_cares@JhB</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R300.00</span>
                                            <span className="text-heading text-md fw-semibold ">R250.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/samsung-189-cm-75-inches-d-series-crystal-4k-vivid-pro-ultra-hd-smart-led-tv-ua75due77akxxl-black"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/81omhffs-hl-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/161"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/samsung-189-cm-75-inches-d-series-crystal-4k-vivid-pro-ultra-hd-smart-led-tv-ua75due77akxxl-black"
                                                className="link text-line-2" tabIndex="0">Samsung 189 cm (75 inches) D
                                                Series Crystal 4K Vivid Pro Ultra HD Smart LED TV UA75DUE77AKXXL
                                                (Black)</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/c-angelx-cares-jhb">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">C-Angelx_cares@JhB</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R199,999.00</span>
                                            <span className="text-heading text-md fw-semibold ">R195,000.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/sony-bravia-theatre-quad-ht-a9m2-premium-soundbar-system-with-360-ssm-wireless-multi-dimensional"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/71dvqgjx0-l-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#9A3B00 !important"}}>
                                            Sale


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/160"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/sony-bravia-theatre-quad-ht-a9m2-premium-soundbar-system-with-360-ssm-wireless-multi-dimensional"
                                                className="link text-line-2" tabIndex="0">Sony Bravia Theatre Quad (HT-A9M2)
                                                Premium Soundbar System with 360 SSM, Wireless Multi Dimensional</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/c-angelx-cares-jhb">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">C-Angelx_cares@JhB</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R100,000.00</span>
                                            <span className="text-heading text-md fw-semibold ">R99,500.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/xbox-series-s-starter-bundle-with-3-months-game-pass-ultimate-gaming-console"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/71nfxzyevel-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#9A3B00 !important"}}>
                                            Sale


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/159"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/xbox-series-s-starter-bundle-with-3-months-game-pass-ultimate-gaming-console"
                                                className="link text-line-2" tabIndex="0">Xbox Series S Starter Bundle With
                                                3 Months Game Pass Ultimate Gaming Console</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/c-angelx-cares-jhb">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">C-Angelx_cares@JhB</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R54,000.00</span>
                                            <span className="text-heading text-md fw-semibold ">R53,500.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/crompton-surebreeze-personal-air-cooler-30l-4-way-air-deflection-and-high-density-honeycomb-pads"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/51hl26hub8l-sl1100.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#AC2200 !important"}}>
                                            Hot


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/158"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/crompton-surebreeze-personal-air-cooler-30l-4-way-air-deflection-and-high-density-honeycomb-pads"
                                                className="link text-line-2" tabIndex="0">Crompton Surebreeze Personal Air
                                                Cooler-30L; 4-Way Air Deflection and High Density Honeycomb pads.</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/c-angelx-cares-jhb">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">C-Angelx_cares@JhB</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R3,200.00</span>
                                            <span className="text-heading text-md fw-semibold ">R3,100.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-Featured" role="tabpanel" aria-labelledby="pills-Featured-tab"
                        tabIndex="0">
                        <div className="row g-12">



                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        
            style={{  
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/51qaswl4jrl-sl1442.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition: "center"  ,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f0f0f0"  
                                        }}
            >
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/168"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black"
                                                className="link text-line-2" tabIndex="0">Vidiem Vogue 3-Burner Gas
                                                Cooktop/Hob | World's First Fully Removable Burner Assembly | 10Mm
                                                Toughened Glass | 5Mm Thick Pan Support | Manual Ignition - Black</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R4,300.00</span>
                                            <span className="text-heading text-md fw-semibold ">R4,250.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/vidiem-mixer-grinder-608-a-tuskermixer-grinder-750-watt-with-3-jars-1-juicer-mixer-grinder4-leakproof-jars-with-self-lock-for-wet-dry-spices-chutneys"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        
            style={{  
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/81c2dwbtmfl-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition: "center"  ,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f0f0f0"  
                                        }}
            >
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/167"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/vidiem-mixer-grinder-608-a-tuskermixer-grinder-750-watt-with-3-jars-1-juicer-mixer-grinder4-leakproof-jars-with-self-lock-for-wet-dry-spices-chutneys"
                                                className="link text-line-2" tabIndex="0">Vidiem Mixer Grinder 608 A
                                                Tusker|Mixer grinder 750 watt with 3 Jars &amp; 1 Juicer Mixer Grinder|4
                                                Leakproof Jars with self-lock for wet &amp; dry spices, chutneys</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R4,999.00</span>
                                            <span className="text-heading text-md fw-semibold ">R4,500.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/tcl-248-cm-98-inches-4k-ultra-hd-smart-qd-mini-led-google-tv-98c755-black"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/719yjcos-al-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/166"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/tcl-248-cm-98-inches-4k-ultra-hd-smart-qd-mini-led-google-tv-98c755-black"
                                                className="link text-line-2" tabIndex="0">TCL 248 cm (98 inches) 4K Ultra HD
                                                Smart QD-Mini LED Google TV 98C755 (Black)</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R165,000.00</span>
                                            <span className="text-heading text-md fw-semibold ">R164,000.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-On-sale" role="tabpanel" aria-labelledby="pills-On-sale-tab"
                        tabIndex="0">
                        <div className="row g-12">



                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/samsung-23-l-solo-microwave-oven-ms23a3513aktl-black-auto-cook-programs-child-safety-lock-memory-feature-deodorization-ceramic-enamel-cavity-with-10-year-warranty"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/71jffnoticl-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#9A3B00 !important"}}>
                                            Sale


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/169"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/samsung-23-l-solo-microwave-oven-ms23a3513aktl-black-auto-cook-programs-child-safety-lock-memory-feature-deodorization-ceramic-enamel-cavity-with-10-year-warranty"
                                                className="link text-line-2" tabIndex="0">Samsung 23 L Solo Microwave Oven
                                                (MS23A3513AK/TL, Black, Auto Cook Programs, Child Safety Lock, Memory
                                                Feature, Deodorization, Ceramic Enamel Cavity with 10 year warranty)</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/sports-nike">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Sports@Nike</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R8,990.00</span>
                                            <span className="text-heading text-md fw-semibold ">R8,000.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        
            style={{  
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/51qaswl4jrl-sl1442.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition: "center"  ,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f0f0f0"  
                                        }}
            >
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/168"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black"
                                                className="link text-line-2" tabIndex="0">Vidiem Vogue 3-Burner Gas
                                                Cooktop/Hob | World's First Fully Removable Burner Assembly | 10Mm
                                                Toughened Glass | 5Mm Thick Pan Support | Manual Ignition - Black</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R4,300.00</span>
                                            <span className="text-heading text-md fw-semibold ">R4,250.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/vidiem-mixer-grinder-608-a-tuskermixer-grinder-750-watt-with-3-jars-1-juicer-mixer-grinder4-leakproof-jars-with-self-lock-for-wet-dry-spices-chutneys"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        
            style={{  
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/81c2dwbtmfl-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition: "center"  ,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f0f0f0"  
                                        }}
            >
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/167"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/vidiem-mixer-grinder-608-a-tuskermixer-grinder-750-watt-with-3-jars-1-juicer-mixer-grinder4-leakproof-jars-with-self-lock-for-wet-dry-spices-chutneys"
                                                className="link text-line-2" tabIndex="0">Vidiem Mixer Grinder 608 A
                                                Tusker|Mixer grinder 750 watt with 3 Jars &amp; 1 Juicer Mixer Grinder|4
                                                Leakproof Jars with self-lock for wet &amp; dry spices, chutneys</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R4,999.00</span>
                                            <span className="text-heading text-md fw-semibold ">R4,500.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/tcl-248-cm-98-inches-4k-ultra-hd-smart-qd-mini-led-google-tv-98c755-black"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                       
                                    style={{  
                                        backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/719yjcos-al-sl1500.jpg')"  ,
                                        backgroundSize: "contain"  ,
                                        backgroundPosition: "center"  ,
                                        backgroundRepeat: "no-repeat",
                                        backgroundColor: "#f0f0f0"  
                                                                }}
                                    >
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/166"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/tcl-248-cm-98-inches-4k-ultra-hd-smart-qd-mini-led-google-tv-98c755-black"
                                                className="link text-line-2" tabIndex="0">TCL 248 cm (98 inches) 4K Ultra HD
                                                Smart QD-Mini LED Google TV 98C755 (Black)</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/riviera-montecasino">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Riviera@Montecasino</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R165,000.00</span>
                                            <span className="text-heading text-md fw-semibold ">R164,000.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-Trending" role="tabpanel" aria-labelledby="pills-Trending-tab"
                        tabIndex="0">
                        <div className="row g-12">



                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{  
                                            backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/71csc3m2agl-sl1500.jpg')"  ,
                                            backgroundSize: "contain"  ,
                                            backgroundPosition: "center"  ,
                                            backgroundRepeat: "no-repeat",
                                            backgroundColor: "#f0f0f0"  
                                                                    }}>
                 
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/135"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal"
                                                className="link text-line-2" tabIndex="0">iPhone 16 5G Mobile Phone with
                                                Camera Control, A18 Chip and a Big Boost in Battery Life. Works with
                                                AirPods; Teal</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/robert-store">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Roberts@Store</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R16,802.47</span>
                                            <span className="text-heading text-md fw-semibold ">R16,750.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/samsung-galaxy-s25-ultra-5g-ai-smartphone-titanium-gray-12gb-ram-256gb-storage-200mp-camera-s-pen-included-long-battery-life"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{  
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/71rs4aer71l-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition: "center"  ,
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f0f0f0"  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/137"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/samsung-galaxy-s25-ultra-5g-ai-smartphone-titanium-gray-12gb-ram-256gb-storage-200mp-camera-s-pen-included-long-battery-life"
                                                className="link text-line-2" tabIndex="0">Samsung Galaxy S25 Ultra 5G AI
                                                Smartphone (Titanium Gray, 12GB RAM, 256GB Storage), 200MP Camera, S Pen
                                                Included, Long Battery Life</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/star-kist">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Star@Kist</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R30,000.00</span>
                                            <span className="text-heading text-md fw-semibold ">R29,500.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal-1"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/615o-nfqkdl-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#006554 !important"}}>
                                            New


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/136"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="https://ecbackend.cazhier.com/products/phone-16-128-gb-5g-mobile-phone-with-camera-control-a18-chip-and-a-big-boost-in-battery-life-works-with-airpods-teal-1"
                                                className="link text-line-2" tabIndex="0">iPhone 16 256 GB: 5G Mobile Phone
                                                with Camera Control, A18 Chip and a Big Boost in Battery Life. Works
                                                with AirPods; Black</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/robert-store">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Roberts@Store</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R16,802.47</span>
                                            <span className="text-heading text-md fw-semibold ">R16,750.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up"
                                data-aos-duration="200">
                                <div
                                    className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">

                                    <a href="http://127.0.0.1:8000/products/apple-ipad-pro-13-m4-ultra-retina-xdr-display-512gb-12mp-front-camera-12mp-back-camera-lidar-scanner-space-black"
                                        className="product-card__thumb grid_product flex-center rounded-8 position-relative"
                                        style={{
                backgroundImage: "url('https://ecbackend.cazhier.com/storage/products-2/71wv5yk6ll-sl1500.jpg')"  ,
                backgroundSize: "contain"  ,
                backgroundPosition:" center"  ,
                backgroundRepeat: "no-repeat"  ,
                backgroundColor: "#f0f0f0",  
                                        }}>
                                        {/* <!-- code1 --> */}
                                        <span
                                            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
                                            style={{backgroundColor: "#AC2200 !important"}}>
                                            Hot


                                        </span>


                                    </a>
                                    <div
                                        className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
                                    </div>

                                    <div
                                        className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                        <span
                                            className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                            <button type="button" className="tp-product-action-btn-2 mywishlist
                    tp-product-add-to-wishlist-btn" data-bb-toggle="add-to-wishlist" title="Add to wishlist"
                                                data-url="http://127.0.0.1:8000/wishlist/139"
                                                data-add-text="ph ph-heart" data-remove-text="ph-fill ph-heart">


                                                <i className="ph-fill ph-heart"></i>
                                            </button>
                                        </span>

                                    </div>

                                    <div className="product-card__content mt-10">

                                        <div className="flex-align gap-6">
                                            {/* <!-- <span className="text-xs fw-medium text-gray-500">4.8</span> --> */}
                                            <span className="text-xs fw-medium text-gray-500">0.0</span>
                                            <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                    className="ph-fill ph-star"></i></span>
                                            <span className="text-xs fw-medium text-gray-500">(0k)</span>
                                        </div>

                                        <h6 className="title text-sm fw-normal mt-12 mb-8 ">
                                            <a href="http://127.0.0.1:8000/products/apple-ipad-pro-13-m4-ultra-retina-xdr-display-512gb-12mp-front-camera-12mp-back-camera-lidar-scanner-space-black"
                                                className="link text-line-2" tabIndex="0">Apple iPad Pro 13″ (M4): Ultra
                                                Retina XDR Display, 512GB, 12MP Front Camera / 12MP Back Camera, LiDAR
                                                Scanner, Space Black</a>
                                        </h6>

                                        <a href="http://127.0.0.1:8000/stores/robert-store">
                                            <div className="flex-align gap-4">
                                                <span className="text-tertiary-600 text-md d-flex"><i
                                                        className="ph-fill ph-storefront"></i></span>
                                                <span className="text-gray-500 text-xs">Roberts@Store</span>
                                            </div>
                                        </a>
                                        <div className="mt-8">

                                            <div className="progress w-100 bg-color-three rounded-pill h-4"
                                                role="progressbar" aria-label="Basic example" aria-valuenow="0"
                                                aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-tertiary-600 rounded-pill"
                                                    style={{width: "0%"}}></div>
                                            </div>
                                        </div>

                                        <div className="product-card__price my-10">
                                            <span
                                                className="text-gray-400 text-md fw-semibold text-decoration-line-through">R49,000.00</span>
                                            <span className="text-heading text-md fw-semibold ">R48,000.00 <span
                                                    className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-Top-rated" role="tabpanel"
                        aria-labelledby="pills-Top-rated-tab" tabIndex="0">
                        <div className="row g-12">


                            <div className="col-12 text-center">
                                <p>No top rated products available.</p>
                            </div>

                        </div>
                    </div>
                </div>





            </div>
        </div>
    </section>
    {/* <!-- ========================= Trending Products End ================================ --> */}
     <section className="Ad_product_two discount pt-20">
        <div className="container container-lg">
            <div className="row px-5 gy-4">
                <div className="col-xl-6 px-10 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="600">
                    <div
                        className="discount-item rounded-16 overflow-hidden position-relative z-1 h-100 d-flex flex-column align-items-start justify-content-center">

                        <img src="https://ecbackend.cazhier.com/storage/ad-product/discount-bg1-1.jpg"
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
                            loading="lazy"/>

                        <div className="w-100 flex-between gap-20">
                            <div className="discount-item__content">
                                <span className="fw-semibold text-tertiary-600 mb-20">
                                    UP TO 30% OFF
                                </span>




                                <h6 className="mb-20">
                                    <a href="http://127.0.0.1:8000/products/kaspersky-premium-total-security-ultimate-security-1-device-3-years-email-delivery-in-1-hour"
                                        target="_blank" className="text-heading">Kaspersky | Premium - Total Security
                                        (Ultimate Sec..</a>
                                </h6>

                                <a href="http://127.0.0.1:8000/products/kaspersky-premium-total-security-ultimate-security-1-device-3-years-email-delivery-in-1-hour"
                                    target="_blank" className="btn btn-outline-black rounded-pill gap-8">
                                    Shop Now
                                </a>

                            </div>



                            <a href="http://127.0.0.1:8000/products/kaspersky-premium-total-security-ultimate-security-1-device-3-years-email-delivery-in-1-hour"
                                target="_blank">
                                <img src="https://ecbackend.cazhier.com/storage/products-2/61u3alnedpl-sl1500.jpg"
                                    alt="Kaspersky | Premium - Total Security (Ultimate Security) | 1 Device | 3 Years | Email Delivery in 1 Hour"
                                    className="dynamic-ad-product-image"/>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="col-xl-6 px-10 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="600">
                    <div
                        className="discount-item rounded-16 overflow-hidden position-relative z-1 h-100 d-flex flex-column align-items-start justify-content-center">

                        <img src="https://ecbackend.cazhier.com/storage/ad-product/discount-bg2-1.jpg"
                            className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1"
                            loading="lazy"/>

                        <div className="w-100 flex-between gap-20">
                            <div className="discount-item__content">
                                <span className="fw-semibold text-tertiary-600 mb-20">
                                    UP TO 30% OFF
                                </span>




                                <h6 className="mb-20">
                                    <a href="http://127.0.0.1:8000/products/sony-god-of-war-ragnarok-ps5-game"
                                        target="_blank" className="text-heading">Sony God Of War Ragnarok |PS5 Game</a>
                                </h6>

                                <a href="http://127.0.0.1:8000/products/sony-god-of-war-ragnarok-ps5-game"
                                    target="_blank" className="btn btn-outline-black rounded-pill gap-8">
                                    Shop Now 2
                                </a>

                            </div>



                            <a href="http://127.0.0.1:8000/products/sony-god-of-war-ragnarok-ps5-game" target="_blank">
                                <img src="https://ecbackend.cazhier.com/storage/products-2/81e5avym-l-sl1500.jpg"
                                    alt="Sony God Of War Ragnarok |PS5 Game" className="dynamic-ad-product-image"/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className=" featured_sells featured-products overflow-hidden py-20">
        <div className="container container-lg">
            <div className="row g-4  flex-wrap-reverse">
                <div className="col-xxl-8   pe-10">
                    <div className="featured_product_container">
                        <button type="button" id="featured-products-prev"
                            className="slick-prev deal_leftarrow slick-arrow hlo flex-center rounded-circle hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1"
                            >
                            <i className="ph ph-caret-left"></i>
                        </button>

                        <div className="border border-gray-100 p-12 rounded-16 bg-white ">
                            <div className="section-heading mb-0">
                                <div className="flex-between flex-wrap ">
                                    <h5 className="mb-0 ">
                                        Featured

                                    </h5>
                                    <div className="flex-align gap-16 animate_once
                                        
                                        ">
                                        <a href="http://127.0.0.1:8000/products"
                                            className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">
                                            View All Deals
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div className="row featured-product-slider ">
                               
                                <div className="col-xxl-6">
                                    <div className="featured-products__sliders">
                                        <div className="" data-aos="fade-up" data-aos-duration="800">
                                            <div
                                        className="mt-10 product_group_card_thumb product-card d-flex mx-5 gap-26 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                                <a href="product-details-two.html"
                                                className="product_group_card_thumb product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                                                tabIndex="0" style={{backgroundColor: "#f0f0f0"}}>
                                                    <span
                                                        className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sale
                                                        50% </span>
                                                        <div
                                                className=" bg-white p-2 rounded-pill text-md position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                                <span
                                                    className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                                    <button type="button" 
                                                        >
                                                        <i className="ph-fill ph-heart"></i>
                                                    </button>

                                                </span>
                                            </div>
                                            <img src="https://ecbackend.cazhier.com/storage/products-2/91x15nawal-sl1500-600x600.jpg" className="product_group_small" loading="lazy" alt="LEGO DC Batmobile: Batman vs. The Joker Chase 76224 Building Toy Set (438 Pieces)"/>
                                                </a>
                                                <div className="product-card__content my-20 flex-grow-1">
                                                    <h6 className="title text-lg fw-semibold mb-12">
                                                        <a href="product-details-two.html" className="link text-line-2"
                                                            tabIndex="0">iPhone 15 Pro Warp Charge 30W Power Adapter</a>
                                                    </h6>
                                                    <div className="flex-align gap-6 mb-12">
                                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                                className="ph-fill ph-star"></i></span>
                                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                                    </div>
                                                    <div className="flex-align gap-4">
                                                        <span className="text-main-two-600 text-md d-flex"><i
                                                                className="ph-fill ph-storefront"></i></span>
                                                        <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                                    </div>
                                                    <div className="product-card__price my-20">
                                                        <span
                                                            className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                            $28.99</span>
                                                        <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                                className="text-gray-500 fw-normal">/Qty</span> </span>
                                                    </div>
    
                                                    {/* <!-- <a href="cart.html"
                                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                                        tabIndex="0">
                                                        Add To Cart <i className="ph ph-shopping-cart"></i>
                                                    </a> --> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="" data-aos="fade-up" data-aos-duration="800">
                                            <div
                                        className="mt-10 product_group_card_thumb product-card d-flex mx-5 gap-26 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                                <a href="product-details-two.html"
                                                className="product_group_card_thumb product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                                                tabIndex="0" style={{backgroundColor: "#f0f0f0"}}>
                                                    <span
                                                        className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sale
                                                        50% </span>
                                                        <div
                                                className=" bg-white p-2 rounded-pill text-md position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                                <span
                                                    className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                                    <button type="button" 
                                                        >
                                                        <i className="ph-fill ph-heart"></i>
                                                    </button>

                                                </span>
                                            </div>
                                            <img src="https://ecbackend.cazhier.com/storage/products-2/91x15nawal-sl1500-600x600.jpg" className="product_group_small" loading="lazy" alt="LEGO DC Batmobile: Batman vs. The Joker Chase 76224 Building Toy Set (438 Pieces)"/>
                                                </a>
                                                <div className="product-card__content my-20 flex-grow-1">
                                                    <h6 className="title text-lg fw-semibold mb-12">
                                                        <a href="product-details-two.html" className="link text-line-2"
                                                            tabIndex="0">iPhone 15 Pro Warp Charge 30W Power Adapter</a>
                                                    </h6>
                                                    <div className="flex-align gap-6 mb-12">
                                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                                className="ph-fill ph-star"></i></span>
                                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                                    </div>
                                                    <div className="flex-align gap-4">
                                                        <span className="text-main-two-600 text-md d-flex"><i
                                                                className="ph-fill ph-storefront"></i></span>
                                                        <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                                    </div>
                                                    <div className="product-card__price my-20">
                                                        <span
                                                            className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                            $28.99</span>
                                                        <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                                className="text-gray-500 fw-normal">/Qty</span> </span>
                                                    </div>
    
                                                    {/* <!-- <a href="cart.html"
                                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                                        tabIndex="0">
                                                        Add To Cart <i className="ph ph-shopping-cart"></i>
                                                    </a> --> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6">
                                    <div className="featured-products__sliders">
                                        <div className="" data-aos="fade-up" data-aos-duration="800">
                                            <div
                                        className="mt-10 product_group_card_thumb product-card d-flex mx-5 gap-26 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                                <a href="product-details-two.html"
                                                className="product_group_card_thumb product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                                                tabIndex="0" style={{backgroundColor: "#f0f0f0"}}>
                                                    <span
                                                        className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sale
                                                        50% </span>
                                                        <div
                                                className=" bg-white p-2 rounded-pill text-md position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                                <span
                                                    className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                                    <button type="button" 
                                                        >
                                                        <i className="ph-fill ph-heart"></i>
                                                    </button>

                                                </span>
                                            </div>
                                            <img src="https://ecbackend.cazhier.com/storage/products-2/91x15nawal-sl1500-600x600.jpg" className="product_group_small" loading="lazy" alt="LEGO DC Batmobile: Batman vs. The Joker Chase 76224 Building Toy Set (438 Pieces)"/>
                                                </a>
                                                <div className="product-card__content my-20 flex-grow-1">
                                                    <h6 className="title text-lg fw-semibold mb-12">
                                                        <a href="product-details-two.html" className="link text-line-2"
                                                            tabIndex="0">iPhone 15 Pro Warp Charge 30W Power Adapter</a>
                                                    </h6>
                                                    <div className="flex-align gap-6 mb-12">
                                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                                className="ph-fill ph-star"></i></span>
                                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                                    </div>
                                                    <div className="flex-align gap-4">
                                                        <span className="text-main-two-600 text-md d-flex"><i
                                                                className="ph-fill ph-storefront"></i></span>
                                                        <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                                    </div>
                                                    <div className="product-card__price my-20">
                                                        <span
                                                            className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                            $28.99</span>
                                                        <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                                className="text-gray-500 fw-normal">/Qty</span> </span>
                                                    </div>
    
                                                    {/* <!-- <a href="cart.html"
                                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                                        tabIndex="0">
                                                        Add To Cart <i className="ph ph-shopping-cart"></i>
                                                    </a> --> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="" data-aos="fade-up" data-aos-duration="800">
                                            <div
                                        className="mt-10 product_group_card_thumb product-card d-flex mx-5 gap-26 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                                <a href="product-details-two.html"
                                                className="product_group_card_thumb product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                                                tabIndex="0" style={{backgroundColor: "#f0f0f0"}}>
                                                    <span
                                                        className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sale
                                                        50% </span>
                                                        <div
                                                className=" bg-white p-2 rounded-pill text-md position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                                <span
                                                    className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                                    <button type="button" 
                                                        >
                                                        <i className="ph-fill ph-heart"></i>
                                                    </button>

                                                </span>
                                            </div>
                                            <img src="https://ecbackend.cazhier.com/storage/products-2/91x15nawal-sl1500-600x600.jpg" className="product_group_small" loading="lazy" alt="LEGO DC Batmobile: Batman vs. The Joker Chase 76224 Building Toy Set (438 Pieces)"/>
                                                </a>
                                                <div className="product-card__content my-20 flex-grow-1">
                                                    <h6 className="title text-lg fw-semibold mb-12">
                                                        <a href="product-details-two.html" className="link text-line-2"
                                                            tabIndex="0">iPhone 15 Pro Warp Charge 30W Power Adapter</a>
                                                    </h6>
                                                    <div className="flex-align gap-6 mb-12">
                                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                                className="ph-fill ph-star"></i></span>
                                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                                    </div>
                                                    <div className="flex-align gap-4">
                                                        <span className="text-main-two-600 text-md d-flex"><i
                                                                className="ph-fill ph-storefront"></i></span>
                                                        <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                                    </div>
                                                    <div className="product-card__price my-20">
                                                        <span
                                                            className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                            $28.99</span>
                                                        <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                                className="text-gray-500 fw-normal">/Qty</span> </span>
                                                    </div>
    
                                                    {/* <!-- <a href="cart.html"
                                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                                        tabIndex="0">
                                                        Add To Cart <i className="ph ph-shopping-cart"></i>
                                                    </a> --> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6">
                                    <div className="featured-products__sliders">
                                        <div className="" data-aos="fade-up" data-aos-duration="800">
                                            <div
                                        className="mt-10 product_group_card_thumb product-card d-flex mx-5 gap-26 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                                <a href="product-details-two.html"
                                                className="product_group_card_thumb product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                                                tabIndex="0" style={{backgroundColor: "#f0f0f0"}}>
                                                    <span
                                                        className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sale
                                                        50% </span>
                                                        <div
                                                className=" bg-white p-2 rounded-pill text-md position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                                <span
                                                    className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                                    <button type="button" 
                                                        >
                                                        <i className="ph-fill ph-heart"></i>
                                                    </button>

                                                </span>
                                            </div>
                                            <img src="https://ecbackend.cazhier.com/storage/products-2/91x15nawal-sl1500-600x600.jpg" className="product_group_small" loading="lazy" alt="LEGO DC Batmobile: Batman vs. The Joker Chase 76224 Building Toy Set (438 Pieces)"/>
                                                </a>
                                                <div className="product-card__content my-20 flex-grow-1">
                                                    <h6 className="title text-lg fw-semibold mb-12">
                                                        <a href="product-details-two.html" className="link text-line-2"
                                                            tabIndex="0">iPhone 15 Pro Warp Charge 30W Power Adapter</a>
                                                    </h6>
                                                    <div className="flex-align gap-6 mb-12">
                                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                                className="ph-fill ph-star"></i></span>
                                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                                    </div>
                                                    <div className="flex-align gap-4">
                                                        <span className="text-main-two-600 text-md d-flex"><i
                                                                className="ph-fill ph-storefront"></i></span>
                                                        <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                                    </div>
                                                    <div className="product-card__price my-20">
                                                        <span
                                                            className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                            $28.99</span>
                                                        <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                                className="text-gray-500 fw-normal">/Qty</span> </span>
                                                    </div>
    
                                                    {/* <!-- <a href="cart.html"
                                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                                        tabIndex="0">
                                                        Add To Cart <i className="ph ph-shopping-cart"></i>
                                                    </a> --> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="" data-aos="fade-up" data-aos-duration="800">
                                            <div
                                        className="mt-10 product_group_card_thumb product-card d-flex mx-5 gap-26 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                                <a href="product-details-two.html"
                                                className="product_group_card_thumb product-card__thumb flex-center h-unset rounded-8 position-relative w-unset flex-shrink-0 p-24"
                                                tabIndex="0" style={{backgroundColor: "#f0f0f0"}}>
                                                    <span
                                                        className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">Sale
                                                        50% </span>
                                                        <div
                                                className=" bg-white p-2 rounded-pill text-md position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
                                                <span
                                                    className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
                                                    <button type="button" 
                                                        >
                                                        <i className="ph-fill ph-heart"></i>
                                                    </button>

                                                </span>
                                            </div>
                                            <img src="https://ecbackend.cazhier.com/storage/products-2/91x15nawal-sl1500-600x600.jpg" className="product_group_small" loading="lazy" alt="LEGO DC Batmobile: Batman vs. The Joker Chase 76224 Building Toy Set (438 Pieces)"/>
                                                </a>
                                                <div className="product-card__content my-20 flex-grow-1">
                                                    <h6 className="title text-lg fw-semibold mb-12">
                                                        <a href="product-details-two.html" className="link text-line-2"
                                                            tabIndex="0">iPhone 15 Pro Warp Charge 30W Power Adapter</a>
                                                    </h6>
                                                    <div className="flex-align gap-6 mb-12">
                                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                                        <span className="text-15 fw-medium text-warning-600 d-flex"><i
                                                                className="ph-fill ph-star"></i></span>
                                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                                    </div>
                                                    <div className="flex-align gap-4">
                                                        <span className="text-main-two-600 text-md d-flex"><i
                                                                className="ph-fill ph-storefront"></i></span>
                                                        <span className="text-gray-500 text-xs">By Lucky Supermarket</span>
                                                    </div>
                                                    <div className="product-card__price my-20">
                                                        <span
                                                            className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                                            $28.99</span>
                                                        <span className="text-heading text-md fw-semibold ">$14.99 <span
                                                                className="text-gray-500 fw-normal">/Qty</span> </span>
                                                    </div>
    
                                                    {/* <!-- <a href="cart.html"
                                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                                        tabIndex="0">
                                                        Add To Cart <i className="ph ph-shopping-cart"></i>
                                                    </a> --> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button type="button" id="featured-products-next"
                            className="slick-next deal_rightarrow slick-arrow flex-center rounded-circle hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1"
                            >
                            <i className="ph ph-caret-right"></i>
                        </button>
                    </div>
                </div>

                <div className="col-xxl-4   ps-10">
                    <div
                        className="position-relative rounded-16 bg-light-purple overflow-hidden p-28 pb-0 z-1 text-center featured-card ad">
                        <img src="https://ecbackend.cazhier.com/themes/ecomm/images/bg/featured-product-bg.png" alt=""
                            className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img"/>


                            <div className="py-xl-4 text-center">
                            <span>
                                <a className="text-md mb-20 text-white"
                                    href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black">Vidiem
                                    Vogue 3-Burner Gas Cooktop/Hob | World's First Fully Removable Burner Assembly |
                                    10Mm Toughened Glass | 5Mm Thick Pan Support | Manual Ignition - Black</a>
                            </span>
                            <div className="flex-center gap-12 text-white">
                                <span className="">

                                    FROM
                                </span>

                                <h4 className="mb-8 text-white">

                                    R4,250.00
                                </h4>

                                <span
                                className="badge-style-two position-relative me-8 bg-main-two-600 text-white text-sm py-2 px-8 rounded-4">
                                    -1%
                                </span>
                            </div>

                            <a href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black"
                            className="mt-16 mb-10 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                            tabIndex="0">
                                Shop Now
                                <span className="icon text-xl d-flex"><i className="ph ph-arrow-right"></i></span>
                            </a>
                        </div>


                        <a
                            href="http://127.0.0.1:8000/products/vidiem-vogue-3-burner-gas-cooktophob-worlds-first-fully-removable-burner-assembly-10mm-toughened-glass-5mm-thick-pan-support-manual-ignition-black">
                            <img src="https://ecbackend.cazhier.com/storage/products-2/51qaswl4jrl-sl1442.jpg"
                                alt="Featured bottom Image" 
                                /></a>




                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="tell_me_more shipping mb-20" id="tellmemore">
        <div className="container container-lg">
            <div className="row g-4 flex-wrap-reverse">

                <div className="col-xxl-12">
                    <div className="border border-gray-100 p-12 rounded-16 bg-white">
                        <div className="section-heading mb-10">
                            <div className="flex-between flex-wrap gap-8">
                                <h5 className="mb-0">
                                    How does C-Angelx work?
                                </h5>
                                {/* <!-- <h5 className="mb-0 wow bounceInLeft">Most wished for in Customer</h5> --> */}
                                <div className="flex-align gap-16 wow bounceInRight"
                                    style={{visibility:" hidden", animationName: "none"}}>
                                    {/* <!-- <a href="#"
                            className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline">View
                            All Products</a> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="row  px-5 ">
                            <div className="col-xxl-4 px-5 col-sm-6 mb-10 aos-init aos-animate" data-aos="zoom-in"
                                data-aos-duration="400">
                                <div className="shipping-item gap-16 rounded-16 bg-main-50 hover-bg-main-50 transition-2">
                                    <span
                                        className="w-56 h-56 flex-center rounded-circle  text-white text-32 flex-shrink-0 "><img
                                            src="https://ecbackend.cazhier.com/storage/extras/shop.png" loading="lazy"
                                            alt=""/>
                                    </span>
                                    <div className="">
                                        <h6 className="my-16">Shop, Sell and Support </h6>
                                        <span className="text-sm text-heading">C-Angelx enables individual Patrons
                                            (customers,
                                            supporters, etc) to follow listed merchants &amp; NPOs of their choice on
                                            this
                                            platform - &amp;
                                            shop online, place lay-buys, or donate to any of the listed NPOs they
                                            like</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 px-5 col-sm-6 mb-10 aos-init aos-animate" data-aos="zoom-in"
                                data-aos-duration="600">
                                <div className="shipping-item  gap-16 rounded-16 bg-main-50 hover-bg-main-50 transition-2">
                                    <span
                                        className="w-56 h-56 flex-center rounded-circle  text-white text-32 flex-shrink-0"><img
                                            src="https://ecbackend.cazhier.com/storage/extras/give.png" loading="lazy"
                                            alt="Business Efficiencies"/></span>
                                    <div className="">
                                        <h6 className="my-16"> Business Efficiencies</h6>
                                        <span className="text-sm text-heading">You are also able to create an online
                                            merchant &amp;
                                            sell
                                            online, or an NPO (cause) account for superior fundraising &amp; receiving
                                            donations
                                            online
                                            safely. Add your staff as subordinates to upload inventory &amp; process
                                            sales’
                                            while you
                                            manage the business...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 px-5 col-sm-6 mb-10 aos-init aos-animate" data-aos="zoom-in"
                                data-aos-duration="800">
                                <div className="shipping-item  gap-16 rounded-16 bg-main-50 hover-bg-main-50 transition-2">
                                    <span
                                        className="w-56 h-56 flex-center rounded-circle  text-white text-32 flex-shrink-0"><img
                                            src="https://ecbackend.cazhier.com/storage/extras/one.png" loading="lazy"
                                            alt="One Stop Solution"/></span>
                                    <div className="">
                                        <h6 className="my-16">One Stop Solution</h6>
                                        <span className="text-sm text-heading">
                                            C-Angelx has everything figured out for your merchant:
                                            DHL Courier services can collect directly from your shop &amp; deliver
                                            directly to
                                            your
                                            customer’s door, securely &amp; safely. No Hassles!
                                            <br />
                                            A merchant can optionally use its in-house courier service or other third
                                            party
                                            service instead of DHL, but set fixed courier fees paid by its customers.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-sm-6 mb-10 px-5 aos-init aos-animate" data-aos="zoom-in"
                                data-aos-duration="1000">
                                <div className="shipping-item  gap-16 rounded-16 bg-main-50 hover-bg-main-50 transition-2">
                                    <span
                                        className="w-56 h-56 flex-center rounded-circle  text-white text-32 flex-shrink-0"><img
                                            src="https://ecbackend.cazhier.com/storage/extras/safe.png" loading="lazy"
                                            alt="Safe and Secured"/></span>
                                    <div className="">
                                        <h6 className="my-16">Safe and Secured</h6>
                                        <span className="text-sm text-heading">C-Angelx is designed with security in mind,
                                            &amp;
                                            further
                                            hosted in highly secure &amp; reliable global servers’ as a
                                            Global-Platform.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-sm-6 mb-10 px-5 aos-init aos-animate" data-aos="zoom-in"
                                data-aos-duration="1000">
                                <div className="shipping-item  gap-16 rounded-16 bg-main-50 hover-bg-main-50 transition-2">
                                    <span
                                        className="w-56 h-56 flex-center rounded-circle  text-white text-32 flex-shrink-0"><img
                                            src="https://ecbackend.cazhier.com/storage/extras/quick.png" loading="lazy"
                                            alt="Quick and Easy"/></span>
                                    <div className="">
                                        <h6 className="my-16">Quick and Easy</h6>
                                        <span className="text-sm text-heading">We have partnered with known and trusted 3rd
                                            party
                                            suppliers in the global ecommerce industry – for secure transactions, and
                                            reliable
                                            courier services.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-sm-6 mb-10 px-5 aos-init aos-animate" data-aos="zoom-in"
                                data-aos-duration="1000">
                                <div className="shipping-item  gap-16 rounded-16 bg-main-50 hover-bg-main-50 transition-2">
                                    <span
                                        className="w-56 h-56 flex-center rounded-circle  text-white text-32 flex-shrink-0"><img
                                            src="https://ecbackend.cazhier.com/storage/extras/how.png" loading="lazy"
                                            alt="So how much"/></span>
                                    <div className="">
                                        <h6 className="my-16">So how much</h6>
                                        <span className="text-sm text-heading">There are No fixed monthly fees on merchants,
                                            but
                                            a 5%
                                            commission for each sale - plus the separate Payment gateway’s fee of 2.9 -
                                            3.5%, (around 8.5% in total, which is still
                                            lower than the 10 to 18% charged by other platforms.). NPOs
                                            (causes) are exempt of our fee, except of the payment gateway’s fee.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="newsletter-two py-5 overflow-hidden aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
        <div className="container container-lg">
            <div className="flex-between gap-20 flex-wrap">
                <div className="flex-align gap-22 align-items-center">
                    <span className="d-flex">
                        <img src="https://ecbackend.cazhier.com/storage/envelop.png" loading="lazy" alt=""/>
                    </span>
                    <span className="d-flex align-items-center text-white h5 fw-medium mb-0">
                        Subscribe to our Newsletter
                    </span>
                </div>
                <form action="#" className="newsletter-two__form w-50">
                    <div className="flex-align gap-16">


                        <input type="text" className="common-input style-two rounded-8 flex-grow-1 py-14"
                            placeholder="Enter your email address"/>
                        <button type="submit" className="btn 
                                                btn_subscribe
                                            
                                            flex-shrink-0 rounded-8 py-16">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <footer className="footer main_footer pt-40 pb-20">
        <div className="container container-lg">
            <div className="" style={{padding: "0px 20px;"}}>
                <div className="row">

                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 footer_desc_wrapper">

                            <div className="footer-item footer_subwrap">
                                <div className="footer-item__logo">


                                    <div className="logo">
                                        <a href="http://127.0.0.1:8000" className="user_dashboard_logo">
                                            <img src="https://ecbackend.cazhier.com/storage/logo/cangelxlogo1.png"
                                                style={{height: "47px"}} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <p className="footer_description mb-24" style={{width: "100"}}>Our next generation marketplace
                                    makes Online shopping
                                    far more interactive and collaborative between shoppers to
                                    Merchants, with items such as mobile phones, Games, PC &amp; Laptops, Electronic
                                    appliances, fashion, wines, etc.
                                    all available with multiple purchasing options.</p>


                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 menus_footer pl-20">
                                    <div className="footer-item">
                                        <h6 className="footer-item__title text-md">Who are We</h6>
                                        <ul className="footer-menu">
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000/about">
                                                    About us
                                                </a>
                                            </li>
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000/contact">
                                                    Contact Us
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 menus_footer">
                                    <div className="footer-item">
                                        <h6 className="footer-item__title text-md">Terms of Use</h6>
                                        <ul className="footer-menu">
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000/terms-and-conditions">
                                                    Terms and Conditions
                                                </a>
                                            </li>
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000/privacy-policy">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000/contact">
                                                    Advertisement
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 col-6 menus_footer">
                                    <div className="footer-item">

                                        <h6 className="footer-item__title text-md">Personalization</h6>
                                        <ul className="footer-menu">
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000/user/edit-profile">
                                                    Profile
                                                </a>
                                            </li>
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000/customer/address">
                                                    Location settings
                                                </a>
                                            </li>
                                            <li className="mb-16">
                                                <a className="text-gray-600 hover-text-main-600 text-sm"
                                                    href="http://127.0.0.1:8000/vendor/manage-business">
                                                    Sell on C-Angelx
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 pt-lg-0 follow_us_footer menus_footer">
                                    <div className="footer-item">

                                        <h6 className="footer-item__title text-md">Follow us on</h6>



                                        <ul className="flex-align gap-16 ">

                                            <li
                                                className="w-44 h-44 flex-center text-main-two-600 soc text-xl rounded-8 bg-main-50 hover-bg-main-50 hover-text-white">
                                                <a href="facebook" title="facebook" target="_blank"
                                                    style={{backgroundColor: "rgba(60, 99, 42, 0) !important",color: "rgb(17, 85, 204) !important"}}
                                                    className="">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={24}
                                                        height={24} viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3">
                                                        </path>
                                                    </svg> </a>
                                            </li>

                                            <li
                                                className="w-44 h-44 flex-center text-main-two-600 soc text-xl rounded-8 bg-main-50 hover-bg-main-50 hover-text-white">
                                                <a href="twitter" title="twitter" target="_blank"
                                                    style={{backgroundColor:" rgba(69, 104, 52, 0) !important",color:" rgb(17, 85, 204) !important"}}
                                                    className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" x={"0px"} y={"0px"} width={24} height={24} viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                                    </svg>
                                                </a>
                                            </li>

                                            <li
                                                className="w-44 h-44 flex-center text-main-two-600 soc text-xl rounded-8 bg-main-50 hover-bg-main-50 hover-text-white">
                                                <a href="instagram" title="instagram" target="_blank"
                                                    style={{backgroundColor:" rgba(80, 115, 64, 0) !important",color:" rgb(17, 85, 204) !important"}}
                                                    className="">
                                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width={24}
                                                        height={24} viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path
                                                            d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z">
                                                        </path>
                                                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                        <path d="M16.5 7.5l0 .01"></path>
                                                    </svg> </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-end align-items-center text-center">

                                <div className="col-lg-8">
                                    <ul className="flex-align gap-16 justify-content-center align-items-center ">

                                        <li className="h-80 flex-center text-main-two-600 soc text-xl  hover-text-white">
                                            <a>
                                                <h6 className="mb-0 third_party">Third Party Partners:</h6>
                                            </a>
                                        </li>
                                        <li
                                            className=" h-80 flex-center text-main-two-600 soc text-xl rounded-8   hover-text-white">
                                            <a href="https://www.dhl.com/za-en/home/dhl-for-business.html#parsysPath_ms_mf_container"
                                                target="_blank">
                                                <img style={{height: "60px"}}
                                                    src="https://ecbackend.cazhier.com/storage/dhl-logo.png" alt=""
                                                    className="footer_payment_logo"/>
                                            </a>
                                        </li>

                                        <li
                                            className=" h-80 flex-center text-main-two-600 soc text-xl rounded-8   hover-text-white">
                                            <a href="https://www.payfast.co.za/registration" target="_blank">
                                                <img style={{height: "60px"}}
                                                    src="https://ucarecdn.com/8736b763-b248-418f-a77e-341df4cda7fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                                                    alt="" className="footer_payment_logo"/>
                                            </a>
                                        </li>

                                        <li
                                            className=" h-80 flex-center text-main-two-600 soc text-xl rounded-8   hover-text-white">
                                            <a href="https://www.paypal.com/in/webapps/mpp/account-selection"
                                                target="_blank">
                                                <img style={{height: "60px"}}
                                                    src="https://ecbackend.cazhier.com/storage/paypal_2014_logo.png"
                                                    alt="" className="footer_payment_logo"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>











            </div>
        </div>
    </footer>
    <div className="bottom-footer bg-color-three py-8">
        <div className="container container-lg">
            <div className="bottom-footer__inner flex-between flex-wrap gap-16  text-sm">
                <p className="bottom-footer__text  text-dark">Copyright© 2018 – 2025. All rights reserved. <a
                        href="https://cangelx.com/">cangelx.com</a></p>

                <div className="flex-align gap-8 flex-wrap  ">

                    <span className="text-heading text-sm text-dark"></span>
                    <img src="https://ecbackend.cazhier.com/storage/payment-method.png" alt=""/>
                </div>


            </div>
        </div>
    </div>
      </main>
    </>
  );
}
