import { useNavigate } from 'react-router-dom'

export default function RegisterFarmer() {
  const navigate = useNavigate()
  const submit = (e) => { e.preventDefault(); navigate('/farmer/dashboard') }

  const Section = ({ icon, title, children }) => (
    <section className="bg-surface-container-lowest border border-surface-container-high rounded-xl p-4 md:p-6 card-shadow">
      <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2 border-b border-surface-container pb-2">
        <span className="material-symbols-outlined">{icon}</span> {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-grid">{children}</div>
    </section>
  )

  const Input = ({ label, id, type = 'text', placeholder, span2 }) => (
    <div className={span2 ? 'md:col-span-2' : ''}>
      <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor={id}>{label}</label>
      <input
        className="w-full min-h-[48px] px-4 rounded-lg border-[1.5px] border-[#E8F5E9] bg-white text-on-surface focus:border-primary focus:ring-0 font-body-md"
        id={id} type={type} placeholder={placeholder} />
    </div>
  )

  return (
    <main className="max-w-4xl mx-auto px-container-padding-mobile md:px-container-padding-desktop py-stack-lg">
      <header className="mb-stack-md text-center">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Farmer Registration</h1>
        <p className="font-body-md text-on-surface-variant">Join FarmDirect to manage your crops and reach more buyers.</p>
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full font-label-xs" style={{ backgroundColor: '#F2F2F2', color: '#333333' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>pending</span>
          <span>Verification Status: Pending</span>
        </div>
      </header>

      <form className="space-y-stack-md" onSubmit={submit}>
        <Section icon="person" title="Basic Details">
          <Input label="Full Name" id="fullName" placeholder="Enter your full name" />
          <Input label="Mobile Number" id="mobile" type="tel" placeholder="10-digit mobile number" />
        </Section>

        <Section icon="verified_user" title="Verification">
          <Input label="Kisan Pehchan Patra / Farmer ID" id="farmerId" placeholder="Enter Farmer ID" />
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Govt ID Type</label>
            <select className="w-full min-h-[48px] px-4 rounded-lg border-[1.5px] border-[#E8F5E9] bg-white focus:border-primary focus:ring-0">
              <option>Select ID Type</option>
              <option>Aadhaar Card</option>
              <option>PAN Card</option>
              <option>Voter ID</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Upload Document</label>
            <div className="border-2 border-dashed border-outline-variant rounded-lg p-6 text-center hover:bg-surface-container-lowest cursor-pointer">
              <span className="material-symbols-outlined text-outline text-3xl mb-2 block">upload_file</span>
              <p className="font-body-md text-on-surface-variant">Click to upload or drag and drop</p>
              <p className="font-label-xs text-outline mt-1">PDF, JPG, PNG (Max 5MB)</p>
            </div>
          </div>
        </Section>

        <Section icon="location_on" title="Address">
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">State</label>
            <select className="w-full min-h-[48px] px-4 rounded-lg border-[1.5px] border-[#E8F5E9] bg-white focus:border-primary focus:ring-0">
              <option>Select State</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Gujarat</option>
            </select>
          </div>
          <Input label="District" id="district" placeholder="Enter District" />
          <Input label="Village" id="village" placeholder="Enter Village Name" />
          <Input label="Pincode" id="pincode" placeholder="Enter 6-digit Pincode" />
        </Section>

        <Section icon="agriculture" title="Farming Details">
          <Input label="Farm Size (Acres)" id="farmSize" type="number" placeholder="e.g. 5.5" />
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Farming Type</label>
            <select className="w-full min-h-[48px] px-4 rounded-lg border-[1.5px] border-[#E8F5E9] bg-white focus:border-primary focus:ring-0">
              <option>Select Farming Type</option>
              <option>Organic</option>
              <option>Conventional</option>
              <option>Mixed</option>
            </select>
          </div>
          <Input span2 label="Crops Grown" id="crops" placeholder="e.g. Wheat, Soyabean, Cotton" />
          <Input span2 label="Expected Produce (Quintals/year)" id="produce" type="number" placeholder="Estimated annual produce" />
        </Section>

        <Section icon="account_balance" title="Bank Details">
          <Input span2 label="Account Holder Name" id="accName" placeholder="Name as per bank records" />
          <Input label="Account Number" id="accNum" type="password" placeholder="Enter Account Number" />
          <Input label="Confirm Account Number" id="accNum2" placeholder="Re-enter Account Number" />
          <Input label="IFSC Code" id="ifsc" placeholder="e.g. SBIN0001234" />
          <Input label="Bank Name" id="bankName" placeholder="Auto-filled from IFSC" />
        </Section>

        <Section icon="lock" title="Login Setup">
          <Input label="Password" id="pass" type="password" placeholder="Create a strong password" />
          <Input label="Confirm Password" id="pass2" type="password" placeholder="Re-enter password" />
        </Section>

        <div className="pt-4 flex justify-end">
          <button type="submit" className="bg-primary hover:bg-surface-tint text-on-primary font-label-sm px-8 py-4 rounded-lg transition-colors shadow-sm flex items-center gap-2">
            Create Farmer Account
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
          </button>
        </div>
      </form>
    </main>
  )
}