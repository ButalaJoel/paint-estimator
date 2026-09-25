import { useNavigate } from 'react-router-dom'

import { products } from '../../data/products'
import ProductCard from './ProductCard'
import '../../styles/products/Products.css'

function Products() {

  const navigate = useNavigate()

  const handleCalculate = () => {
    navigate('/calculator')
  }

  return (
    <section className="products-page">

      <div className="products-header">

        <div>
          <p className="products-eyebrow">
            PRODUCT RANGE
          </p>

          <h1>
            Products
          </h1>

          <p className="products-description">
            Explore our coating systems and find the right
            solution for your project.
          </p>
        </div>

      </div>


      <div className="products-toolbar">

        <button className="products-filter active">
          All Products
        </button>

        <button className="products-filter">
          Decorative
        </button>

        <button className="products-filter">
          Industrial
        </button>

        <button className="products-filter">
          Wood Care
        </button>

        <button className="products-filter">
          Thinners & Solvents
        </button>

      </div>


      <div className="products-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            onCalculate={handleCalculate}
          />

        ))}

      </div>

    </section>
  )
}

export default Products