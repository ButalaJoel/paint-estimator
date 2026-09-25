import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashboardLayout from './components/layout/DashboardLayout'

import Dashboard from './components/dashboard/Dashboard'
import Products from './components/products/Products'
import Calculator from './components/calculator/Calculator'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<DashboardLayout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/calculator"
            element={<Calculator />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App