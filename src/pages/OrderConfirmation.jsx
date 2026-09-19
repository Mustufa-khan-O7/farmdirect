import { Link } from 'react-router-dom'

export default function OrderConfirmation() {
  let order = null
  try {
    order = JSON.parse(sessionStorage.getItem('fd_last_order') || 'null')
  } catch {
    order = null
  }

  const orderId = order?.id || '#FD9081'
  const total = order?.total || 450

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <nav className="bg-surface border-b border-outline-variant shadow-sm w-full top-0 z-50 h-16 px-container-padding-mobile md:px-container-padding-desktop flex items-center justify-center">
        <Link to="/" className="font-headline-md font-bold text-primary">FarmDirect</Link>
      </nav>

      <main className="flex-grow flex items-center justify-center p-container-padding-mobile md:p-container-padding-desktop">
        <div className="max-w-lg w-full bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0px_4px_12px_rgba(45,90,39,0.05)] p-stack-md flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center mb-stack-md">
            <span className="material-symbols-outlined text-primary icon-fill" style={{ fontSize: 48 }}>
              check_circle
            </span>
          </div>

          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-base">
            Order Placed Successfully!
          </h1>
          <p className="font-body-md text-on-surface-variant mb-stack-md">
            Thank you for supporting local growers.
          </p>

          <div className="w-full bg-surface-container-low rounded-lg p-stack-sm mb-stack-md text-left">
            <div className="flex justify-between items-center mb-stack-sm border-b border-outline-variant pb-base">
              <span className="font-label-sm text-on-surface-variant">Order ID</span>
              <span className="font-label-sm text-on-surface font-bold">{orderId}</span>
            </div>
            <div className="flex items-center gap-stack-sm mb-base">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden flex-shrink-0">
                <img
                  alt="Farmer"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1nr1hm3EyVDMI20CmHp0pL7qf4PligQUH_eQoHHrbN6y95Y43rFuc5RkQxcPo9RHAPgTha_wn51jOW9KfChVfgqp_Vg_MH1EtE2afDb1YvdzFGLgzYYK8dX37VRy7EUZizzMF7ueefqGoNxEQgtGXmHeSiCIbuqEl314Bwr5O0zquYPfXZNsVv2bW_Jf71qHoA-4kecV_X6V9e5yGY6gABOMb6YkFZXPWQZrmR_uC1wSibUem48e8"
                />
              </div>
              <div>
                <p className="font-label-sm text-on-surface">Ramesh Singh</p>
                <p className="font-label-xs text-on-surface-variant">Verified Farmer</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-stack-sm pt-base">
              <div>
                <p className="font-label-xs text-on-surface-variant mb-1">Total Amount</p>
                <p className="font-body-lg font-bold text-on-surface">
                  ₹{total.toLocaleString('en-IN')}
                </p>
              </div>
              <div>
                <p className="font-label-xs text-on-surface-variant mb-1">Est. Delivery</p>
                <p className="font-label-sm text-primary font-bold">Today, 6 PM</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row gap-stack-sm">
            <Link
              to="/order/track"
              className="flex-1 bg-primary text-on-primary font-label-sm py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">local_shipping</span>
              Track Order
            </Link>
            <Link
              to="/marketplace"
              className="flex-1 bg-surface-container-highest text-on-surface font-label-sm py-3 px-6 rounded-lg hover:bg-surface-variant transition-colors border border-outline-variant"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}