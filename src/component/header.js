'use client';
import React, { useEffect, useState } from 'react';

const Header = () => {

  return (
     <>
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
    </>
  );
};

export default Header;
