import { useState } from 'react'
import { products } from '../../data/products'
import {
  calculateEstimate,
  calculateScratchCoat,
} from '../../utils/calculations'

import '../../styles/calculator/Calculator.css'

function Calculator({ product = products[0] }) {

  const [area, setArea] = useState('')
  const [includeScratchCoat, setIncludeScratchCoat] = useState(false)
  const [estimate, setEstimate] = useState(null)

  const handleCalculate = () => {
    const numericArea = Number(area)

    if (!numericArea || numericArea <= 0) {
      return
    }

    const coatingEstimate = calculateEstimate(
      product,
      numericArea
    )

    const scratchEstimate = includeScratchCoat
      ? calculateScratchCoat(product, numericArea)
      : null

    setEstimate({
      coating: coatingEstimate,
      scratchCoat: scratchEstimate,
    })
  }


  return (
    <section className="calculator-page">

      <div className="calculator-header">

        <p className="calculator-eyebrow">
          QUICK CALCULATOR
        </p>

        <h1>
          Calculate your materials
        </h1>

        <p className="calculator-description">
          Estimate the materials required for your
          selected coating system.
        </p>

      </div>


      <div className="calculator-layout">

        <div className="calculator-form">

          <div className="calculator-product">

            <p className="calculator-label">
              SELECTED PRODUCT
            </p>

            <h2>
              {product.name}
            </h2>

            <p>
              {product.category}
            </p>

          </div>


          <div className="calculator-field">

            <label htmlFor="area">
              Surface area
            </label>

            <div className="calculator-input-wrapper">

              <input
                id="area"
                type="number"
                min="0"
                step="0.1"
                value={area}
                onChange={(event) =>
                  setArea(event.target.value)
                }
                placeholder="Enter area"
              />

              <span>
                m²
              </span>

            </div>

          </div>


          <div className="calculator-help">

            <span>
              Don't know your area?
            </span>

            <button type="button">
              Calculate area
            </button>

          </div>


          {product.scratchCoat?.available && (

            <label className="calculator-option">

              <input
                type="checkbox"
                checked={includeScratchCoat}
                onChange={(event) =>
                  setIncludeScratchCoat(
                    event.target.checked
                  )
                }
              />

              <span>
                Include Scratch Coat
              </span>

            </label>

          )}


          <button
            type="button"
            className="calculator-button"
            onClick={handleCalculate}
          >
            Calculate estimate →
          </button>

        </div>


        <div className="calculator-result">

          {!estimate ? (

            <div className="calculator-empty">

              <span className="calculator-empty-icon">
                +
              </span>

              <h2>
                Your estimate
              </h2>

              <p>
                Enter your surface area to calculate
                the materials required.
              </p>

            </div>

          ) : (

            <div>

              <p className="calculator-label">
                ESTIMATE
              </p>

              <h2>
                {estimate.coating.kits} Kits
              </h2>

              <p className="calculator-area">
                For {estimate.coating.area} m²
              </p>


              <div className="calculator-result-divider" />


              <div className="calculator-result-row">

                <span>
                  Base
                </span>

                <strong>
                  {estimate.coating.base} L
                </strong>

              </div>


              <div className="calculator-result-row">

                <span>
                  Hardener
                </span>

                <strong>
                  {estimate.coating.hardener} L
                </strong>

              </div>


              <div className="calculator-result-divider" />


              <div className="calculator-total">

                <span>
                  Estimated material cost
                </span>

                <strong>
                  UGX{' '}
                  {estimate.coating.materialCost.toLocaleString()}
                </strong>

              </div>


              {estimate.scratchCoat && (

                <div className="calculator-scratch">

                  <p className="calculator-label">
                    SCRATCH COAT
                  </p>

                  <strong>
                    {estimate.scratchCoat.kits} kit
                    {estimate.scratchCoat.kits > 1
                      ? 's'
                      : ''}
                  </strong>

                  <p>
                    {estimate.scratchCoat.base} L Base
                    {' + '}
                    {estimate.scratchCoat.hardener} L Hardener
                    {' + '}
                    {estimate.scratchCoat.sand} kg Sand
                  </p>

                  <small>
                    Designed for approximately{' '}
                    {estimate.scratchCoat.thickness}
                    {' '}thickness.
                  </small>

                </div>

              )}

            </div>

          )}

        </div>

      </div>


      <p className="calculator-disclaimer">
        Prices are estimates and are subject to change.
        Confirm current pricing before purchase.
      </p>

    </section>
  )
}

export default Calculator