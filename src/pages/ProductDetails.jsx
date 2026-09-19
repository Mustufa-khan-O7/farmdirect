import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const DEFAULT_PRODUCT = {
  name: 'Fresh Farm Tomatoes',
  farm: 'Green Valley Farm',
  price: 40,
  unit: 'kg',
  rating: 4.9,
  dist: '2km',
  harvest: '2 days ago',
  method: 'Organic',
  location: 'Nashik, Maharashtra',
  desc: 'Freshly picked vine tomatoes, cultivated with sustainable organic practices to ensure maximum flavor and nutrition.',
  img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=900&auto=format&fit=crop',
}

export default function ProductDetails() {
  const { state } = useLocation()
  const p = state?.product || DEFAULT_PRODUCT

  const { name, farm, price, unit, rating, harvest, method, location, desc, img } = p
  const { addToCart, count } = useCart()

  const handleAddToCart = () => {
    addToCart(p, qty)
  }

  const handleBuyNow = () => {
    addToCart(p, qty)
  }
  const [qty, setQty] = useState(1)

  const dec = () => setQty((q) => Math.max(1, q - 1))
  const inc = () => setQty((q) => q + 1)
  const onChange = (e) => {
    const v = parseInt(e.target.value, 10)
    setQty(isNaN(v) || v < 1 ? 1 : v)
  }

  const total = (price * qty).toLocaleString('en-IN')

  return (
    <div className="min-h-screen flex flex-col font-body-md bg-background text-on-background">
      <nav className="hidden md:flex justify-between items-center w-full px-container-padding-mobile md:px-container-padding-desktop h-16 bg-surface border-b border-outline-variant shadow-sm z-50 sticky top-0">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-headline-md font-bold text-primary">FarmDirect</Link>
          <div className="flex gap-6">
            <Link className="text-primary border-b-2 border-primary pb-1 font-label-sm" to="/marketplace">Marketplace</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-on-surface-variant hover:text-primary relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-error text-on-error rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-label-xs text-[10px] px-1 font-bold">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-container-padding-mobile md:px-container-padding-desktop py-stack-md flex flex-col md:flex-row gap-gutter-grid pt-6 md:pt-stack-md pb-24 md:pb-stack-md">
        <div className="w-full md:w-3/5 flex flex-col gap-stack-sm">
          <div className="w-full h-80 md:h-[500px] rounded-xl overflow-hidden card-shadow border border-[#E8F5E9] bg-surface relative">
            <img alt={name} className="w-full h-full object-cover" src={img} />
            <div className="absolute top-4 left-4 bg-[#F57C00]/10 text-[#F57C00] px-3 py-1.5 rounded-full flex items-center gap-2 font-label-sm backdrop-blur-sm border border-[#F57C00]/20">
              <span className="material-symbols-outlined text-[16px] icon-fill">auto_awesome</span>
              Optimal Harvest Time
            </div>
          </div>
          <div className="grid grid-cols-3 gap-stack-sm h-32 md:h-40">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-outline-variant bg-surface-container-low relative">
                <img alt={`${name} ${i + 1}`} className="w-full h-full object-cover" src={img} />
                {i === 2 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center font-headline-md text-white">+3</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col gap-stack-md">
          <div className="flex flex-col gap-stack-sm pb-stack-sm border-b border-outline-variant">
            <div>
              <h1 className="font-headline-lg text-on-surface mb-2">{name}</h1>
              <div className="flex items-center gap-2">
                <span className="bg-[#E8F5E9] text-primary px-2 py-1 rounded font-label-xs uppercase tracking-wider font-bold">
                  {method || 'Organic'}
                </span>
                <span className="text-on-surface-variant font-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-[#F5B041] icon-fill">star</span> {rating} (128 reviews)
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display-lg text-primary">₹{price}</span>
              <span className="font-body-lg text-on-surface-variant">/ {unit}</span>
            </div>
            <p className="font-body-md text-on-surface-variant">
              {desc || 'Freshly picked, cultivated with sustainable practices to ensure maximum flavor and nutrition.'}
            </p>
          </div>

          <div className="bg-secondary-container/50 border border-secondary-fixed-dim rounded-lg p-4 flex items-start gap-4">
            <div className="bg-surface rounded-full p-2 text-primary shadow-sm">
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <div>
              <h3 className="font-label-sm text-on-surface mb-1 font-bold">Direct from Farmer - No Middlemen</h3>
              <p className="font-label-xs text-on-surface-variant">Your purchase directly supports the grower, ensuring fair prices.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center py-2 border-b border-surface-container-highest">
              <span className="font-label-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span> Harvest Date
              </span>
              <span className="font-body-md text-on-surface font-medium">{harvest || '2 days ago'}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-surface-container-highest">
              <span className="font-label-sm text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">agriculture</span> Farming Method
              </span>
              <span className="font-body-md text-on-surface font-medium">{method || 'Organic'}</span>
            </div>
          </div>

          <div className="bg-surface rounded-xl p-4 card-shadow border border-[#E8F5E9]">
            <div className="flex items-center gap-4">
              <img alt={farm} className="w-16 h-16 rounded-full object-cover border-2 border-secondary-fixed-dim"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDurCrZWW7vB1znh42S4YlPbO6-e9k2yzT8OUSxKUO-248GRp8dWUzu8nTh0hMZ2wMH0kap2ytxyKFXQUEEuHvGTesla25sMiqOgIDR0RzR50G_IwmV7X5HX-pyVMdr7L9vnLznB_n4tytNUo8j29LdSxZJRl9s6m5Cuid1jIk7MdEeMYtjTmytfTgxvO3gw5rnD_6oCpQb4-N29AC9JyeS-rGC8Vz9kKyKDH0hfwlVyUf6q1B8srjJ" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-headline-md text-[18px] text-on-surface">{farm}</h3>
                  <span className="bg-[#E8F5E9] text-primary px-2 py-0.5 rounded-full flex items-center gap-1 font-label-xs text-[10px]">
                    <span className="material-symbols-outlined text-[12px] icon-fill">verified</span> Verified Seller
                  </span>
                </div>
                <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> {location || 'Nashik, Maharashtra'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex items-center gap-4 flex-wrap">
              <label className="font-label-sm text-on-surface-variant">
                Quantity ({unit}):
              </label>
              <div className="flex items-center border-[1.5px] border-[#E8F5E9] rounded-lg overflow-hidden h-12 bg-surface">
                <button
                  type="button"
                  onClick={dec}
                  disabled={qty <= 1}
                  className={`px-4 h-full flex items-center transition-colors ${
                    qty <= 1
                      ? 'text-on-surface-variant opacity-40 cursor-not-allowed'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}>
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <input
                  type="number"
                  value={qty}
                  onChange={onChange}
                  min="1"
                  className="w-16 text-center border-none focus:ring-0 bg-transparent h-full font-label-sm"
                />
                <button
                  type="button"
                  onClick={inc}
                  className="px-4 text-on-surface hover:bg-surface-container h-full flex items-center transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <span className="font-label-sm text-on-surface-variant ml-auto">
                Total: <strong className="text-primary font-bold">₹{total}</strong>
              </span>
            </div>

                   <div className="flex gap-4 w-full">
              <Link
                to="/cart"
                onClick={handleAddToCart}
                className="flex-1 py-3 px-6 rounded-lg border-2 border-primary text-primary font-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">shopping_cart</span> Add to Cart
              </Link>
              <Link
                to="/checkout"
                onClick={handleBuyNow}
                className="flex-1 py-3 px-6 rounded-lg bg-primary text-on-primary font-label-sm hover:bg-surface-tint transition-all shadow-md flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">bolt</span> Buy Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}