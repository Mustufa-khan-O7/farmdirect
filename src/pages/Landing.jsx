import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <>
      <Navbar />

      <header className="relative px-container-padding-mobile md:px-container-padding-desktop py-12 md:py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 z-10">
            <h1 className="font-display-lg text-display-lg text-primary leading-tight">
              From Farm to Your Door, Directly.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Connecting farmers, consumers and delivery partners through one intelligent digital marketplace.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                to="/marketplace"
                className="font-label-sm text-label-sm bg-primary text-on-primary hover:bg-surface-tint px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Shop Fresh Produce</span>
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
              </Link>
           <Link
  to="/login"
  className="..."
>
  <span>Sell Your Produce</span>
  <span className="material-symbols-outlined text-[18px]">storefront</span>
</Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-outline-variant">
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-primary font-bold">50K+</span>
                <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                  Happy Customers
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-primary font-bold">2,500+</span>
                <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                  Verified Farmers
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[600px] rounded-[24px] overflow-hidden ambient-shadow-2 z-10">
<img
  className="object-cover w-full h-full"
  alt="Indian farmer using tablet in field"
  src="/landing.jpg"
/>
            <div className="absolute bottom-8 left-8 bg-surface/90 backdrop-blur-md p-4 rounded-xl border border-[#E8F5E9] ambient-shadow-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div>
                <p className="font-label-xs text-label-xs text-on-surface-variant">Transaction Secure</p>
                <p className="font-label-sm text-label-sm text-primary font-bold">Direct Payment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low rounded-bl-[120px] -z-0"></div>
      </header>

      <section className="bg-surface-container-lowest px-container-padding-mobile md:px-container-padding-desktop py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              The FarmDirect Difference
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              We are eliminating inefficiencies in the traditional supply chain to bring better value to both farmers and consumers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md">
            <div className="bg-surface border border-error-container rounded-xl p-8 ambient-shadow-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-error">warning</span>
                Traditional Supply Chain
              </h3>
              <div className="flex flex-col gap-4">
                <Row icon="agriculture" label="Farmer" />
                <Row icon="group" label="Middlemen (Loss of Value)" error />
                <Row icon="store" label="Retailer" />
                <Row icon="shopping_bag" label="Consumer (Higher Price)" />
              </div>
            </div>

            <div className="bg-surface border border-[#E8F5E9] rounded-xl p-8 ambient-shadow-1 hover-lift relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                FarmDirect Solution
              </h3>
              <div className="flex flex-col gap-6">
                <Row icon="agriculture" label="Farmer" badge="Higher Margins" green />
                <Row icon="sync_alt" label="FarmDirect Platform" sub="Intelligent Routing & Secure Payments" green />
                <Row icon="shopping_bag" label="Consumer" badge="Fresher Produce, Fair Price" green />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function Row({ icon, label, sub, badge, green, error }) {
  const circle = green
    ? 'bg-primary-container text-on-primary-container'
    : error
    ? 'bg-error-container text-on-error-container border border-error'
    : 'bg-surface-container text-on-surface-variant border border-outline-variant'

  return (
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full ${circle} flex items-center justify-center`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <span className={`font-label-sm text-label-sm block ${error ? 'text-error' : 'text-on-surface'}`}>
          {label}
        </span>
        {sub && <span className="font-label-xs text-label-xs text-on-surface-variant">{sub}</span>}
        {badge && (
          <span className="font-label-xs text-label-xs text-primary bg-secondary-container px-2 py-1 rounded-md mt-1 inline-block">
            {badge}
          </span>
        )}
      </div>
    </div>
  )
}