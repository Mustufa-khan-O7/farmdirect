import FarmerLayout from '../components/FarmerLayout'

const months = [
  { m: 'Jan', a: 40, b: 55 },
  { m: 'Feb', a: 45, b: 60 },
  { m: 'Mar', a: 50, b: 75 },
  { m: 'Apr', a: 48, b: 80 },
  { m: 'May', a: 55, b: 90 },
  { m: 'Jun', a: 60, b: 100 },
]

const transactions = [
  { id: '#ORD-9021', date: 'Oct 24, 2024', client: 'Fresh Market Co.', amount: '₹1,240.00', status: 'Verified', color: 'text-primary bg-secondary-container', icon: 'check_circle' },
  { id: '#ORD-9020', date: 'Oct 22, 2024', client: 'Local Co-op', amount: '₹850.50', status: 'Pending', color: 'text-[#333333] bg-[#F2F2F2]', icon: 'schedule' },
  { id: '#ORD-9019', date: 'Oct 21, 2024', client: 'Sunrise Grocers', amount: '₹3,100.00', status: 'Verified', color: 'text-primary bg-secondary-container', icon: 'check_circle' },
  { id: '#ORD-9018', date: 'Oct 19, 2024', client: 'City Restaurants Group', amount: '₹4,500.00', status: 'Alert', color: 'text-white bg-error', icon: 'error' },
]

