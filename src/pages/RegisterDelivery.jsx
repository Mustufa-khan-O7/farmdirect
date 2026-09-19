import { useNavigate, Link } from 'react-router-dom'

export default function RegisterDelivery() {
  const navigate = useNavigate()
  const submit = (e) => { e.preventDefault(); navigate('/delivery/dashboard') }

  const Input = ({ label, type = 'text', placeholder, disabled }) => (
    <div className="flex flex-col">
      <label className="font-label-xs text-label-xs text-on-surface-variant mb-1">{label}</label>
      <input disabled={disabled} type={type} placeholder={placeholder}
        className="h-12 px-3 rounded bg-white border-[1.5px] border-[#c2c9bb] focus:border-primary focus:ring-0 text-body-md" />
    </div>
  )

  return (
    <div className="bg-background text-on-background min-h-screen">
      <header className="bg-surface border-b border-outline-variant w-full h-16 flex items-center px-container-padding-mobile md:px-container-padding-desktop">
        <Link to="/role-select" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">arrow_back</span>
          <span className="font-headline-md font-bold text-primary">FarmDirect</span>
        </Link>
        <div className="ml-auto">
          <span className="font-label-sm text-on-surface-variant">Delivery Partner Setup</span>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-container-padding-mobile md:px-container-padding-desktop py-stack-md pb-stack-lg">
        <div className="mb-stack-md flex justify-between items-end">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Partner Registration</h1>
            <p className="font-body-md text-on-surface-variant">Join our logistics network to start earning.</p>
          </div>
          <div className="px-3 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: '#f2f2f2' }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#333333' }}></span>
            <span className="font-label-xs" style={{ color: '#333333' }}>Pending Verification</span>
          </div>
        </div>

        <form className="space-y-stack-md" onSubmit={submit}>
          <section className="bg-surface rounded-lg card-shadow border border-surface-container-highest p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4 border-b border-surface-container-highest pb-2">
              <span className="material-symbols-outlined text-primary">person</span>
              <h2 className="font-headline-md text-on-surface">1. Basic Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
              <Input label="Full Name" placeholder="Enter your full name" />
              <Input label="Mobile Number" type="tel" placeholder="Enter mobile number" />
              <Input label="Enter OTP" placeholder="XXXXXX" disabled />
              <div className="md:col-span-2 mt-2">
                <label className="font-label-xs text-on-surface-variant mb-1 block">Profile Photo</label>
                <div className="border-2 border-dashed border-outline-variant rounded-lg h-24 flex items-center justify-center bg-surface-container-low cursor-pointer">
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-on-surface-variant">photo_camera</span>
                    <span className="font-label-xs text-on-surface-variant mt-1">Tap to upload</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface rounded-lg card-shadow border border-surface-container-highest p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4 border-b border-surface-container-highest pb-2">
              <span className="material-symbols-outlined text-primary">badge</span>
              <h2 className="font-headline-md text-on-surface">2. Identity</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
              <div className="flex flex-col">
                <label className="font-label-xs text-on-surface-variant mb-1">Govt ID Type</label>
                <select className="h-12 px-3 rounded bg-white border-[1.5px] border-[#c2c9bb] focus:border-primary focus:ring-0">
                  <option>Aadhaar Card</option>
                  <option>Voter ID</option>
                  <option>PAN Card</option>
                </select>
              </div>
              <Input label="ID Number" placeholder="Enter ID number" />
              <div className="md:col-span-2 mt-2">
                <label className="font-label-xs text-on-surface-variant mb-1 block">Upload Driving License</label>
                <div className="border-2 border-dashed border-outline-variant rounded-lg h-24 flex items-center justify-center bg-surface-container-low cursor-pointer">
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-on-surface-variant">upload_file</span>
                    <span className="font-label-xs text-on-surface-variant mt-1">Upload Front & Back</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="pt-stack-sm flex justify-end">
            <button type="submit"
              className="bg-primary text-on-primary font-label-sm h-12 px-8 rounded-lg shadow-sm hover:opacity-90">
              Submit for Verification
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}