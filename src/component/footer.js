'use client';
import React, { useEffect, useState } from 'react';

const Footer = () => {

  return (
     <div>
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
            <div className="" style={{padding: "0px 20px"}}>
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
    </div>
  );
};

export default Footer;
