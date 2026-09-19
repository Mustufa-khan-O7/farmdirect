import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
  const [role, setRole] = useState('farmer')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (role === 'farmer') navigate('/farmer/dashboard')
    else if (role === 'delivery') navigate('/delivery/dashboard')
    else navigate('/marketplace')
  }

  const roleBtn = (id, icon, label) => (
    <button type="button" onClick={() => setRole(id)}
      className={`flex flex-col items-center justify-center p-stack-sm rounded-lg transition-colors ${
        role === id ? 'border-2 border-primary bg-primary-container/10 text-primary'
                    : 'border border-outline-variant text-on-surface-variant hover:border-primary'
      }`}>
      <span className="material-symbols-outlined mb-1"
        style={{ fontVariationSettings: role === id ? "'FILL' 1" : "'FILL' 0" }}>
        {icon}
      </span>
      <span className="font-label-xs text-label-xs">{label}</span>
    </button>
  )

  return (
    <div className="flex w-full min-h-screen font-body-md">
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary-container items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAF36EkH09wBswaz0pi58o28aqa3LI9lBJjqpSqx_kb_CaV_pUxvF4KS1QM4pna__KjlLMKF3sbwsKt5Qa4uW9YY83obE0cJlS0Tjwvwo2jnnmkup1fiWc4MycgBS9glx709iylIHnQs5oRe5dOVizKvJn8LsA3tvVFKwoIVk4vdJTYN_mNIaDU0kl1WJzsXV59LJE7rHf85T2-c4uQD2LAjGxGFnUiuIlHpGN3a_jXQZaVuRc8kVLp')" }} />
        <div className="absolute inset-0 bg-primary/60 z-10 mix-blend-multiply"></div>
        <div className="relative z-20 flex flex-col items-center text-center p-container-padding-desktop max-w-lg">
          <h1 className="font-display-lg text-display-lg text-on-primary mb-stack-md">FarmDirect</h1>
          <p className="font-body-lg text-body-lg text-on-primary/90">
            Connecting local growers with modern markets. Experience seamless farm-to-table management.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center px-container-padding-mobile py-stack-lg lg:px-[10%] bg-surface">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-stack-lg text-center lg:text-left">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Welcome Back</h2>
            <p className="font-body-md text-on-surface-variant">Please select your role and sign in to continue.</p>
          </div>

          <div className="mb-stack-md">
            <label className="block font-label-sm text-label-sm text-on-surface mb-stack-sm">I am a...</label>
            <div className="grid grid-cols-3 gap-base">
              {roleBtn('farmer', 'agriculture', 'Farmer')}
              {roleBtn('consumer', 'shopping_basket', 'Consumer')}
              {roleBtn('delivery', 'local_shipping', 'Delivery')}
            </div>
          </div>

          <form className="space-y-stack-md" onSubmit={handleLogin}>
            <div>
              <label className="block font-label-xs text-label-xs text-on-surface-variant mb-1">Mobile Number</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant">
                  <span className="material-symbols-outlined">phone_iphone</span>
                </span>
                <input className="w-full h-12 pl-10 pr-4 rounded-lg border-[1.5px] border-[#E8F5E9] bg-surface focus:border-primary focus:ring-0"
                  placeholder="+91 98765 43210" type="tel" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block font-label-xs text-label-xs text-on-surface-variant">Password / OTP</label>
                <a className="font-label-xs text-primary hover:underline" href="#">Forgot Password?</a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant">
                  <span className="material-symbols-outlined">lock</span>
                </span>
                <input className="w-full h-12 pl-10 pr-4 rounded-lg border-[1.5px] border-[#E8F5E9] bg-surface focus:border-primary focus:ring-0"
                  placeholder="Enter password or OTP" type="password" />
              </div>
            </div>

            <div className="pt-stack-sm flex flex-col gap-stack-sm">
              <button className="w-full h-12 bg-primary text-on-primary rounded-lg font-label-sm hover:bg-surface-tint transition-colors flex items-center justify-center"
                type="submit">
                Login <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-outline-variant"></div>
                <span className="flex-shrink-0 mx-4 font-label-xs text-on-surface-variant">OR</span>
                <div className="flex-grow border-t border-outline-variant"></div>
              </div>

              <button type="button"
                className="w-full h-12 bg-surface-container rounded-lg border border-outline-variant font-label-sm hover:bg-surface-container-highest transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined mr-2 text-[18px]">message</span> Continue with OTP
              </button>
            </div>
          </form>

          <div className="mt-stack-lg text-center">
            <p className="font-body-md text-on-surface-variant">
              Don't have an account? <Link className="text-primary font-label-sm hover:underline" to="/role-select">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}