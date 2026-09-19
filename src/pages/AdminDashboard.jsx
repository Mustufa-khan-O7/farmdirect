import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex">
      <aside className="hidden lg:flex flex-col p-stack-md gap-stack-sm bg-surface-container-low border-r border-outline-variant fixed left-0 top-0 h-full w-[280px]">
        <h1 className="font-headline-md font-bold text-primary">FarmDirect</h1>
        <div className="mt-stack-sm flex items-center gap-3 mb-stack-md">
          <img
            className="w-10 h-10 rounded-full object-cover"
            alt="Admin"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuJx-SLGmY3UeGaE-TN_UPF3ScUiT7U5BFfWqqnrqEf84tnWSCxZDB9Hbpp7oNgSlZfVUPYn-ZY5vifrkE9PhtdHPCFRMHcbmc97a4FXbcI2-xI5Y5HOuH78pY_V23gO-z5h6HnkDH5cbjPmUjzQ8TIPm5C0VretAaBBMLIWuLtjRg75wHVS1RSsMVpUVEzBISrOP1a9-BwCKcbLNRzxjLqvihVF3iouu4c-4F-A8pCDSEcYURRoug"
          />
          <div>
            <div className="font-bold font-label-sm">Farm Admin</div>
            <div className="text-on-surface-variant font-label-xs">Super Admin</div>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          <NavItem to="/admin" icon="dashboard" label="Overview" active />
          <NavItem to="/farmer/products" icon="agriculture" label="Farmers" />
          <NavItem to="/marketplace" icon="group" label="Consumers" />
          <NavItem to="/delivery/dashboard" icon="local_shipping" label="Delivery Partners" />
          <NavItem to="/farmer/orders" icon="receipt_long" label="Orders" />
          <NavItem to="/admin" icon="analytics" label="Analytics" />
          <NavItem to="/farmer/ai" icon="auto_awesome" label="AI Insights" />
        </nav>
      </aside>

      <main className="flex-1 lg:ml-[280px] p-container-padding-mobile md:p-container-padding-desktop max-w-[1440px] mx-auto">
        <header className="flex justify-between items-center mb-stack-lg">
          <div>
            <h2 className="font-headline-lg text-primary">Platform Overview</h2>
            <p className="text-on-surface-variant font-body-md">
              High-level insights and platform health metrics.
            </p>
          </div>
          <span className="material-symbols-outlined text-primary text-[28px] cursor-pointer">
            notifications
          </span>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter-grid mb-stack-lg">
          <KpiCard icon="agriculture" label="Total Farmers" value="5K" trend="+12% this month" />
          <KpiCard icon="group" label="Total Consumers" value="50K" trend="+8% this month" />
          <KpiCard icon="payments" label="Market GMV" value="₹1.2Cr" trend="+22% this month" />
        </section>

        <section className="mb-stack-lg">
          <div
            className="bg-surface rounded-xl p-6 border border-[#E8F5E9] card-shadow flex flex-col md:flex-row items-center gap-stack-md"
            style={{ borderLeft: '3px solid #F57C00' }}
          >
            <div className="flex-shrink-0 bg-[#F57C00]/10 p-3 rounded-full text-[#F57C00]">
              <span className="material-symbols-outlined text-[32px]">auto_awesome</span>
            </div>
            <div className="flex-1">
              <h3 className="font-headline-md text-primary mb-1">AI Platform Health</h3>
              <p className="font-body-md text-on-surface-variant">
                "Demand-supply gap narrowing due to AI forecasting accuracy (94%)."
              </p>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-display-lg text-[#F57C00]">94%</span>
              <span className="font-label-xs text-on-surface-variant uppercase tracking-wide">
                Accuracy
              </span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter-grid">
          <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] card-shadow flex flex-col min-h-[300px]">
            <div className="flex justify-between items-center mb-stack-sm">
              <h3 className="font-headline-md text-primary">User Segments Growth</h3>
              <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
            </div>
            <div className="flex-1 bg-surface-container-low rounded-lg flex items-center justify-center relative overflow-hidden">
              <svg className="w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 100 100">
                <polyline points="0,80 25,60 50,50 75,30 100,20" fill="none" stroke="#2d5a27" strokeWidth="1.5" />
                <polyline points="0,90 25,80 50,70 75,60 100,50" fill="none" stroke="#a1d494" strokeWidth="1.5" />
              </svg>
              <span className="absolute font-label-sm text-on-surface-variant">Growth Chart</span>
            </div>
          </div>

          <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] card-shadow flex flex-col min-h-[300px]">
            <div className="flex justify-between items-center mb-stack-sm">
              <h3 className="font-headline-md text-primary">Successful Deliveries</h3>
              <span className="bg-secondary-container text-primary font-label-xs px-2 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check_circle</span> Verified
              </span>
            </div>
            <div className="flex-1 bg-surface-container-low rounded-lg flex items-end justify-between px-4 pt-4 gap-2">
              {[40, 60, 75, 95].map((h, i) => (
                <div
                  key={i}
                  className={`w-1/5 rounded-t-sm ${i === 3 ? 'bg-primary' : 'bg-primary-fixed-dim/60'}`}
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function NavItem({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-label-sm ${
        active
          ? 'text-primary font-bold bg-secondary-container scale-95 duration-200'
          : 'text-on-surface-variant hover:bg-surface-container-highest'
      }`}
    >
      <span className="material-symbols-outlined" style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>
        {icon}
      </span>
      {label}
    </Link>
  )
}

function KpiCard({ icon, label, value, trend }) {
  return (
    <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] card-shadow card-hover transition-all">
      <div className="flex items-center gap-base text-on-surface-variant mb-2">
        <span className="material-symbols-outlined text-secondary">{icon}</span>
        <h3 className="font-label-sm">{label}</h3>
      </div>
      <div className="font-display-lg text-primary">{value}</div>
      <div className="text-on-primary-container font-label-xs mt-1 flex items-center gap-1">
        <span className="material-symbols-outlined text-[16px]">trending_up</span>
        {trend}
      </div>
    </div>
  )
}