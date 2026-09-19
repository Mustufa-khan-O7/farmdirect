import { Link, useLocation } from 'react-router-dom'

export default function DeliveryLayout({ children, active }) {
  const { pathname } = useLocation()

  const item = (to, icon, label, key) => {
    const isActive = active === key || pathname === to
    return (
      <Link
        to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-label-sm ${
          isActive
            ? 'text-primary font-bold bg-secondary-container scale-95 duration-200'
            : 'text-on-surface-variant hover:bg-surface-container-highest'
        }`}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
        >
          {icon}
        </span>
        {label}
      </Link>
    )
  }

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      <nav className="hidden lg:flex flex-col p-stack-md gap-stack-sm bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 h-full w-[280px] z-40">
        <div className="mb-stack-md">
          <Link to="/" className="font-headline-md font-bold text-primary block mb-6">
            FarmDirect
          </Link>
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full object-cover shadow-sm"
              alt="Delivery Partner"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj8fcsLpDeWo63CY4AniRN-k-u7f-NJtzSapQ6Jh9x4xsjNrYN5bcNQp_qQV_QjMRNpsdoFNbQKCqHY2MpiL2hwb3BgkaCrsQtw6-fplFwTwe4JBBfi1nUcICQ6AYdF6JeFyMLWBeEeAFldsgSnlfB-9lRcZVksSLT5DcCKeLrxSDQWbUmtfXH5ORq63j4OTNkNgERB2j92ux05dFmgBo0JyVfBokXZiBhJte3dSXRYTyTO6GgBi7d"
            />
            <div>
              <div className="font-label-sm text-on-surface">Mohit Pal</div>
              <div className="font-label-xs text-on-surface-variant">Logistics Partner</div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {item('/delivery/dashboard', 'dashboard', 'Dashboard', 'dashboard')}
          {item('/delivery/dashboard', 'package_2', 'Available Deliveries', 'available')}
          {item('/delivery/dashboard', 'inventory_2', 'My Deliveries', 'mine')}
          {item('/delivery/active', 'local_shipping', 'Active Delivery', 'active')}
          {item('/delivery/active', 'route', 'Route Optimization', 'route')}
        </div>

        <div className="mt-auto flex flex-col gap-2 border-t border-outline-variant pt-4">
          <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg" href="#">
            <span className="material-symbols-outlined">notifications</span>
            <span className="font-label-sm">Notifications</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg" href="#">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-sm">Profile</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 lg:ml-[280px] w-full max-w-[1440px] mx-auto p-container-padding-mobile md:p-container-padding-desktop pb-24 lg:pb-stack-md">
        {children}
      </main>

      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant shadow-lg">
        <Link to="/delivery/dashboard" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-xs">Dashboard</span>
        </Link>
        <Link to="/delivery/active" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
          <span className="material-symbols-outlined">route</span>
          <span className="font-label-xs">Route</span>
        </Link>
        <Link to="/delivery/dashboard" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
          <span className="material-symbols-outlined">monetization_on</span>
          <span className="font-label-xs">Earnings</span>
        </Link>
        <Link to="/delivery/dashboard" className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1">
          <span className="material-symbols-outlined">sync</span>
          <span className="font-label-xs">Sync</span>
        </Link>
      </nav>
    </div>
  )
}