export default function FarmerEarnings() {
  return (
    <FarmerLayout active="earnings">
      <main className="flex-1 p-container-padding-mobile md:p-container-padding-desktop max-w-[1440px] mx-auto w-full">
        <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-stack-sm">
          <div>
            <h2 className="font-headline-lg text-on-surface mb-2">Financial Dashboard</h2>
            <p className="font-body-md text-on-surface-variant">Overview of your earnings and transaction history.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-surface border-[1.5px] border-outline-variant rounded-lg font-label-sm text-on-surface flex items-center gap-2 hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span> This Year
            </button>
            <button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm">
              <span className="material-symbols-outlined text-[18px]">download</span> Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid">
          <div className="col-span-1 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-grid">
            <MetricCard icon="account_balance_wallet" label="Total Earnings" value="₹124,500" badge="+12%" bg="bg-secondary-container text-primary" />
            <MetricCard icon="calendar_month" label="This Month" value="₹18,250" bg="bg-surface-container-high text-on-surface-variant" />
            <MetricCard icon="schedule" label="Pending Payments" value="₹4,120" badge="3 Pending" badgeBg="bg-[#F2F2F2] text-[#333333]" bg="bg-surface-variant text-[#333333]" />
            <MetricCard icon="check_circle" label="Completed Orders" value="342" bg="bg-secondary-container text-primary" />
          </div>

          <div className="col-span-1 md:col-span-8 flex flex-col gap-gutter-grid">
            <div className="bg-surface rounded-xl p-4 md:p-6 border border-[#E8F5E9] ambient-shadow-1">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-on-surface">Monthly Revenue</h3>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 font-label-xs text-on-surface-variant">
                    <div className="w-3 h-3 bg-primary rounded-sm"></div> Direct Selling
                  </span>
                  <span className="flex items-center gap-1 font-label-xs text-on-surface-variant">
                    <div className="w-3 h-3 bg-secondary-fixed-dim rounded-sm"></div> Traditional
                  </span>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-2 md:gap-4 pt-4 border-b border-outline-variant pb-2 px-2">
                {months.map((d, i) => (
                  <div key={i} className="flex flex-col justify-end w-full gap-1 h-full">
                    <div className="flex items-end justify-center w-full gap-1 h-full">
                      <div className="w-full bg-secondary-fixed-dim rounded-t-sm transition-all hover:opacity-80" style={{ height: `${d.a}%` }}></div>
                      <div className="w-full bg-primary rounded-t-sm transition-all hover:opacity-80" style={{ height: `${d.b}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between px-2 pt-2 font-label-xs text-on-surface-variant">
                {months.map((d, i) => <span key={i}>{d.m}</span>)}
              </div>
            </div>

            <div className="bg-surface rounded-xl border border-[#E8F5E9] ambient-shadow-1 overflow-hidden">
              <div className="p-4 md:p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
                <h3 className="font-headline-md text-on-surface">Recent Transactions</h3>
                <a className="font-label-sm text-primary hover:underline" href="#">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-low border-b border-outline-variant">
                    <tr className="font-label-sm text-on-surface-variant">
                      <th className="p-4 font-semibold">Order ID</th>
                      <th className="p-4 font-semibold">Date</th>
                      <th className="p-4 font-semibold">Client</th>
                      <th className="p-4 font-semibold">Amount</th>
                      <th className="p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/50">
                    {transactions.map((t, i) => (
                      <tr key={i} className="hover:bg-surface-container-lowest transition-colors">
                        <td className="p-4 font-medium">{t.id}</td>
                        <td className="p-4 text-on-surface-variant">{t.date}</td>
                        <td className="p-4">{t.client}</td>
                        <td className="p-4 font-semibold text-primary">{t.amount}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1 font-label-xs ${t.color} px-2 py-1 rounded-full`}>
                            <span className="material-symbols-outlined text-[14px]">{t.icon}</span>
                            {t.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter-grid">
            <div className="bg-surface rounded-xl p-6 border border-[#E8F5E9] ambient-shadow-1 relative overflow-hidden"
              style={{ borderLeft: '2px solid #F57C00' }}>
              <div className="inline-flex items-center gap-1 bg-[#F57C00]/10 text-[#F57C00] px-3 py-1 rounded-full w-fit font-label-sm mb-4">
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                AI Financial Insight
              </div>
              <p className="font-body-lg text-on-surface leading-relaxed mb-4">
                "Direct selling increased your margin by <span className="font-bold text-[#F57C00]">18.5%</span> compared to traditional markets this quarter."
              </p>
              <div className="text-on-surface-variant font-body-md mb-4">
                Recommendation: Focus on expanding marketplace subscriptions to stabilize winter revenue streams.
              </div>
              <button className="text-[#F57C00] font-label-sm flex items-center gap-1 hover:underline">
                View detailed analysis <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            <div className="bg-surface rounded-xl p-6 border border-[#E8F5E9] ambient-shadow-1">
              <h3 className="font-headline-md text-on-surface mb-4">Record Manual Sale</h3>
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block font-label-xs text-on-surface-variant mb-1">Amount (₹)</label>
                  <input type="number" className="w-full h-12 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary px-4 bg-surface-container-lowest outline-none" placeholder="0.00" />
                </div>
                <div>
                  <label className="block font-label-xs text-on-surface-variant mb-1">Buyer/Client</label>
                  <input type="text" className="w-full h-12 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary px-4 bg-surface-container-lowest outline-none" placeholder="Enter buyer name" />
                </div>
                <div>
                  <label className="block font-label-xs text-on-surface-variant mb-1">Category</label>
                  <select className="w-full h-12 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary px-4 bg-surface-container-lowest outline-none">
                    <option>Marketplace Sale</option>
                    <option>Direct B2B</option>
                    <option>Subscription</option>
                  </select>
                </div>
                <button type="button" className="w-full h-12 bg-primary text-on-primary rounded-lg font-label-sm hover:opacity-90 transition-opacity mt-2 shadow-sm">
                  Save Record
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </FarmerLayout>
  )
}

function MetricCard({ icon, label, value, badge, badgeBg, bg }) {
  return (
    <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 card-hover transition-all flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 ${bg} rounded-lg`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {badge && (
          <span className={`font-label-xs ${badgeBg || 'text-on-primary-container bg-primary-container/10'} px-2 py-1 rounded-full flex items-center gap-1`}>
            <span className="material-symbols-outlined text-[14px]">trending_up</span> {badge}
          </span>
        )}
      </div>
      <div>
        <div className="font-label-sm text-on-surface-variant mb-1">{label}</div>
        <div className="font-headline-md text-on-surface">{value}</div>
      </div>
    </div>
  )
}