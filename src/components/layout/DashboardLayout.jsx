import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from './Sidebar'
import Header from './Header'

import '../../styles/layout/DashboardLayout.css'

function DashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="dashboard-layout">

      <Sidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="dashboard-main">

        <Header
          onMenuOpen={() => setMenuOpen(true)}
        />

        <main className="dashboard-content">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout