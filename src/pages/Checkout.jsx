import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [payment, setPayment] = useState('card')

  // Addresses list
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar',
      tag: 'Home',
      line1: '123, Green Valley Apartments, Near APMC Market',
      city: 'Nashik, Maharashtra - 422003',
      phone: '+91 98765 43210',
    },
  ])
  const [selectedId, setSelectedId] = useState(1)
  const [showNewForm, setShowNewForm] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    line1: '',
    city: '',
    pincode: '',
    tag: 'Home',
  })

  const handleAddAddress = (e) => {
    e.preventDefault()
    if (!form.name || !form.line1 || !form.city) return
    const newAddr = {
      id: Date.now(),
      name: form.name,
      tag: form.tag,
      line1: form.line1,
      city: `${form.city}${form.pincode ? ' - ' + form.pincode : ''}`,
      phone: form.phone || '+91 ',
    }
    setAddresses([...addresses, newAddr])
    setSelectedId(newAddr.id)
    setShowNewForm(false)
    setForm({ name: '', phone: '', line1: '', city: '', pincode: '', tag: 'Home' })
  }

  const delivery = items.length > 0 ? 250 : 0
  const subsidy = items.length > 0 ? 500 : 0
  const total = Math.max(0, subtotal + delivery - subsidy)

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    if (items.length === 0) return

    const order = {
      id: '#FD' + Math.floor(1000 + Math.random() * 9000),
      total,
      items: items.map((it) => ({ name: it.name, qty: it.qty, price: it.price })),
      date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    }
    sessionStorage.setItem('fd_last_order', JSON.stringify(order))
    clearCart()
    navigate('/order/success')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-on-background font-body-md">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block">
            shopping_cart
          </span>
          <h2 className="font-headline-lg text-on-surface mb-4">Your cart is empty</h2>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm hover:bg-surface-tint"
          >
            Go to Marketplace
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <header className="bg-surface border-b border-outline-variant shadow-sm w-full top-0 z-50 flex justify-between items-center px-container-padding-mobile md:px-container-padding-desktop h-16">
        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <Link to="/" className="font-headline-md text-headline-md font-bold text-primary">
            FarmDirect
          </Link>
        </div>
        <div className="font-label-sm text-on-surface-variant">Checkout Securely</div>
      </header>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-container-padding-mobile md:px-container-padding-desktop py-stack-lg">
        <div className="mb-stack-md">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">
            Secure Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-grid">
          <div className="lg:col-span-8 flex flex-col gap-stack-md">
            <section className="bg-surface-container-lowest rounded-xl border border-surface-container shadow-[0px_4px_12px_rgba(45,90,39,0.05)] overflow-hidden">
              <div className="bg-surface-container-low px-stack-md py-4 border-b border-surface-container flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-on-primary font-label-sm">
                    1
                  </span>
                  <h2 className="font-headline-md text-on-surface">Delivery Address</h2>
                </div>
                {!showNewForm && (
                  <button
                    onClick={() => setShowNewForm(true)}
                    className="text-primary font-label-sm hover:underline"
                  >
                    + Add New
                  </button>
                )}
              </div>

              <div className="p-stack-md flex flex-col gap-3">
                {addresses.map((addr) => (
                  <label
                    key={addr.id}
                    className={`border rounded-lg p-4 flex gap-4 items-start cursor-pointer transition-colors ${
                      selectedId === addr.id
                        ? 'border-primary bg-surface-container-lowest'
                        : 'border-outline-variant hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="address"
                      checked={selectedId === addr.id}
                      onChange={() => setSelectedId(addr.id)}
                      className="mt-1 text-primary focus:ring-primary border-outline-variant h-5 w-5"
                    />
                    <div className="flex-grow">
                      <p className="font-label-sm text-on-surface mb-1">
                        {addr.name}{' '}
                        {addr.tag && (
                          <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] ml-2">
                            {addr.tag}
                          </span>
                        )}
                      </p>
                      <p className="font-body-md text-on-surface-variant">{addr.line1}</p>
                      <p className="font-body-md text-on-surface-variant">{addr.city}</p>
                      {addr.phone && (
                        <p className="font-body-md text-on-surface-variant mt-2">
                          Mobile: {addr.phone}
                        </p>
                      )}
                    </div>
                  </label>
                ))}

                {/* New Address Form */}
                {showNewForm && (
                  <form
                    onSubmit={handleAddAddress}
                    className="border-2 border-primary/40 bg-primary-container/5 rounded-lg p-4 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-label-sm font-bold text-primary">New Address</h3>
                      <button
                        type="button"
                        onClick={() => setShowNewForm(false)}
                        className="text-on-surface-variant hover:text-error"
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-label-xs text-on-surface-variant mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Enter full name"
                          className="w-full h-11 border-[1.5px] border-[#E8F5E9] rounded focus:border-primary focus:ring-0 px-3 bg-surface-container-lowest"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-label-xs text-on-surface-variant mb-1">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full h-11 border-[1.5px] border-[#E8F5E9] rounded focus:border-primary focus:ring-0 px-3 bg-surface-container-lowest"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block font-label-xs text-on-surface-variant mb-1">
                          Complete Address *
                        </label>
                        <input
                          type="text"
                          value={form.line1}
                          onChange={(e) => setForm({ ...form, line1: e.target.value })}
                          placeholder="House no, Building, Street, Area"
                          className="w-full h-11 border-[1.5px] border-[#E8F5E9] rounded focus:border-primary focus:ring-0 px-3 bg-surface-container-lowest"
                          required
                        />
                      </div>

                      <div>
                        <label className="block font-label-xs text-on-surface-variant mb-1">
                          City / State *
                        </label>
                        <input
                          type="text"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          placeholder="City, State"
                          className="w-full h-11 border-[1.5px] border-[#E8F5E9] rounded focus:border-primary focus:ring-0 px-3 bg-surface-container-lowest"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-label-xs text-on-surface-variant mb-1">
                          Pincode
                        </label>
                        <input
                          type="text"
                          value={form.pincode}
                          onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                          placeholder="400001"
                          className="w-full h-11 border-[1.5px] border-[#E8F5E9] rounded focus:border-primary focus:ring-0 px-3 bg-surface-container-lowest"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block font-label-xs text-on-surface-variant mb-1">
                          Save as
                        </label>
                        <div className="flex gap-2">
                          {['Home', 'Work', 'Other'].map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => setForm({ ...form, tag })}
                              className={`px-4 py-1.5 rounded-full font-label-xs transition-colors ${
                                form.tag === tag
                                  ? 'bg-primary text-on-primary'
                                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2 justify-end">
                      <button
                        type="button"
                        onClick={() => setShowNewForm(false)}
                        className="px-5 py-2 rounded-lg border border-outline-variant text-on-surface font-label-sm hover:bg-surface-container-low transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-primary text-on-primary font-label-sm hover:bg-surface-tint transition-colors"
                      >
                        Save Address
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </section>

            <section className="bg-surface-container-lowest rounded-xl border border-surface-container shadow-[0px_4px_12px_rgba(45,90,39,0.05)] overflow-hidden">
              <div className="bg-surface-container-low px-stack-md py-4 border-b border-surface-container flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant font-label-sm border border-outline-variant">
                  2
                </span>
                <h2 className="font-headline-md text-on-surface">Payment Method</h2>
              </div>
              <div className="p-stack-md flex flex-col gap-4">
                <label
                  className={`border rounded-lg p-4 cursor-pointer hover:bg-surface-container-low transition-colors flex items-center gap-4 ${
                    payment === 'upi' ? 'border-primary bg-surface-container-lowest' : 'border-outline-variant'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === 'upi'}
                    onChange={() => setPayment('upi')}
                    className="text-primary focus:ring-primary border-outline-variant h-5 w-5"
                  />
                  <span className="font-label-sm text-on-surface flex-grow">
                    UPI (Google Pay, PhonePe, Paytm)
                  </span>
                  <span className="material-symbols-outlined text-primary">qr_code_scanner</span>
                </label>

                <label
                  className={`border rounded-lg p-4 cursor-pointer hover:bg-surface-container-low transition-colors flex items-center gap-4 ${
                    payment === 'netbanking'
                      ? 'border-primary bg-surface-container-lowest'
                      : 'border-outline-variant'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === 'netbanking'}
                    onChange={() => setPayment('netbanking')}
                    className="text-primary focus:ring-primary border-outline-variant h-5 w-5"
                  />
                  <span className="font-label-sm text-on-surface flex-grow">Netbanking</span>
                  <span className="material-symbols-outlined text-primary">account_balance</span>
                </label>

                <label
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    payment === 'card' ? 'border-primary bg-surface-container-lowest' : 'border-outline-variant'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <input
                      type="radio"
                      name="payment"
                      checked={payment === 'card'}
                      onChange={() => setPayment('card')}
                      className="text-primary focus:ring-primary border-outline-variant h-5 w-5"
                    />
                    <span className="font-label-sm text-on-surface flex-grow">
                      Credit / Debit Card
                    </span>
                    <span className="material-symbols-outlined text-primary">credit_card</span>
                  </div>
                  {payment === 'card' && (
                    <div className="ml-9 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block font-label-xs text-on-surface-variant mb-1">
                          Card Number
                        </label>
                        <input
                          className="w-full h-12 border-[1.5px] border-[#E8F5E9] rounded focus:border-primary focus:ring-0 px-3 bg-surface-container-lowest"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                      <div>
                        <label className="block font-label-xs text-on-surface-variant mb-1">
                          Expiry Date
                        </label>
                        <input
                          className="w-full h-12 border-[1.5px] border-[#E8F5E9] rounded focus:border-primary focus:ring-0 px-3 bg-surface-container-lowest"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block font-label-xs text-on-surface-variant mb-1">CVV</label>
                        <input
                          type="password"
                          className="w-full h-12 border-[1.5px] border-[#E8F5E9] rounded focus:border-primary focus:ring-0 px-3 bg-surface-container-lowest"
                          placeholder="•••"
                        />
                      </div>
                    </div>
                  )}
                </label>

                <label
                  className={`border rounded-lg p-4 cursor-pointer hover:bg-surface-container-low transition-colors flex items-center gap-4 ${
                    payment === 'cod' ? 'border-primary bg-surface-container-lowest' : 'border-outline-variant'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === 'cod'}
                    onChange={() => setPayment('cod')}
                    className="text-primary focus:ring-primary border-outline-variant h-5 w-5"
                  />
                  <span className="font-label-sm text-on-surface flex-grow">
                    Cash on Delivery (COD)
                  </span>
                  <span className="material-symbols-outlined text-primary">payments</span>
                </label>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <section className="bg-surface-container-lowest rounded-xl border border-surface-container shadow-[0px_8px_24px_rgba(0,0,0,0.08)] p-stack-md lg:sticky lg:top-24">
              <h2 className="font-headline-md text-on-surface mb-stack-sm border-b border-surface-container pb-4">
                Order Summary
              </h2>

              <div className="flex flex-col gap-4 mb-stack-md border-b border-surface-container pb-4 max-h-[300px] overflow-y-auto">
                {items.map((it) => (
                  <div key={it.name} className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded bg-surface-container flex-shrink-0 overflow-hidden">
                      <img className="w-full h-full object-cover" alt={it.name} src={it.img} />
                    </div>
                    <div className="flex-grow">
                      <p className="font-label-sm text-on-surface">{it.name}</p>
                      <p className="font-label-xs text-on-surface-variant">
                        Qty: {it.qty} {it.unit}
                      </p>
                    </div>
                    <div className="font-label-sm text-on-surface">
                      ₹{(it.price * it.qty).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 mb-stack-md">
                <div className="flex justify-between text-on-surface-variant font-body-md">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-body-md">
                  <span>Delivery Fee</span>
                  <span>₹{delivery}</span>
                </div>
                <div className="flex justify-between text-primary font-body-md">
                  <span>Agricultural Subsidy</span>
                  <span>-₹{subsidy}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-stack-md pt-4 border-t border-surface-container">
                <span className="font-headline-md text-on-surface">Total</span>
                <span className="font-display-lg text-primary">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full h-14 bg-primary text-on-primary rounded-lg font-label-sm hover:bg-surface-tint transition-colors flex justify-center items-center gap-2 mb-4 shadow-[0px_4px_12px_rgba(45,90,39,0.2)]"
              >
                <span className="material-symbols-outlined">lock</span>
                Place Order
              </button>

              <div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-xs">
                <span className="material-symbols-outlined text-[16px]">verified_check</span>
                <span>100% Secure Payments</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}