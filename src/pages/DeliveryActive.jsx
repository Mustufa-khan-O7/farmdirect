import { useState } from 'react'
import DeliveryLayout from '../components/DeliveryLayout'

export default function DeliveryActive() {
  const [status, setStatus] = useState('inprogress')

  return (
    <DeliveryLayout active="active">
      <main className="flex-1 flex flex-col relative">
        <div className="relative w-full h-[400px] lg:h-[500px] bg-surface-variant z-0 rounded-xl overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Map"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKsZL27OlB7ep3_DPzCzJ3LZCp-Cz9wUNymEssi8rJAT3fGNjkFrghgeLVZEIbVL0rPXjVVLwQCQK5r2cLFWxdsabqOTzbe2mGtwX32kgOHt51i-Tp32sfOQ9wKl-yXGzPrWZi3oDjCp7Tfc3nOSOAOGRERdyCD8xlrV0FKpF5dnMx1EEW3CZaUFTien4pu1ZZG5yd3QdGbgFnMlQqwY2jPdGxCoqeByPW87g8kQRue5C9OujV_lBY"
          />
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="bg-surface p-2 rounded-full shadow-md text-on-surface hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined">my_location</span>
            </button>
            <button className="bg-surface p-2 rounded-full shadow-md text-on-surface hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined">layers</span>
            </button>
          </div>
        </div>

        <div className="flex-1 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-gutter-grid">
          <div className="lg:col-span-7 flex flex-col gap-stack-md">
            <div
              className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 flex flex-col gap-3"
              style={{ borderLeft: '2px solid #F57C00' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-[#F57C00]/10 px-3 py-1 rounded-full w-fit">
                  <span className="material-symbols-outlined text-[#F57C00] text-sm">auto_awesome</span>
                  <span className="font-label-xs text-[#F57C00]">AI Route Optimization Active</span>
                </div>
                <span className="font-label-sm text-on-surface-variant">2 mins ago</span>
              </div>
              <p className="font-body-md text-on-surface">
                AI optimized route saves <strong className="text-primary">3.5 km</strong> and{' '}
                <strong className="text-primary">12 minutes</strong>. Traffic detected on Main Road
                — alternative path suggested.
              </p>
            </div>

            <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 flex flex-col gap-4">
              <h2 className="font-headline-md text-on-surface mb-2">Delivery Details</h2>

              <div className="relative pl-6 flex flex-col gap-6 border-l-2 border-outline-variant ml-3">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-primary"></div>
                  <div className="flex flex-col">
                    <span className="font-label-xs text-on-surface-variant uppercase tracking-wider">
                      Pickup
                    </span>
                    <span className="font-body-md font-semibold text-on-surface">Nashik Farm</span>
                    <span className="font-label-sm text-on-surface-variant">Plot 42, Green Belt</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary shadow-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-surface rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-xs text-on-surface-variant uppercase tracking-wider">
                      Dropoff
                    </span>
                    <span className="font-body-md font-semibold text-on-surface">
                      Green Valley Apartments
                    </span>
                    <span className="font-label-sm text-on-surface-variant">Block B, Unit 204</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-outline-variant flex justify-between items-center">
                <div>
                  <span className="font-label-xs text-on-surface-variant block">Order ID</span>
                  <span className="font-label-sm font-semibold">#ORD-9284-A</span>
                </div>
                <div className="text-right">
                  <span className="font-label-xs text-on-surface-variant block">Items</span>
                  <span className="font-label-sm font-semibold">3 Crates (45kg)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-stack-md">
            <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 flex flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-headline-md text-on-surface">Current Status</h3>
                <span className="px-2 py-1 rounded bg-[#F2F2F2] text-[#333333] font-label-xs">
                  {status === 'delivered' ? 'Completed' : 'In Progress'}
                </span>
              </div>

              <button
                onClick={() => setStatus('picked')}
                className={`w-full py-3 px-4 rounded-lg border transition-colors flex items-center justify-center gap-2 font-label-sm ${
                  status === 'picked' || status === 'started' || status === 'delivered'
                    ? 'bg-secondary-container border-primary text-primary'
                    : 'bg-surface-container border-outline-variant text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                Picked Up
              </button>

              <button
                onClick={() => setStatus('started')}
                disabled={status === 'idle'}
                className={`w-full py-3 px-4 rounded-lg font-label-sm flex items-center justify-center gap-2 transition-opacity ${
                  status === 'started' || status === 'delivered'
                    ? 'bg-primary text-on-primary'
                    : 'bg-primary-container text-on-primary-container hover:opacity-90'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                Start Delivery
              </button>

              <button
                onClick={() => setStatus('delivered')}
                disabled={status !== 'started' && status !== 'delivered'}
                className={`w-full py-3 px-4 rounded-lg border font-label-sm flex items-center justify-center gap-2 transition-colors ${
                  status === 'delivered'
                    ? 'bg-primary text-on-primary border-primary'
                    : status === 'started'
                    ? 'border-primary text-primary hover:bg-surface-container'
                    : 'border-outline-variant text-on-surface-variant opacity-50 cursor-not-allowed'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">inventory</span>
                Mark as Delivered
              </button>

              {status === 'delivered' && (
                <div className="bg-secondary-container text-primary p-3 rounded-lg text-center font-label-sm">
                  ✅ Delivery marked as completed
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </DeliveryLayout>
  )
}