import '../../styles/layout/Header.css'

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16 16L21 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Header({ onMenuOpen }) {
  return (
    <header className="app-header">

      <button
        className="mobile-menu-button"
        type="button"
        onClick={onMenuOpen}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      <div className="header-search">
        <SearchIcon />

        <input
          type="search"
          placeholder="Search products, coatings..."
          aria-label="Search products and coatings"
        />
      </div>

    </header>
  )
}

export default Header