import { Link, useNavigate } from 'react-router-dom'
import FarmerLayout from '../components/FarmerLayout'

export default function FarmerAddProduct() {
  const navigate = useNavigate()
  const submit = (e) => { e.preventDefault(); navigate('/farmer/products') }

  return (
    <FarmerLayout active="products">
      <header className="flex justify-between items-center w-full px-container-padding-mobile md:px-container-padding-desktop h-16 bg-surface border-b border-outline-variant lg:hidden">
        <h1 className="font-headline-md font-bold text-primary">FarmDirect</h1>
      </header>

      <div className="p-container-padding-mobile md:p-container-padding-desktop bg-surface-container-lowest flex-1">
        <div className="mb-8">
          <h1 className="font-headline-lg text-on-surface mb-2">Add New Product</h1>
          <p className="font-body-md text-on-surface-variant">
            List your harvest on the marketplace to connect with buyers directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-grid">
          <div className="lg:col-span-8 bg-surface rounded-xl shadow-sm border border-[#E8F5E9] p-stack-md card-hover">
            <form className="space-y-stack-md" onSubmit={submit}>
              <div className="space-y-stack-sm">
                <h3 className="font-headline-md text-on-surface border-b border-surface-container-highest pb-2 mb-4">
                  Product Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                  <div className="flex flex-col">
                    <label className="font-label-xs text-on-surface-variant mb-1">Product Name</label>
                    <input className="h-12 px-4 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest"
                      placeholder="e.g., Organic Red Onions" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-xs text-on-surface-variant mb-1">Category</label>
                    <select className="h-12 px-4 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest">
                      <option>Vegetables</option>
                      <option>Fruits</option>
                      <option>Grains</option>
                      <option>Dairy</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-xs text-on-surface-variant mb-1">Description</label>
                  <textarea rows={4}
                    className="p-4 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest resize-none"
                    placeholder="Describe the quality, growing methods, etc." />
                </div>
              </div>

              <div className="space-y-stack-sm pt-4">
                <h3 className="font-headline-md text-on-surface border-b border-surface-container-highest pb-2 mb-4">
                  Inventory & Pricing
                </h3>
                <div className="rounded-r-lg p-4 flex items-start gap-3 mb-4"
                  style={{ borderLeft: '2px solid #F57C00', backgroundColor: 'rgba(245,124,0,0.1)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#F57C00' }}>auto_awesome</span>
                  <div>
                    <p className="font-label-sm font-bold mb-1" style={{ color: '#F57C00' }}>AI Suggested Price</p>
                    <p className="font-body-md text-on-surface-variant text-sm">
                      ₹22 - ₹25/kg based on local market trends.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-sm">
                  <div className="flex flex-col">
                    <label className="font-label-xs text-on-surface-variant mb-1">Available Quantity</label>
                    <input type="number"
                      className="h-12 px-4 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest"
                      placeholder="0" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-xs text-on-surface-variant mb-1">Unit</label>
                    <select className="h-12 px-4 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest">
                      <option>KG</option>
                      <option>Quintal</option>
                      <option>Tons</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-xs text-on-surface-variant mb-1">Price per Unit (₹)</label>
                    <input type="number"
                      className="h-12 px-4 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest"
                      placeholder="0.00" />
                  </div>
                </div>
              </div>

              <div className="space-y-stack-sm pt-4">
                <h3 className="font-headline-md text-on-surface border-b border-surface-container-highest pb-2 mb-4">
                  Logistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                  <div className="flex flex-col">
                    <label className="font-label-xs text-on-surface-variant mb-1">Harvest Date</label>
                    <input type="date"
                      className="h-12 px-4 rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-xs text-on-surface-variant mb-1">Location</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                        location_on
                      </span>
                      <input className="h-12 pl-10 pr-4 w-full rounded-lg border-[1.5px] border-[#E8F5E9] focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface-container-lowest"
                        placeholder="Farm location" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-end gap-4 border-t border-surface-container-highest">
                <Link to="/farmer/products"
                  className="px-6 py-3 rounded-lg border border-outline text-on-surface font-label-sm hover:bg-surface-container-low transition-colors">
                  Cancel
                </Link>
                <button type="submit"
                  className="px-8 py-3 rounded-lg bg-primary text-on-primary font-label-sm hover:bg-surface-tint transition-colors shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined">publish</span>
                  List Product
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 space-y-stack-md">
            <div className="bg-surface rounded-xl shadow-sm border border-[#E8F5E9] p-stack-md card-hover">
              <h3 className="font-headline-md text-on-surface mb-4">Product Image</h3>
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-lowest bg-surface-container">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
                  add_photo_alternate
                </span>
                <p className="font-label-sm text-on-surface mb-1">Click to upload or drag and drop</p>
                <p className="font-label-xs text-on-surface-variant">SVG, PNG, JPG (max. 5MB)</p>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-xl p-stack-md border border-surface-container-highest">
              <h4 className="font-label-sm font-bold text-on-surface flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary">lightbulb</span>
                Listing Tips
              </h4>
              <ul className="space-y-3 font-body-md text-on-surface-variant text-sm">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-0.5">check_circle</span>
                  High-quality images increase sales by up to 40%.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-0.5">check_circle</span>
                  Be accurate with quantity to maintain buyer trust.
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] mt-0.5">check_circle</span>
                  Mention any organic certifications in the description.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FarmerLayout>
  )
}