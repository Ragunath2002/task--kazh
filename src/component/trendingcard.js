import React from 'react';

const Trendingcard = ({
  image,
  badge,
  badgeColor,
  rating,
  ratingCount,
  title,
  productUrl,
  storeUrl,
  storeName,
  progress,
  oldPrice,
  newPrice
}) => {
  return (
    <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
      <div className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
        
        <a
          href={productUrl}
          className="product-card__thumb grid_product flex-center rounded-8 position-relative"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#f0f0f0',
          }}
        >
          <span
            className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </span>
        </a>

        <div className="bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
          <span className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-lg fw-semibold">
            <button type="button" className="tp-product-action-btn-2 mywishlist tp-product-add-to-wishlist-btn">
              <i className="ph-fill ph-heart"></i>
            </button>
          </span>
        </div>

        <div className="product-card__content mt-10">
          <div className="flex-align gap-6">
            <span className="text-xs fw-medium text-gray-500">{rating}</span>
            <span className="text-15 fw-medium text-warning-600 d-flex"><i className="ph-fill ph-star"></i></span>
            <span className="text-xs fw-medium text-gray-500">({ratingCount})</span>
          </div>

          <h6 className="title text-sm fw-normal mt-12 mb-8 ">
            <a href={productUrl} className="link text-line-2">{title}</a>
          </h6>

          <a href={storeUrl}>
            <div className="flex-align gap-4">
              <span className="text-tertiary-600 text-md d-flex"><i className="ph-fill ph-storefront"></i></span>
              <span className="text-gray-500 text-xs">{storeName}</span>
            </div>
          </a>

          <div className="mt-8">
            <div className="progress w-100 bg-color-three rounded-pill h-4" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-tertiary-600 rounded-pill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="product-card__price my-10">
            <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">{oldPrice}</span>
            <span className="text-heading text-md fw-semibold ">{newPrice} <span className="text-gray-500 fw-normal">/Qty</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendingcard;
