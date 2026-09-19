import FarmerLayout from '../components/FarmerLayout'

export default function FarmerAI() {
  return (
    <FarmerLayout active="ai">
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-container-padding-mobile md:px-container-padding-desktop py-stack-md">
        <header className="mb-stack-md flex justify-between items-end flex-wrap gap-4">
          <div>
            <h1 className="font-headline-lg text-on-surface mb-2">AI Demand Forecast</h1>
            <p className="font-body-md text-on-surface-variant">Predictive analytics for optimal crop planning and market position.</p>
          </div>
          <button className="px-4 py-2 bg-surface text-primary border border-primary rounded-lg font-label-sm flex items-center gap-2 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span> Export Report
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-grid mb-stack-md">
          <MetricCard label="Current Demand Index" value="142.5" sub="+5.2% from last week" subColor="text-primary" icon="trending_up" iconColor="#154212" borderColor="#F57C00" />
          <MetricCard label="Predicted 30-Day Demand" value="High" sub="85% confidence score" subColor="text-primary" icon="auto_awesome" iconColor="#F57C00" borderColor="#F57C00" />
          <MetricCard label="Top Recommended Crop" value="Roma Tomatoes" sub="Expected 15% price premium" subColor="text-on-surface-variant" icon="eco" iconColor="#154212" borderColor="#154212" />
          <MetricCard label="Suggested Volume" value="1,140 kg" sub="Based on local buyer data" subColor="text-on-surface-variant" icon="inventory_2" iconColor="#154212" borderColor="#154212" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-grid">
          <div className="lg:col-span-2 space-y-stack-md">
            <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 h-[400px]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-headline-md text-on-surface">Demand Trajectory</h2>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-xs cursor-pointer">Weekly</span>
                  <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full font-label-xs cursor-pointer">Monthly</span>
                </div>
              </div>
              <div className="w-full h-[300px] flex items-center justify-center bg-surface-container-lowest rounded-lg border border-dashed border-outline-variant">
                <span className="font-body-md text-on-surface-variant flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-4xl opacity-50">monitoring</span>
                  [Interactive Line Chart]
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-grid">
              <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 h-[300px]">
                <h2 className="font-label-sm text-on-surface mb-4">Crop Comparison (Volume)</h2>
                <div className="w-full h-[220px] flex items-center justify-center bg-surface-container-lowest rounded-lg border border-dashed border-outline-variant">
                  <span className="font-body-md text-on-surface-variant">[Bar Chart]</span>
                </div>
              </div>
              <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1 h-[300px]">
                <h2 className="font-label-sm text-on-surface mb-4">Market Share Shift</h2>
                <div className="w-full h-[220px] flex items-center justify-center bg-surface-container-lowest rounded-lg border border-dashed border-outline-variant">
                  <span className="font-body-md text-on-surface-variant">[Pie Chart]</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-stack-md">
            <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1" style={{ borderLeft: '4px solid #F57C00' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[#F57C00]">auto_awesome</span>
                <h2 className="font-headline-md text-on-surface">AI Market Insights</h2>
              </div>
              <div className="space-y-4">
                <Insight icon="lightbulb" color="#F57C00" title="Tomato Surge:" text="Demand expected to rise by 22% next month due to regional culinary festivals." />
                <Insight icon="trending_flat" color="#154212" title="Potato Stability:" text="Demand remains historically stable. Maintain current production levels to avoid surplus." />
                <Insight icon="warning" color="#ba1a1a" title="Onion Oversupply:" text="Early signals indicate potential market saturation for white onions in your sector." />
              </div>
            </div>

            <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1">
              <h2 className="font-headline-md text-on-surface mb-4">Recommended Actions</h2>
              <ul className="space-y-3">
                <Action icon="add" bg="bg-primary-container text-on-primary-container" label="Increase Tomato Yield" />
                <Action icon="pause" bg="bg-surface-variant text-on-surface-variant" label="Hold Onion Planting" />
                <Action icon="contact_mail" bg="bg-secondary-container text-on-secondary-container" label="Contact Local Buyers" />
              </ul>
            </div>
          </div>
        </div>
      </main>
    </FarmerLayout>
  )
}

function MetricCard({ label, value, sub, subColor, icon, iconColor, borderColor }) {
  return (
    <div className="bg-surface rounded-xl p-4 border border-[#E8F5E9] ambient-shadow-1" style={{ borderLeft: `2px solid ${borderColor}` }}>
      <div className="flex justify-between items-start mb-2">
        <p className="font-label-sm text-on-surface-variant">{label}</p>
        <span className="material-symbols-outlined" style={{ color: iconColor || '#154212' }}>{icon}</span>
      </div>
      <p className="font-headline-md text-on-surface">{value}</p>
      <p className={`font-label-xs ${subColor} mt-1`}>{sub}</p>
    </div>
  )
}

function Insight({ icon, color, title, text }) {
  return (
    <div className="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant">
      <div className="flex gap-2 items-start">
        <span className="material-symbols-outlined mt-0.5 text-[20px]" style={{ color }}>{icon}</span>
        <p className="font-body-md text-on-surface text-sm leading-tight">
          <strong className="font-bold">{title}</strong> {text}
        </p>
      </div>
    </div>
  )
}

function Action({ icon, bg, label }) {
  return (
    <li className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-lg border border-outline-variant hover:border-primary transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center`}>
          <span className="material-symbols-outlined text-[16px]">{icon}</span>
        </div>
        <span className="font-label-sm text-on-surface">{label}</span>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
    </li>
  )
}