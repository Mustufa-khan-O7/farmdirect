import { Link } from 'react-router-dom'
import FarmerLayout from '../components/FarmerLayout'

const products = [
  {
    name: 'Sona Masoori Rice',
    price: 55, unit: 'kg', qty: '500 kg',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrv2zOOe_OQPxNUQj9S_lKXkWdix9sOyFc6OJvcUuefh4GsDVxGcSUVi_PtGWH2RV1wyRwXNuU5NpKAUmrOdIrWpF15hwHXmftccTUEAKunz9mYGqGhl1jOH0R9UW0HStZthnh0c-5Y8RGEKMI6W1a_cHaP0zABvWZ2KqpnWWYpIE2-AoG3DpDm0Hpjqv84PHYOzHq4vbw9qkrZDq44WY9V1U7qw1WsQ8G55mEsFPWOwUD-v-rcbAv',
    status: 'Active', statusColor: 'bg-[#e8f5e9] text-primary',
    insight: 'High Demand Expected: Festival Season approaching. Consider +5% markup.',
    insightColor: 'bg-[#F57C00]/10 text-[#F57C00] border-l-2 border-[#F57C00]',
    insightIcon: 'auto_awesome',
  },
  {
    name: 'Premium Nagpur Oranges',
    price: 80, unit: 'kg', qty: '250 kg',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD7uPYwscUgFK6_UyGQEw7EGQxTfMZtnosgssit86bk8vb3xX6ZFsp1QrR_iAHlwgsRxMsPwZdfq3Nmckby5E2BXXHOeAjEQQQ4A-qV9S2pZt2RxUW32Zoxw7PImvXQMDNN6Vn1GJ5CwRcrUjE-Ss4VuNedAbG5V5857SbRN4I2Wd1kTR-HIPJTErwtqRKFmDpVcjLSmFq49nIMioq-rN6l6h1hU5kL27FFNdt3UZzqurQnRhnarzq',
    status: 'Active', statusColor: 'bg-[#e8f5e9] text-primary',
    insight: 'Steady Demand. Optimal pricing.',
    insightColor: 'bg-surface-container text-on-surface-variant',
    insightIcon: 'timeline',
  },
  {
    name: 'Organic Turmeric (Raw)',
    price: 120, unit: 'kg', qty: '0 kg',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRoS5guNAUyJTJVpwsCDKq3eijlDwXKpLDmAAFApAhEi1EM4_6_v0l8JC1boxr9w_Ge0dhbpoQLua2Ffqcl7RVUy68avhIYzKxtZ4nYsx9FI1T6Zen2PDQfhWUgSFtcq3tFNqem_v4QQ5Igu_6axotqXeQuNuXPT3H5hcCHfkQbz5F8l4cxAjhRJvDMST4PsjAw_aNJfc5gAQrW7k2_XwwkiEMe5rZEseL1o1KRbemS0hbm3iPb44f',
    status: 'Draft', statusColor: 'bg-[#F2F2F2] text-[#333333]',
    insight: 'Low Inventory. Update stock to publish.',
    insightColor: 'bg-error-container text-on-error-container border-l-2 border-error',
    insightIcon: 'warning',
  },
]

export default function FarmerProducts() {
  return (
    <FarmerLayout active="products">
      <header className="hidden md:flex justify-between items-center px-container-padding-desktop h-16 border-b border-outline-variant bg-surface sticky top-0 z-30 shadow-sm">
        <div className="font-headline-md font-bold text-primary">FarmDirect</div>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <Link className="text-on-surface-variant hover:text-primary font-body-md" to="/marketplace">Marketplace</Link>
          </nav>
          <div className="h-6 w-px bg-outline-variant"></div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer">notifications</span>
            <span className="material-symbols-outlined text-primary cursor-pointer">shopping_cart</span>
          </div>
        </div>
      </header>

      <div className="px-container-padding-mobile md:px-container-padding-desktop py-stack-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-stack-md gap-4">
          <div>
            <h1 className="font-headline-lg text-primary">My Products</h1>
            <p className="text-on-surface-variant mt-1">
              Manage your inventory, pricing, and AI demand forecasting.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input className="w-full h-12 pl-10 pr-4 rounded-lg border-[1.5px] border-[#E8F5E9] bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                placeholder="Search products..." />
            </div>
            <Link to="/farmer/add-product"
              className="h-12 px-4 bg-primary text-on-primary rounded-lg flex items-center gap-2 hover:opacity-90">
              <span className="material-symbols-outlined">add</span>
              <span className="hidden sm:inline">Add</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
          {products.map((p, i) => (
            <div key={i}
              className="bg-surface-container-lowest rounded-xl p-4 border border-[#E8F5E9] card-shadow card-hover relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 right-0 p-3 z-10">
                <span className={`${p.statusColor} px-3 py-1 rounded-full text-label-xs font-bold flex items-center gap-1 shadow-sm`}>
                  <span className="w-2 h-2 rounded-full bg-current"></span> {p.status}
                </span>
              </div>

              <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-surface-container-low">
                <img alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={p.img} />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-headline-md text-on-surface mb-1 truncate">{p.name}</h3>
                <div className="flex justify-between items-end mb-4">
                  <span className="font-bold text-[20px] text-primary">
                    ₹{p.price} <span className="text-label-sm text-on-surface-variant font-normal">/ {p.unit}</span>
                  </span>
                  <span className="text-on-surface-variant text-label-sm">Qty: {p.qty}</span>
                </div>

                <div className={`${p.insightColor} px-3 py-2 rounded-lg text-label-xs flex items-center gap-2 mb-4`}>
                  <span className="material-symbols-outlined text-[16px]">{p.insightIcon}</span>
                  <span>{p.insight}</span>
                </div>

                <div className="mt-auto flex gap-2 pt-2 border-t border-outline-variant/30">
                  <button className="flex-1 h-10 border border-outline-variant rounded-lg text-on-surface-variant hover:text-primary hover:border-primary hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">edit</span> Edit
                  </button>
                  <button className="w-10 h-10 border border-outline-variant rounded-lg text-error hover:bg-error-container hover:border-error transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FarmerLayout>
  )
}