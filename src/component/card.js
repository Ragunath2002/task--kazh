import React from 'react';

const Card = ({
  image,
  title,
  rating,
  ratingCount,
  seller,
  sold,
  total,
  oldPrice,
  newPrice,
  badge,
  link
}) => {
  const progress = (sold / total) * 100;

  return (
    <div className="grid_blade grid_product product-card h-100 p-10 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
      <a href={link} className="product-card__thumb grid_product flex-center rounded-8 position-relative">
        {badge && (
          <span className="product-card__badge bg-main-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
            {badge}
          </span>
        )}
        <img src={image} alt={title} className="w-auto max-w-unset" />
      </a>
      <div className="product-card__content mt-16">
        <div className="flex-align gap-6">
          <span className="text-xs fw-medium text-gray-500">{rating}</span>
          <span className="text-15 fw-medium text-warning-600 d-flex">
            <i className="ph-fill ph-star"></i>
          </span>
          <span className="text-xs fw-medium text-gray-500">({ratingCount})</span>
        </div>
        <h6 className="title text-sm fw-normal mt-12 mb-8">
          <a href={link} className="link text-line-2" tabIndex="0">
            {title}
          </a>
        </h6>
        <div className="flex-align gap-4">
          <span className="text-tertiary-600 text-md d-flex">
            <i className="ph-fill ph-storefront"></i>
          </span>
          <span className="text-gray-500 text-xs">By {seller}</span>
        </div>
        <div className="mt-8">
          <div
            className="progress w-100 bg-color-three rounded-pill h-4"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <span className="text-gray-900 text-xs fw-medium mt-8">
            Sold: {sold}/{total}
          </span>
        </div>
        <div className="product-card__price my-10">
          <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
            ${oldPrice}
          </span>
          <span className="text-heading text-md fw-semibold">
            ${newPrice} <span className="text-gray-500 fw-normal">/Qty</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
