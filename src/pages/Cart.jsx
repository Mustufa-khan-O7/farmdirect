import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeFromCart, updateQty, subtotal } = useCart()

  const delivery = items.length > 0 ? 30 : 0
  const discount = items.length > 0 ? 50 : 0
  const total = Math.max(0, subtotal + delivery - discount)

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col">
      <header className="bg-surface border-b border-outline-variant shadow-sm w-full top-0 px-container-padding-mobile md:px-container-padding-desktop h-16 flex justify-between items-center z-50 sticky">
        <div className="flex items-center gap-4">
          <Link to="/marketplace" className="text-primary hover:text-surface-tint">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <Link to="/" className="font-headline-md font-bold text-primary">FarmDirect</Link>
        </div>
        <div className="font-headline-md text-primary font-bold">Shopping Cart</div>
      </header>

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-container-padding-mobile md:px-container-padding-desktop py-stack-md flex flex-col lg:flex-row gap-gutter-grid">
        <section className="flex-1 flex flex-col gap-stack-sm">
          {items.length === 0 ? (
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-12 text-center">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block">
                shopping_cart
              </span>
              <h3 className="font-headline-md text-on-surface mb-2">Your cart is empty</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Add some fresh produce to get started.
              </p>
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-label-sm hover:bg-surface-tint transition-colors"
              >
                Browse Marketplace
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          ) : (
            items.map((it) => (
              <div
                key={it.name}
                className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 card-shadow card-hover flex items-center gap-4"
              >
                <img
                  alt={it.name}
                  className="w-24 h-24 object-cover rounded-md bg-surface-variant shrink-0"
                  src={it.img}
                />
                <div className="flex-grow flex flex-col gap-1">
                  <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                    {it.name}
                  </h3>
                  <p className="font-label-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">agriculture</span>
                    {it.farm}
                  </p>
                  <div className="text-primary font-bold mt-2">
                    ₹{it.price} / {it.unit}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                  <button
                    onClick={() => removeFromCart(it.name)}
                    className="text-error hover:text-on-error-container p-2 rounded-full hover:bg-error-container transition-colors"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                  <div className="flex items-center border border-outline-variant rounded-full bg-surface-container-lowest">
                    <button
                      onClick={() => updateQty(it.name, it.qty - 1)}
                      disabled={it.qty <= 1}
                      className={`w-8 h-8 flex items-center justify-center rounded-l-full transition-colors ${
                        it.qty <= 1
                          ? 'opacity-40 cursor-not-allowed'
                          : 'hover:bg-surface-container'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="w-8 text-center font-label-sm">{it.qty}</span>
                    <button
                      onClick={() => updateQty(it.name, it.qty + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-r-full hover:bg-surface-container transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

        <aside className="w-full lg:w-[380px] shrink-0">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 card-shadow lg:sticky lg:top-24 flex flex-col gap-6">
            <h2 className="font-headline-md font-bold text-on-surface border-b border-outline-variant pb-4">
              Order Summary
            </h2>
            <div className="flex flex-col gap-4 font-body-md">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Subtotal ({items.length} item{items.length !== 1 ? 's' : ''})</span>
                <span className="font-semibold text-on-surface">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>Delivery Fee</span>
                <span className="font-semibold text-on-surface">₹{delivery}</span>
              </div>
              <div className="flex justify-between items-center text-primary">
                <span>Discount (Promo)</span>
                <span className="font-semibold">-₹{discount}</span>
              </div>
            </div>
            <div className="border-t border-outline-variant pt-4 flex justify-between items-center">
              <span className="font-headline-md font-bold">Total</span>
              <span className="font-headline-md font-bold text-primary">
                ₹{total.toLocaleString('en-IN')}
              </span>
            </div>
            <Link
              to="/checkout"
              className={`w-full py-4 rounded-full font-label-sm shadow-md flex justify-center items-center gap-2 transition-colors ${
                items.length === 0
                  ? 'bg-surface-container text-on-surface-variant cursor-not-allowed pointer-events-none'
                  : 'bg-primary text-on-primary hover:bg-surface-tint'
              }`}
            >
              Proceed to Checkout
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-xs mt-2">
              <span className="material-symbols-outlined text-base text-primary">
                verified_user
              </span>
              Secure Checkout Guarantee
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}