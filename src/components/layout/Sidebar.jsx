import { NavLink } from 'react-router-dom'
import logo from '../../assets/peacock-logo.png'
import '../../styles/layout/Sidebar.css'

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>

        {/* HEADER */}
        <div className="sidebar-header">

          <div className="sidebar-logo">
            <img
              src={logo}
              alt="Peacock Paints"
            />
          </div>

          <button
            className="sidebar-close"
            type="button"
            onClick={onClose}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>

        </div>


        {/* NAVIGATION */}
        <nav className="sidebar-navigation">

          {/* MAIN NAVIGATION */}
          <div className="sidebar-section">

            <div className="sidebar-nav">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
                onClick={onClose}
              >
                Dashboard
              </NavLink>


              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
                onClick={onClose}
              >
                Products
              </NavLink>


              <a
                href="#"
                className="sidebar-link"
                onClick={onClose}
              >
                Find a Coating
              </a>


              <NavLink
                to="/calculator"
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
                onClick={onClose}
              >
                Quick Calculator
              </NavLink>


              <a
                href="#"
                className="sidebar-link"
                onClick={onClose}
              >
                Scratch Coat
              </a>


              <a
                href="#"
                className="sidebar-link"
                onClick={onClose}
              >
                Project Estimator
              </a>

            </div>

          </div>


          {/* DIVIDER */}
          <div className="sidebar-divider" />


          {/* INFORMATION NAVIGATION */}
          <div className="sidebar-section">

            <div className="sidebar-nav">

              <a
                href="#"
                className="sidebar-link"
                onClick={onClose}
              >
                Product Guide
              </a>


              <a
                href="#"
                className="sidebar-link"
                onClick={onClose}
              >
                Application Guide
              </a>


              <a
                href="#"
                className="sidebar-link"
                onClick={onClose}
              >
                Surface Preparation
              </a>

            </div>

          </div>

        </nav>

      </aside>
    </>
  )
}

export default Sidebar