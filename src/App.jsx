import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import RoleSelect from './pages/RoleSelect'
import RegisterFarmer from './pages/RegisterFarmer'
import RegisterConsumer from './pages/RegisterConsumer'
import RegisterDelivery from './pages/RegisterDelivery'
import FarmerDashboard from './pages/FarmerDashboard'
import FarmerAddProduct from './pages/FarmerAddProduct'
import FarmerProducts from './pages/FarmerProducts'
import FarmerOrders from './pages/FarmerOrders'
import FarmerEarnings from './pages/FarmerEarnings'
import FarmerAI from './pages/FarmerAI'
import Marketplace from './pages/Marketplace'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import OrderTracking from './pages/OrderTracking'
import DeliveryDashboard from './pages/DeliveryDashboard'
import DeliveryActive from './pages/DeliveryActive'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/role-select" element={<RoleSelect />} />
      <Route path="/register/farmer" element={<RegisterFarmer />} />
      <Route path="/register/consumer" element={<RegisterConsumer />} />
      <Route path="/register/delivery" element={<RegisterDelivery />} />
      <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
      <Route path="/farmer/add-product" element={<FarmerAddProduct />} />
      <Route path="/farmer/products" element={<FarmerProducts />} />
      <Route path="/farmer/orders" element={<FarmerOrders />} />
      <Route path="/farmer/earnings" element={<FarmerEarnings />} />
      <Route path="/farmer/ai" element={<FarmerAI />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/marketplace/search" element={<Marketplace />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order/success" element={<OrderConfirmation />} />
      <Route path="/order/track" element={<OrderTracking />} />
      <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />
      <Route path="/delivery/active" element={<DeliveryActive />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}