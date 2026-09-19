import { Link } from 'react-router-dom'
import FarmerLayout from '../components/FarmerLayout'

export default function FarmerDashboard() {
  return (
    <FarmerLayout active="dashboard">
      <header className="flex justify-between items-center w-full px-container-padding-mobile md:px-container-padding-desktop h-16 bg-surface border-b border-outline-variant sticky top-0 z-30 lg:hidden">
        <h1 className="font-headline-md font-bold text-primary">FarmDirect</h1>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
        </div>
      </header>

      <div className="p-container-padding-mobile md:p-container-padding-desktop flex flex-col gap-stack-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display-lg text-display-lg text-on-surface hidden md:block">Welcome back, Ramesh</h1>
            <h1 className="font-headline-lg-mobile text-on-surface md:hidden">Dashboard</h1>
            <p className="font-body-md text-on-surface-variant mt-1">
              Here's what's happening at Green Valley Farm today.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-secondary-fixed px-3 py-1.5 rounded-full border border-[#E8F5E9]">
            <span className="material-symbols-outlined text-primary text-sm icon-fill">verified</span>
            <span className="font-label-sm text-primary">Verified Seller</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter-grid">
          <MetricCard label="Total Sales (Monthly)" icon="monitoring" value="₹24,500" trend="+12% from last month" />
          <MetricCard label="Total Earnings (YTD)" icon="account_balance_wallet" value="₹1,20,000" trend="+5% from last year" />
          <MetricCard label="Active Orders" icon="local_shipping" value="12" trend="3 require attention" warn />
          <MetricCard label="Products Listed" icon="inventory_2" value="8" trend="All active" ok />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter-grid">
          <div className="xl:col-span-2 bg-surface rounded-xl p-stack-md border border-[#E8F5E9] ambient-shadow-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-on-surface">Earnings Growth</h3>
              <select className="bg-surface-container-low border-outline-variant rounded-md py-1 px-3 focus:border-primary focus:ring-primary">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="w-full h-64 bg-surface-container-lowest rounded-lg border border-outline-variant flex items-center justify-center relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full text-primary opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 L0,80 Q25,60 50,70 T100,30 L100,100 Z" fill="currentColor" />
                <path d="M0,80 Q25,60 50,70 T100,30" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-label-sm text-on-surface-variant relative z-10 bg-surface px-2 py-1 rounded opacity-75">
                Interactive Chart Area
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-stack-md">
            <div className="bg-surface rounded-xl p-stack-md ambient-shadow-1 relative overflow-hidden" style={{ borderLeft: '2px solid #F57C00' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#FFF3E0] text-[#F57C00] px-2 py-0.5 rounded-full flex items-center gap-1 font-label-xs">
                  <span className="material-symbols-outlined text-[14px]">auto_awesome</span> AI Forecast
                </span>
              </div>
              <h4 className="font-headline-md text-on-surface mb-2">High Demand Alert</h4>
              <p className="font-body-md text-on-surface-variant mb-4">
                Tomato demand is expected to surge by 15% next week due to local festivals.
              </p>
              <div className="bg-surface-container p-3 rounded-lg flex justify-between items-center border border-outline-variant">
                <span className="font-label-sm text-on-surface">Suggested Listing:</span>
                <span className="font-headline-md text-primary">200 kg</span>
              </div>
              <Link to="/farmer/ai"
                className="mt-4 w-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm py-2 rounded-lg transition-colors border border-outline-variant text-center block">
                Review Pricing Strategy
              </Link>
            </div>

            <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-4xl text-[#F57C00] icon-fill">wb_sunny</span>
                <div>
                  <div className="font-headline-md text-on-surface">28°C</div>
                  <div className="font-label-xs text-on-surface-variant">Sunny, Ideal for harvest</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-xl border border-[#E8F5E9] ambient-shadow-1 overflow-hidden mt-2">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
            <h3 className="font-headline-md text-on-surface">Recent Orders</h3>
            <Link to="/farmer/orders" className="font-label-sm text-primary hover:underline">View All</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant font-label-xs text-on-surface-variant">
                  <th className="p-4 font-medium">Order ID</th>
                  <th className="p-4 font-medium">Product</th>
                  <th className="p-4 font-medium">Quantity</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-on-surface">
                {[
                  { id: '#ORD-092', p: 'Premium Tomatoes', q: '50 kg', a: '₹1,250', s: 'Confirmed', c: 'bg-[#E8F5E9] text-primary' },
                  { id: '#ORD-091', p: 'Organic Onions', q: '100 kg', a: '₹2,800', s: 'Pending', c: 'bg-[#F2F2F2] text-[#333333]' },
                  { id: '#ORD-090', p: 'Green Chilies', q: '20 kg', a: '₹800', s: 'Delivered', c: 'bg-[#E8F5E9] text-primary' },
                ].map((r, i) => (
                  <tr key={i} className="border-b border-outline-variant hover:bg-surface-container-lowest">
                    <td className="p-4 font-mono text-sm">{r.id}</td>
                    <td className="p-4 font-medium">{r.p}</td>
                    <td className="p-4">{r.q}</td>
                    <td className="p-4">{r.a}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-label-xs ${r.c}`}>{r.s}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </FarmerLayout>
  )
}

function MetricCard({ label, icon, value, trend, warn, ok }) {
  return (
    <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 card-hover transition-all">
      <div className="flex justify-between items-start mb-2">
        <span className="font-label-sm text-on-surface-variant">{label}</span>
        <span className="material-symbols-outlined text-on-surface-variant">{icon}</span>
      </div>
      <div className="font-headline-lg text-on-surface">{value}</div>
      <div className={`text-xs font-medium mt-2 flex items-center gap-1 ${warn ? 'text-[#F57C00]' : 'text-[#2d5a27]'}`}>
        <span className="material-symbols-outlined text-sm">
          {warn ? 'pending_actions' : ok ? 'check_circle' : 'trending_up'}
        </span>
        {trend}
      </div>
    </div>
  )
}