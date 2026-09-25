function ProductCard({ product, onCalculate }) {
  return (
    <article className="product-card">

      <div className="product-card-image">

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <span>Product</span>
        )}

      </div>


      <div className="product-card-content">

        <p className="product-card-category">
          {product.category}
        </p>

        <h2>
          {product.name}
        </h2>


        <div className="product-card-specs">

          <div className="product-card-detail">

            <span>
              Coverage
            </span>

            <strong>
              {product.coverage}
            </strong>

          </div>


          <div className="product-card-detail">

            <span>
              {product.packaging?.label}
            </span>

            <strong>
              {product.packaging?.description}
            </strong>

          </div>

        </div>


        <div className="product-card-footer">

          <strong className="product-card-price">
            UGX {product.price.toLocaleString()}
          </strong>

          {product.calculator && (
            <button
              type="button"
              onClick={() => onCalculate(product)}
            >
              Calculate →
            </button>
          )}

        </div>

      </div>

    </article>
  )
}

export default ProductCard