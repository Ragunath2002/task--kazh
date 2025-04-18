import Head from 'next/head';
import '../styles/bootstrap.min.css';
import '../styles/select2.min.css';
import '../styles/slick.css';
import '../styles/jquery-ui.css';
import '../styles/animate.css';
import '../styles/aos.css';
import '../styles/main.css';
import './globals.css';
import Script from "next/script";

export const metadata = {
  title: 'C-AngelX',
  description: 'Discover premium products and deals on C-AngelX.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>C-AngelX</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ecbackend.cazhier.com" />
        <meta name="robots" content="index, follow" />

 
        <meta property="og:site_name" content="C-AngelX" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Shop Now on C-AngelX" />
        <meta property="og:description" content="Discover premium products and deals on C-AngelX." />
        <meta property="og:url" content="https://ecbackend.cazhier.com" />
        <meta property="og:image" content="https://ecbackend.cazhier.com/path-to-social-image.jpg" />


        <meta name="twitter:title" content="Shop Now on C-AngelX" />
        <meta name="twitter:description" content="Discover premium products and deals on C-AngelX." />
        <meta name="twitter:image" content="https://ecbackend.cazhier.com/path-to-social-image.jpg" />

       
        <link rel="shortcut icon" type="image/x-icon" href="https://ecbackend.cazhier.com/storage/logo/cangelx-favicon.png" />



      </Head>
      <body>{children}
      {/* <!-- Jquery js --> */}
      <Script src="assets/js/jquery-3.7.1.min.js"></Script>
      {/* <!-- Bootstrap Bundle Js --> */}
      <Script src="assets/js/boostrap.bundle.min.js"></Script>
      {/* <!-- Bootstrap Bundle Js --> */}
      <Script src="assets/js/phosphor-icon.js"></Script>
      {/* <!-- Select 2 --> */}
      <Script src="assets/js/select2.min.js"></Script>
      {/* <!-- Slick js --> */}
      <Script src="assets/js/slick.min.js"></Script>
      {/* <!-- Slick js --> */}
      <Script src="assets/js/count-down.js"></Script>
      {/* <!-- jquery UI js --> */}
      <Script src="assets/js/jquery-ui.js"></Script>
      {/* <!-- wow js --> */}
      <Script src="assets/js/wow.min.js"></Script>
      {/* <!-- AOS Animation --> */}
      <Script src="assets/js/aos.js"></Script>
      {/* <!-- marque --> */}
      <Script src="assets/js/marque.min.js"></Script>
      {/* <!-- marque --> */}
      <Script src="assets/js/vanilla-tilt.min.js"></Script>
      {/* <!-- Counter --> */}
      <Script src="assets/js/counter.min.js"></Script>
      {/* <!-- main js --> */}
      <Script src="assets/js/main.js"></Script>

      <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
      </body>
    </html>
  );
}
