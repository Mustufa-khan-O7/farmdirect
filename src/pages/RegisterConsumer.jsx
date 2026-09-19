import { useNavigate, Link } from 'react-router-dom'

export default function RegisterConsumer() {
  const navigate = useNavigate()
  const submit = (e) => { e.preventDefault(); navigate('/marketplace') }

  const Field = ({ label, icon, type = 'text', placeholder, span2, textarea }) => (
    <div className={span2 ? 'col-span-1 md:col-span-2' : ''}>
      <label className="block font-label-xs text-label-xs text-on-surface-variant mb-1">{label}</label>
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">{icon}</span>
        {textarea ? (
          <textarea rows={2}
            className="w-full pl-10 pr-3 py-3 bg-surface rounded border-[1.5px] border-secondary-fixed focus:border-primary focus:ring-0 font-body-md resize-none"
            placeholder={placeholder} />
        ) : (
          <input type={type}
            className="w-full h-12 pl-10 pr-3 bg-surface rounded border-[1.5px] border-secondary-fixed focus:border-primary focus:ring-0 font-body-md"
            placeholder={placeholder} />
        )}
      </div>
    </div>
  )

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative bg-surface-container-high overflow-hidden border-r border-outline-variant">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgd-wcTSQZiZIwUAKTwPm1Oh0X5rnHKp-Ck1U0myJUb9UQILrMtNp4ezw4x9jk_8BQ66Pe_D9o6qO87JN0rZEqzeR8ReDBxCDBnmWQSHiUoYzFid_UubCuhlpT0QTf5N0Quh1q85ftCVA2nm7vCHh9M6HHWIM9YPJ6HMnqOxuM5V9m1uWxE-j8s7FRrenWC9zlyjQcl093MgK2Ssu8JJ81fodMdllhlZlEAeRKb8zIUDs0CjuVL_bb')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-container-padding-desktop text-on-primary">
          <h1 className="font-display-lg text-display-lg mb-stack-md">FarmDirect</h1>
          <p className="font-body-lg text-secondary-fixed max-w-md">
            Join the ecosystem that connects fresh, local produce directly to your table, empowering local growers.
          </p>
        </div>
      </div>

      <div className="w-full md:w-7/12 lg:w-1/2 flex items-center justify-center p-container-padding-mobile md:p-container-padding-desktop min-h-screen bg-surface overflow-y-auto">
        <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl border border-secondary-fixed card-shadow p-container-padding-mobile md:p-container-padding-desktop">
          <div className="mb-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Create Consumer Account</h2>
            <p className="font-body-md text-on-surface-variant">Sign up to start receiving fresh farm goods.</p>
          </div>

          <form className="space-y-stack-md" onSubmit={submit}>
            <div className="space-y-stack-sm">
              <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                <Field span2 label="Full Name" icon="person" placeholder="John Doe" />
                <Field span2 label="Email Address" icon="mail" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <hr className="border-outline-variant" />

            <div className="space-y-stack-sm">
              <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Mobile Verification</h3>
              <Field span2 label="Mobile Number" icon="smartphone" placeholder="(555) 000-0000" />
              <Field span2 label="OTP" icon="lock" placeholder="••••••" />
            </div>
            <hr className="border-outline-variant" />

            <div className="space-y-stack-sm">
              <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Delivery Details</h3>
              <Field span2 label="Complete Address" icon="home" textarea placeholder="123 Farm Lane, Apt 4B" />
              <Field label="State" icon="map" placeholder="Select State" />
              <Field label="City" icon="location_city" placeholder="City" />
              <Field label="Area" icon="place" placeholder="Neighborhood" />
              <Field label="Pincode" icon="pin_drop" placeholder="12345" />
            </div>
            <hr className="border-outline-variant" />

            <div className="space-y-stack-sm">
              <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Security</h3>
              <Field span2 label="Password" icon="lock" type="password" placeholder="••••••••" />
              <Field span2 label="Confirm Password" icon="lock" type="password" placeholder="••••••••" />
            </div>

            <div className="pt-stack-sm flex flex-col items-center space-y-stack-sm">
              <button type="submit"
                className="w-full h-12 bg-primary text-on-primary rounded font-label-sm hover:bg-surface-tint transition-all shadow-md hover:-translate-y-[2px]">
                Create Consumer Account
              </button>
              <Link to="/login" className="font-label-sm text-on-surface-variant hover:text-primary underline-offset-4 hover:underline">
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}