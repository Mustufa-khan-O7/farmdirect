import { Link } from 'react-router-dom'

export default function OrderTracking() {
  const steps = [
    { label: 'Order Placed', time: '10:30 AM', done: true },
    { label: 'Confirmed by Farm', time: '10:45 AM • Green Valley Farm', done: true },
    { label: 'Preparing Order', time: '11:15 AM', done: true },
    { label: 'Out for Delivery', time: '2:00 PM', done: true, active: true },
    { label: 'Delivered', time: 'Pending', done: false },
  ]

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <nav className="bg-surface shadow-sm w-full top-0 border-b border-outline-variant z-50">
        <div className="flex justify-between items-center w-full px-container-padding-mobile md:px-container-padding-desktop h-16 max-w-[1440px] mx-auto">
          <Link to="/" className="font-headline-md font-bold text-primary">
            FarmDirect
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/marketplace" className="text-on-surface-variant hover:text-primary font-label-sm">
              Marketplace
            </Link>
            <Link to="/cart" className="text-on-surface-variant hover:text-primary p-2 rounded-full">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-container-padding-mobile md:px-container-padding-desktop py-stack-md flex flex-col gap-stack-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-stack-sm mb-stack-sm">
          <div>
            <Link
              to="/order/success"
              className="flex items-center text-primary font-label-sm hover:underline mb-2"
            >
              <span className="material-symbols-outlined text-[18px] mr-1">arrow_back</span>
              Back to Order
            </Link>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-on-surface">
              Order #FD-8923
            </h1>
            <p className="font-body-md text-on-surface-variant mt-1">
              Expected Arrival: Today, 2:45 PM
            </p>
          </div>
          <div className="bg-[#F57C00] text-white px-4 py-2 rounded-full font-label-sm flex items-center shadow-sm">
            <span className="material-symbols-outlined mr-2 text-[18px]">local_shipping</span>
            Out for Delivery - Arriving in 15 mins
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-grid">
          <div className="lg:col-span-8 bg-surface rounded-xl border border-outline-variant ambient-shadow-1 overflow-hidden flex flex-col h-[500px]">
            <div className="relative flex-1 bg-surface-variant">
              <img
                alt="Map View"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhA7jHliu_07H8JCeCVJvuZ2yIR1Th4cmytgm4I2ndN63Y8nInI7tJytdY2MA0yXZelQNAmwH2oGiK-gy7Hf4gGvI87LivuovYjZfSy9IpuUJ63_kgXBvRUuZGzu9vPAHYjSyYYAOmJteO2fZsYG84KNB1gUdU9f-8hmCsmhebLEfiscDebLg06Jkxw6bZyAu9cX16TDAKGfMLDE4KTNUk3Pc4GHwEDKfC5dtYDBTI_VQWmFJESPC"
              />
              <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-80 bg-surface/90 backdrop-blur-md rounded-lg p-4 border border-outline-variant shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-sm text-primary flex items-center">
                    <span className="material-symbols-outlined text-[16px] mr-1">bolt</span>
                    Live Update
                  </span>
                  <span className="font-label-xs text-on-surface-variant">2 mins ago</span>
                </div>
                <p className="font-body-md text-on-surface">
                  Ajay is 1.2 miles away. Traffic is clear.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-stack-md">
            <div className="bg-surface rounded-xl border border-outline-variant ambient-shadow-1 card-hover p-4">
              <h2 className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-4">
                Delivery Partner
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-variant shrink-0">
                  <img
                    alt="Delivery Partner"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwmT4ywkMIJ39nn54LeQdwC5J_-w3AF-og_6Cv9TF7HTQisYwct7G1N56sKLNl7XQaK4tstlfzc6TgOA8nmIxUNUBjOSS-7Oi4B5KhMDBqQ2sDvCYZdhBHcn1VjZkbSLDqxSsz9x5e1e73kEfPlKEm1VMRtZ8AIef7oRjNemFCpZpm-dmhB-mFqf4Q__rNL4n2EXbaVO6GXfrq-uJM6kQFfvkn3qYukp4GdGC3hbAwXtqPM8_6bVrs"
                  />
                </div>
                <div>
                  <h3 className="font-headline-md text-[20px] text-on-surface">Ajay Kumar</h3>
                  <p className="font-body-md text-on-surface-variant flex items-center mt-1">
                    <span className="material-symbols-outlined text-[16px] mr-1">pedal_bike</span>
                    E-Bike Delivery
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="material-symbols-outlined text-[16px] text-[#F57C00]">star</span>
                    <span className="font-label-sm ml-1 text-on-surface">4.9 (120+ deliveries)</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors py-2 rounded-lg font-label-sm flex items-center justify-center">
                  <span className="material-symbols-outlined mr-2 text-[18px]">call</span> Call
                </button>
                <button className="flex-1 border border-primary text-primary hover:bg-surface-variant transition-colors py-2 rounded-lg font-label-sm flex items-center justify-center">
                  <span className="material-symbols-outlined mr-2 text-[18px]">chat</span> Message
                </button>
              </div>
            </div>

            <div className="bg-surface rounded-xl border border-outline-variant ambient-shadow-1 p-6 flex-1">
              <h2 className="font-headline-md text-[20px] text-on-surface mb-6">Order Timeline</h2>
              <div className="relative pl-6 border-l-2 border-primary-container/30 space-y-8">
                {steps.map((s, i) => (
                  <div key={i} className="relative">
                    <div
                      className={`absolute -left-[35px] top-0 w-4 h-4 rounded-full ring-4 ring-surface ${
                        s.active
                          ? 'bg-[#F57C00]'
                          : s.done
                          ? 'bg-primary'
                          : 'bg-surface-variant border-2 border-outline'
                      }`}
                    />
                    <h3
                      className={`font-label-sm mb-1 ${
                        s.active
                          ? 'text-[#F57C00]'
                          : s.done
                          ? 'text-on-surface'
                          : 'text-on-surface-variant'
                      }`}
                    >
                      {s.label}
                    </h3>
                    <p className="font-label-xs text-on-surface-variant">{s.time}</p>
                    {s.active && (
                      <div className="bg-primary-container/10 p-3 rounded-lg border-l-2 border-[#F57C00] mt-2">
                        <p className="font-label-xs text-primary flex items-center">
                          <span className="material-symbols-outlined text-[16px] mr-1">
                            auto_awesome
                          </span>
                          AI routing optimizing path to avoid main street closure.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}