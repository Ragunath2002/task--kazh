import Image from "next/image";
import CountdownTimer from "../component/CountdownTimer.js"
import Footer from "../component/footer.js"
import Header from "../component/header.js"
import Card from "@/component/card.js";
import Trendingcard from "@/component/trendingcard.js";

export default function Home() {

    const products = [
        {
          image: 'assets/images/thumbs/product-two-img1.png',
          title: 'Taylor Farms Broccoli Florets Vegetables',
          rating: '4.8',
          ratingCount: '17k',
          seller: 'Lucky Supermarket123',
          sold: 18,
          total: 35,
          oldPrice: '28.99',
          newPrice: '14.99',
          badge : "Sold",
          link : "product-details-two.html"
        },
        {
          image: 'assets/images/thumbs/product-two-img1.png',
          title: 'Taylor Farms Broccoli Florets Vegetables',
          rating: '4.8',
          ratingCount: '17k',
          seller: 'Lucky Supermarket',
          sold: 18,
          total: 35,
          oldPrice: '28.99',
          newPrice: '14.99',
          badge : "Sold",
          link : "product-details-two.html"
        },
        {
          image: 'assets/images/thumbs/product-two-img1.png',
          title: 'Taylor Farms Broccoli Florets Vegetables',
          rating: '4.8',
          ratingCount: '17k',
          seller: 'Lucky Supermarket',
          sold: 18,
          total: 35,
          oldPrice: '28.99',
          newPrice: '14.99',
          badge : "Sold",
          link : "product-details-two.html"
        },
        {
          image: 'assets/images/thumbs/product-two-img1.png',
          title: 'Taylor Farms Broccoli Florets Vegetables',
          rating: '4.8',
          ratingCount: '17k',
          seller: 'Lucky Supermarket',
          sold: 18,
          total: 35,
          oldPrice: '28.99',
          newPrice: '14.99',
          badge : "Sold",
          link : "product-details-two.html"
        },
        {
            image: 'assets/images/thumbs/product-two-img1.png',
            title: 'Taylor Farms Broccoli Florets Vegetables',
            rating: '4.8',
            ratingCount: '17k',
            seller: 'Lucky Supermarket',
            sold: 18,
            total: 35,
            oldPrice: '28.99',
            newPrice: '14.99',
            badge : "Sold",
            link : "product-details-two.html"
          },
          {
            image: 'assets/images/thumbs/product-two-img1.png',
            title: 'Taylor Farms Broccoli Florets Vegetables',
            rating: '4.8',
            ratingCount: '17k',
            seller: 'Lucky Supermarket',
            sold: 18,
            total: 35,
            oldPrice: '28.99',
            newPrice: '14.99',
            badge : "Sold",
            link : "product-details-two.html"
          },
          {
            image: 'assets/images/thumbs/product-two-img1.png',
            title: 'Taylor Farms Broccoli Florets Vegetables',
            rating: '4.8',
            ratingCount: '17k',
            seller: 'Lucky Supermarket',
            sold: 18,
            total: 35,
            oldPrice: '28.99',
            newPrice: '14.99',
            badge : "Sold",
            link : "product-details-two.html"
          },
      ];
      
      const trendingproducts = [
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/71jffnoticl-sl1500.jpg',
          badge: 'Sale',
          badgeColor: '#9A3B00 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Samsung 23 L Solo Microwave Oven (MS23A3513AK/TL...)',
          productUrl: 'http://127.0.0.1:8000/products/samsung-23-l-solo-microwave-oven-ms23a3513aktl-black-auto-cook-programs-child-safety-lock-memory-feature-deodorization-ceramic-enamel-cavity-with-10-year-warranty',
          storeUrl: 'http://127.0.0.1:8000/stores/sports-nike',
          storeName: 'Sports@Nike',
          progress: 0,
          oldPrice: 'R8,990.00',
          newPrice: 'R8,000.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/51qaswl4jrl-sl1442.jpg',
          badge: 'New',
          badgeColor: '#006554 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Vidiem Vogue 3-Burner Gas Cooktop/Hob...',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'Riviera@Montecasino',
          progress: 0,
          oldPrice: 'R4,300.00',
          newPrice: 'R4,250.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/81c2dwbtmfl-sl1500.jpg',
          badge: 'New',
          badgeColor: '#006554 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Vidiem Mixer Grinder 608 A Tusker...',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'Riviera@Montecasino',
          progress: 0,
          oldPrice: 'R4,999.00',
          newPrice: 'R4,500.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/719yjcos-al-sl1500.jpg',
          badge: 'New',
          badgeColor: '#006554 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'TCL 248 cm (98 inches) 4K Ultra HD Smart QD-Mini LED Google TV...',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'Riviera@Montecasino',
          progress: 0,
          oldPrice: 'R165,000.00',
          newPrice: 'R164,000.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/3792e6d9-e64d-48a4-b16c-304d325ac1e0-cr00800800-pt0-sx220-v1.jpeg',
          badge: 'New',
          badgeColor: '#006554 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'INR 250 Steam Wallet Code (Email Delivery)',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'C-Angelx_cares@JhB',
          progress: 0,
          oldPrice: 'R90.00',
          newPrice: 'R80.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/71md9ggyf6l-sl1500.jpg',
          badge: 'New',
          badgeColor: '#006554 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Xbox Game Pass Ultimate: 1 Month Membership (Digital Code)',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'C-Angelx_cares@JhB',
          progress: 0,
          oldPrice: 'R125.00',
          newPrice: 'R120.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/91o6fcnfxdl-sl1500.jpg',
          badge: 'New',
          badgeColor: '#006554 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Far Cry-3 PC Game DVD For Windows',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'C-Angelx_cares@JhB',
          progress: 0,
          oldPrice: 'R120.00',
          newPrice: 'R100.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/61jaihpn07l-sl1500.jpg',
          badge: 'Hot',
          badgeColor: '#C0392B !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Microsoft Windows 10 Professional',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'C-Angelx_cares@JhB',
          progress: 0,
          oldPrice: 'R300.00',
          newPrice: 'R250.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/81omhffs-hl-sl1500.jpg',
          badge: 'New',
          badgeColor: '#006554 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Samsung 189 cm (75 inches) D Series Crystal 4K Vivid Pro...',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'C-Angelx_cares@JhB',
          progress: 0,
          oldPrice: 'R199,999.00',
          newPrice: 'R195,000.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/71dvqgjx0-l-sl1500.jpg',
          badge: 'Sale',
          badgeColor: '#9A3B00 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Sony Bravia Theatre Quad Premium Soundbar System...',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'C-Angelx_cares@JhB',
          progress: 0,
          oldPrice: 'R100,000.00',
          newPrice: 'R99,500.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/71nfxzyevel-sl1500.jpg',
          badge: 'Sale',
          badgeColor: '#9A3B00 !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Xbox Series S Starter Bundle with 3 Months Game Pass...',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'C-Angelx_cares@JhB',
          progress: 0,
          oldPrice: 'R64,000.00',
          newPrice: 'R53,500.00'
        },
        {
          image: 'https://ecbackend.cazhier.com/storage/products-2/51hl26hub8l-sl1100.jpg',
          badge: 'Hot',
          badgeColor: '#C0392B !important',
          rating: '0.0',
          ratingCount: '0k',
          title: 'Crompton Suezbreeze Personal Air Cooler 30L...',
          productUrl: '#',
          storeUrl: '#',
          storeName: 'C-Angelx_cares@JhB',
          progress: 0,
          oldPrice: 'R3,200.00',
          newPrice: 'R3,100.00'
        }
      ];
      
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


      <Header />
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
                                {products.map((product, index) => (
                                        <Card key={index} {...product} />
                                    ))}
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
                            {products.map((product, index) => (
                                        <Card key={index} {...product} />
                                    ))}
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



                        {trendingproducts.map((item, idx) => (
        <Trendingcard key={idx} {...item} />
      ))}
 
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

    <Footer />
      </main>
    </>
  );
}
