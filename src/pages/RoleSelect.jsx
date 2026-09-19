import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function RoleSelect() {
  const roles = [
    { to: '/register/farmer', icon: 'agriculture', bg: 'bg-primary-container/10', fg: 'text-primary', title: 'Farmer', desc: 'Sell your produce directly and earn better prices.', primary: true },
    { to: '/register/consumer', icon: 'shopping_cart', bg: 'bg-secondary-container/30', fg: 'text-secondary', title: 'Consumer', desc: 'Buy fresh produce directly from verified farmers.', primary: false },
    { to: '/register/delivery', icon: 'local_shipping', bg: 'bg-tertiary-container/10', fg: 'text-tertiary', title: 'Delivery Partner', desc: 'Deliver orders and earn through flexible deliveries.', primary: false },
  ]

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <main className="flex-grow flex items-center justify-center py-stack-lg px-container-padding-mobile md:px-container-padding-desktop">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="text-center mb-stack-lg">
            <span className="font-headline-md font-bold text-primary mb-4 block">FarmDirect</span>
            <h1 className="font-display-lg text-display-lg mb-4">How will you use FarmDirect?</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Select the role that best describes you to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-grid">
            {roles.map((r, i) => (
              <div key={i} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between h-full card-hover">
                <div>
                  <div className={`w-16 h-16 rounded-full ${r.bg} flex items-center justify-center mb-6`}>
                    <span className={`material-symbols-outlined ${r.fg} text-4xl icon-fill`}>{r.icon}</span>
                  </div>
                  <h2 className="font-headline-md mb-2">{r.title}</h2>
                  <p className="font-body-md text-on-surface-variant mb-stack-md">{r.desc}</p>
                </div>
                <Link to={r.to}
                  className={`w-full py-3 px-6 rounded-full font-label-sm flex items-center justify-center gap-2 transition ${
                    r.primary
                      ? 'bg-primary text-on-primary hover:opacity-90'
                      : 'bg-surface-container-highest text-on-surface hover:bg-surface-variant'
                  }`}>
                  Continue <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}