import { Link, useLocation } from 'react-router-dom'

export default function FarmerLayout({ children, active }) {
  const { pathname } = useLocation()

  const item = (to, icon, label, key) => {
    const isActive = active === key || pathname === to
    return (
      <Link to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-label-sm text-label-sm ${
          isActive
            ? 'text-primary font-bold bg-secondary-container scale-95 duration-200'
            : 'text-on-surface-variant hover:bg-surface-container-highest'
        }`}>
        <span className="material-symbols-outlined"
          style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
          {icon}
        </span>
        {label}
      </Link>
    )
  }

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      <nav className="hidden lg:flex flex-col p-stack-md gap-stack-sm bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 h-full w-[280px] z-40">
        <div className="flex items-center gap-3 mb-stack-md">
          <img className="w-10 h-10 rounded-full object-cover border border-outline-variant"
            alt="Farmer"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmAx_sENdfjoiFKypLdZEZC0-gmj3ugQETzYvfDJIgU_aLZWN-gu7Emr57omdOCAp9VaInJAU8HubjK2kJfPS1zauyOu2ZUxqOwAqyS9noYlIbWPLu10whpPV0Hm0b0bN-cUnlpBRBHt1xXc0z8qy8JcKkIZUVQraNsxUEmR0b216E21m4EMmsWnoTH0M13gQp4NhTU-4nkIN2ALBABsU6fMxuo0XBancsEixeyhyNZW9nMeEU8iMo" />
          <div>
            <h2 className="font-headline-md text-headline-md font-bold text-primary leading-tight">Green Valley Farm</h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant">Farmer Admin</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-grow">
          {item('/farmer/dashboard', 'dashboard', 'Dashboard', 'dashboard')}
          {item('/farmer/products', 'agriculture', 'Crops', 'products')}
          {item('/farmer/orders', 'receipt_long', 'Orders', 'orders')}
          {item('/farmer/earnings', 'payments', 'Financials', 'earnings')}
          {item('/farmer/ai', 'auto_awesome', 'AI Insights', 'ai')}
        </div>

        <Link to="/farmer/add-product"
          className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity mb-4 text-center">
          List New Product
        </Link>

        <div className="mt-auto flex flex-col gap-2 border-t border-outline-variant pt-4">
          <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-sm text-label-sm">Settings</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-sm text-label-sm">Support</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 lg:ml-[280px] w-full max-w-[1440px] pb-24 md:pb-8 flex flex-col">
        {children}
      </main>

      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant shadow-lg">
        <Link to="/farmer/dashboard" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-xs">Home</span>
        </Link>
        <Link to="/farmer/products" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
          <span className="material-symbols-outlined">agriculture</span>
          <span className="font-label-xs">Crops</span>
        </Link>
        <Link to="/farmer/orders" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-label-xs">Orders</span>
        </Link>
        <Link to="/farmer/ai" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="font-label-xs">AI</span>
        </Link>
      </nav>
    </div>
  )
}