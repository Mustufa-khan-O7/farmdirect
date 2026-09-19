import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const link = (to, label) => {
    const active = pathname === to
    return (
      <Link
        to={to}
        className={
          active
            ? 'font-body-md text-body-md text-primary border-b-2 border-primary pb-1'
            : 'font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors'
        }
      >
        {label}
      </Link>
    )
  }

  return (
    <nav className="bg-surface border-b border-outline-variant shadow-sm w-full sticky top-0 z-50 flex justify-between items-center px-container-padding-mobile md:px-container-padding-desktop h-16">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-primary">
          FarmDirect
        </Link>
        <div className="hidden lg:flex items-center gap-6 ml-4">
          {link('/', 'Home')}
          {link('/marketplace', 'Marketplace')}
          {link('/how-it-works', 'How It Works')}
          {link('/about', 'About')}
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <Link
          to="/login"
          className="font-label-sm text-label-sm text-primary hover:bg-surface-container-highest px-4 py-2 rounded-lg transition-colors"
        >
          Login
        </Link>
<Link
  to="/login"
  className="font-label-sm text-label-sm bg-primary text-on-primary hover:bg-surface-tint px-4 py-2 rounded-lg transition-colors"
>
  Get Started
</Link>
      </div>

      <button className="lg:hidden text-primary">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  )
}