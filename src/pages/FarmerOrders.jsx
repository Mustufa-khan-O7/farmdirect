import FarmerLayout from '../components/FarmerLayout'

const orders = [
  { id: '#ORD-9081', product: 'Organic Heirloom Tomatoes', pack: 'Box - 5kg', customer: 'Priya Sharma', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcNj7JAXERXDbzOEVWosJHcfoDgmd__edt8UXMI6Jrllol3MHGjyeH7DFU1igBnf0n74FjIAE-TcZjIrqURKApP_AEMBLH4DrLLvA0TX5nQLmJreRaqAIY0kcIlQiEdSPv4nOrlQ7bh3Zxdx0o8y-oOHlcBgZPkyb6Pr98klZZ4n3mRYUxMCCD18GaRjRUlcqMtenOg1dIAykILUMYOfFV6E9_cWrMvRaLHqXQ1OZzA3AKeV_p0Sec', qty: 2, amount: '₹450.00', status: 'New', statusColor: 'bg-[#F57C00] text-white', statusIcon: 'error', payment: 'Pending', payColor: 'bg-[#F2F2F2] text-[#333333]', payIcon: 'schedule', icon: 'local_florist' },
  { id: '#ORD-9080', product: 'Fresh Basil Leaves', pack: 'Bunch - 500g', customer: 'John Doe', initials: 'JD', qty: 5, amount: '₹1,250.00', status: 'Confirmed', statusColor: 'bg-[#F2F2F2] text-[#333333]', statusIcon: 'check_circle', payment: 'Paid', payColor: 'bg-[#E8F5E9] text-primary border border-primary/20', payIcon: 'verified', icon: 'eco' },
  { id: '#ORD-9079', product: 'Free Range Eggs', pack: 'Carton - 2 Dozen', customer: 'Sarah Miller', initials: 'SM', qty: 1, amount: '₹185.00', status: 'In Transit', statusColor: 'bg-[#F2F2F2] text-[#333333]', statusIcon: 'local_shipping', payment: 'Paid', payColor: 'bg-[#E8F5E9] text-primary border border-primary/20', payIcon: 'verified', icon: 'egg' },
]

export default function FarmerOrders() {
  return (
    <FarmerLayout active="orders">
      <header className="flex justify-between items-center w-full px-container-padding-mobile md:px-container-padding-desktop h-16 bg-surface border-b border-outline-variant lg:hidden">
        <h1 className="font-headline-md font-bold text-primary">FarmDirect</h1>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-container-padding-mobile md:p-container-padding-desktop w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-stack-md">
          <div>
            <h1 className="font-headline-lg text-on-surface">Order Management</h1>
            <p className="text-on-surface-variant mt-1">Track and fulfill your direct-to-consumer orders.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg bg-surface hover:bg-surface-container transition-colors font-label-sm">
              <span className="material-symbols-outlined text-lg">download</span> Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity font-label-sm shadow-sm">
              <span className="material-symbols-outlined text-lg">filter_list</span> Filter
            </button>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-4 card-shadow border border-[#E8F5E9] mb-stack-md flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full pl-10 pr-4 h-12 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-0 bg-surface-container-lowest font-body-md placeholder-on-surface-variant"
              placeholder="Search by Order ID, Product, or Customer..." />
          </div>
          <select className="h-12 rounded-lg border-[1.5px] border-[#E8F5E9] bg-surface-container-lowest font-label-sm focus:border-primary focus:ring-0 px-4 min-w-[140px]">
            <option>Status: All</option>
            <option>New</option>
            <option>Confirmed</option>
            <option>In Transit</option>
            <option>Delivered</option>
          </select>
          <select className="h-12 rounded-lg border-[1.5px] border-[#E8F5E9] bg-surface-container-lowest font-label-sm focus:border-primary focus:ring-0 px-4 min-w-[160px]">
            <option>Payment: All</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="bg-surface rounded-xl card-shadow border border-[#E8F5E9] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant">
                  <th className="px-6 py-4 font-label-sm text-on-surface-variant whitespace-nowrap">Order ID</th>
                  <th className="px-6 py-4 font-label-sm text-on-surface-variant whitespace-nowrap">Product</th>
                  <th className="px-6 py-4 font-label-sm text-on-surface-variant whitespace-nowrap">Customer</th>
                  <th className="px-6 py-4 font-label-sm text-on-surface-variant whitespace-nowrap">Qty</th>
                  <th className="px-6 py-4 font-label-sm text-on-surface-variant whitespace-nowrap">Amount</th>
                  <th className="px-6 py-4 font-label-sm text-on-surface-variant whitespace-nowrap">Status</th>
                  <th className="px-6 py-4 font-label-sm text-on-surface-variant whitespace-nowrap">Payment</th>
                  <th className="px-6 py-4 font-label-sm text-on-surface-variant whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/50">
                {orders.map((o, i) => (
                  <tr key={i} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="px-6 py-4 font-label-sm text-primary font-bold">{o.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-secondary">{o.icon}</span>
                        </div>
                        <div>
                          <p className="font-label-sm text-on-surface">{o.product}</p>
                          <p className="font-label-xs text-on-surface-variant">{o.pack}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {o.avatar ? (
                          <img className="w-8 h-8 rounded-full object-cover" alt={o.customer} src={o.avatar} />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-xs">{o.initials}</div>
                        )}
                        <span className="font-body-md text-on-surface">{o.customer}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body-md text-on-surface">{o.qty}</td>
                    <td className="px-6 py-4 font-label-sm text-on-surface font-bold">{o.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${o.statusColor} font-label-xs`}>
                        <span className="material-symbols-outlined text-[14px]">{o.statusIcon}</span>
                        {o.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${o.payColor} font-label-xs`}>
                        <span className="material-symbols-outlined text-[14px]">{o.payIcon}</span>
                        {o.payment}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-outline-variant flex items-center justify-between bg-surface-container-lowest">
            <span className="font-label-xs text-on-surface-variant">Showing 1 to 3 of 42 orders</span>
            <div className="flex gap-2">
              <button disabled className="w-8 h-8 rounded flex items-center justify-center border border-outline-variant text-on-surface-variant opacity-50">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded flex items-center justify-center border border-primary bg-primary-container text-on-primary-container font-label-sm">1</button>
              <button className="w-8 h-8 rounded flex items-center justify-center border border-outline-variant text-on-surface font-label-sm">2</button>
              <button className="w-8 h-8 rounded flex items-center justify-center border border-outline-variant text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </FarmerLayout>
  )
}