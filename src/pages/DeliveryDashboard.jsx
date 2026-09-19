import { Link } from 'react-router-dom'
import DeliveryLayout from '../components/DeliveryLayout'

export default function DeliveryDashboard() {
  return (
    <DeliveryLayout active="dashboard">
      <header className="flex justify-between items-center mb-stack-md">
        <div>
          <h1 className="font-headline-lg text-on-surface mb-2">Delivery Dashboard</h1>
          <p className="font-body-md text-on-surface-variant">
            Manage your routes, track earnings, and accept new requests.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-grid mb-stack-md">
        <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-secondary-fixed card-hover">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface">5</div>
          <div className="font-label-sm text-on-surface-variant">Today's Deliveries</div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-secondary-fixed card-hover relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <span className="bg-secondary-container text-primary px-2 py-1 rounded-full font-label-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              In Transit
            </span>
          </div>
          <div className="font-display-lg text-display-lg text-primary relative z-10">1</div>
          <div className="font-label-sm text-on-surface-variant relative z-10">Active Delivery</div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-secondary-fixed card-hover">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
          </div>
          <div className="font-display-lg text-display-lg text-on-surface">₹850</div>
          <div className="font-label-sm text-on-surface-variant">Today's Earnings</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-grid">
        <div className="lg:col-span-2 flex flex-col gap-stack-md">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-md text-on-surface">Available Delivery Requests</h2>
            <button className="text-primary font-label-sm flex items-center gap-1 hover:underline">
              View Map <span className="material-symbols-outlined text-sm">map</span>
            </button>
          </div>

          <RequestCard
            farm="Green Valley Farm"
            highDemand
            pickup="Farm: Plot 42, North Sector"
            pickupSub="3 boxes organic produce"
            drop="Consumer: 12A, Riverside Apts"
            dist="5.2 km"
            est="25 mins"
            earn="₹65"
            primary
          />

          <RequestCard
            farm="Sunrise Orchards"
            pickup="Farm: Orchard Hub, Gate 2"
            drop="Market: Central Bazaar, Stall 4"
            dist="8.4 km"
            est="40 mins"
            earn="₹110"
          />
        </div>

        <div className="flex flex-col gap-stack-md">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-secondary-fixed overflow-hidden flex flex-col h-[400px]">
            <div className="p-4 border-b border-outline-variant bg-surface flex justify-between items-center">
              <h3 className="font-label-sm font-bold text-on-surface">Live Route Optimization</h3>
              <span className="material-symbols-outlined text-primary">my_location</span>
            </div>
            <div className="flex-1 relative bg-surface-variant">
              <img
                className="w-full h-full object-cover"
                alt="Map"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCX7p8z3VLi7uTJxUERVHe-wIQe3U0iqaiMlw8ILk7IZ3ky8xqs5hKN-wezQZLe3FfMEzhzFwb6AOZ1RDIoc5Z7VM1ctnSxm4xkM9DYbrzXyM6xFf8WIWRTTd1eSvpaYqRvsldcDuX1gkQ7BqCWv-p2eXhq97zdFU5FxwmIK77lBEfJW5wRi6xvE_7yMXhJaklomZOhpHTT7LazQMD-pd7UsVBJwzFWO3BYRZF7_TmChBfJZmHo-2W"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-sm p-3 rounded-lg shadow-md border border-outline-variant flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary-container text-sm">
                    electric_moped
                  </span>
                </div>
                <div className="overflow-hidden">
                  <div className="font-label-xs text-on-surface-variant">NEXT STOP IN 12 MINS</div>
                  <div className="font-label-sm text-on-surface font-semibold truncate">
                    Riverside Apts, Consumer Drop
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DeliveryLayout>
  )
}

function RequestCard({ farm, highDemand, pickup, pickupSub, drop, dist, est, earn, primary }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">agriculture</span>
          <span className="font-label-sm text-on-surface">{farm}</span>
        </div>
        {highDemand && (
          <span className="bg-[#F57C00]/10 text-[#F57C00] px-3 py-1 rounded-full font-label-xs flex items-center gap-1 border border-[#F57C00]/20">
            <span className="material-symbols-outlined text-xs">local_fire_department</span>
            High Demand
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4 relative">
          <div className="absolute left-[11px] top-8 bottom-8 w-0.5 bg-outline-variant hidden md:block"></div>
          <div className="flex gap-4">
            <div className="mt-1">
              <span className="material-symbols-outlined text-primary">trip_origin</span>
            </div>
            <div>
              <div className="font-label-xs text-on-surface-variant">PICKUP</div>
              <div className="font-body-md font-medium text-on-surface">{pickup}</div>
              {pickupSub && (
                <div className="font-label-sm text-secondary">{pickupSub}</div>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mt-1">
              <span className="material-symbols-outlined text-error">location_on</span>
            </div>
            <div>
              <div className="font-label-xs text-on-surface-variant">DROP LOCATION</div>
              <div className="font-body-md font-medium text-on-surface">{drop}</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[200px] bg-surface-container-low rounded-lg p-4 flex flex-col justify-between shrink-0 border border-outline-variant">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="font-label-xs text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">route</span> Dist.
              </div>
              <div className="font-body-md font-semibold text-on-surface">{dist}</div>
            </div>
            <div>
              <div className="font-label-xs text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span> Est.
              </div>
              <div className="font-body-md font-semibold text-on-surface">{est}</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-label-xs text-on-surface-variant">EARNINGS</div>
            <div className="font-headline-md text-primary font-bold">{earn}</div>
          </div>
          <Link
            to="/delivery/active"
            className={`w-full py-2 px-4 rounded-lg font-label-sm transition-colors text-center block ${
              primary
                ? 'bg-primary text-on-primary hover:bg-surface-tint'
                : 'border border-primary text-primary hover:bg-secondary-container'
            }`}
          >
            {primary ? 'Accept Delivery' : 'Accept'}
          </Link>
        </div>
      </div>
    </div>
  )
}