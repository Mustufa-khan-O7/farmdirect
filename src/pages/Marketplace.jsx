import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const categories = [
  { id: 'all', icon: 'apps', label: 'All' },
  { id: 'vegetables', icon: 'psychiatry', label: 'Vegetables' },
  { id: 'fruits', icon: 'nutrition', label: 'Fruits' },
  { id: 'grains', icon: 'grain', label: 'Grains' },
  { id: 'pulses', icon: 'eco', label: 'Pulses' },
  { id: 'dairy', icon: 'water_drop', label: 'Dairy' },
  { id: 'organic', icon: 'spa', label: 'Organic' },
]

const allProducts = [
  // ─── Vegetables ───
  {
    cat: 'vegetables', name: 'Organic Red Onions', farm: 'Green Valley Farm',
    price: 35, unit: 'kg', rating: 4.8, dist: '2km',
    harvest: '3 days ago', method: 'Organic', location: 'Nashik, Maharashtra',
    desc: 'Freshly harvested red onions with rich, deep purple skin and crisp texture. Perfect for salads, curries, and everyday cooking.',
    img: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=600&auto=format&fit=crop',
  },
  {
    cat: 'vegetables', name: 'Heirloom Tomatoes', farm: 'Sunrise Organics',
    price: 60, unit: 'kg', rating: 4.9, dist: '5.5km',
    harvest: '2 days ago', method: 'Organic', location: 'Pune, Maharashtra',
    desc: 'Vine-ripened heirloom tomatoes bursting with flavor. Non-GMO, sustainably grown, perfect for salads and sauces.',
    img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&auto=format&fit=crop',
  },
  {
    cat: 'vegetables', name: 'Fresh Spinach Bundle', farm: 'Local Roots Farm',
    price: 20, unit: 'bunch', rating: 4.5, dist: '8km',
    harvest: '1 day ago', method: 'Organic', location: 'Satara, Maharashtra',
    desc: 'Crisp, tender spinach leaves packed with iron and vitamins. Hand-picked early morning for maximum freshness.',
    img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop',
  },

  // ─── Fruits ───
  {
    cat: 'fruits', name: 'Fresh Nagpur Oranges', farm: 'Sunrise Orchards',
    price: 80, unit: 'kg', rating: 4.9, dist: '5.5km',
    harvest: '4 days ago', method: 'Conventional', location: 'Nagpur, Maharashtra',
    desc: 'Juicy, sweet Nagpur oranges with thin skin and vibrant color. Rich in vitamin C and freshly plucked from the orchard.',
    img: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=600&auto=format&fit=crop',
  },
  {
    cat: 'fruits', name: 'Sweet Alphonso Mangoes', farm: 'Ratnagiri Farms',
    price: 250, unit: 'dozen', rating: 5.0, dist: '12km',
    harvest: '1 day ago', method: 'Organic', location: 'Ratnagiri, Maharashtra',
    desc: 'The king of mangoes — Alphonso from Ratnagiri. Rich, aromatic, and naturally ripened. A seasonal delight.',
    img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop',
  },
  {
    cat: 'fruits', name: 'Kashmiri Red Apples', farm: 'Himalayan Orchards',
    price: 180, unit: 'kg', rating: 4.7, dist: '15km',
    harvest: '5 days ago', method: 'Conventional', location: 'Srinagar, Kashmir',
    desc: 'Crunchy Kashmiri apples with a perfect balance of sweet and tangy. Grown in the cool Himalayan climate.',
    img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop',
  },

  // ─── Grains ───
  {
    cat: 'grains', name: 'Sona Masoori Rice', farm: 'Green Valley Farm',
    price: 55, unit: 'kg', rating: 4.8, dist: '2km',
    harvest: '1 week ago', method: 'Conventional', location: 'Nashik, Maharashtra',
    desc: 'Lightweight, aromatic Sona Masoori rice — ideal for daily meals. Aged for superior taste and texture.',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop',
  },
  {
    cat: 'grains', name: 'Organic Wheat Flour', farm: 'Madhya Farms',
    price: 45, unit: 'kg', rating: 4.6, dist: '10km',
    harvest: '2 weeks ago', method: 'Organic', location: 'Indore, MP',
    desc: 'Stone-ground organic wheat flour (atta) retaining natural nutrients and fiber. Perfect for chapatis and parathas.',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop',
  },

  // ─── Pulses ───
  {
    cat: 'pulses', name: 'Organic Toor Dal', farm: 'Green Valley Farm',
    price: 140, unit: 'kg', rating: 4.7, dist: '2km',
    harvest: '3 weeks ago', method: 'Organic', location: 'Nashik, Maharashtra',
    desc: 'Premium organic toor dal (arhar dal) with rich flavor. No preservatives, naturally sun-dried and stone-polished.',
    img: '/toor dal.jpg',
  },
  {
    cat: 'pulses', name: 'Chana Dal Premium', farm: 'Local Roots Farm',
    price: 90, unit: 'kg', rating: 4.8, dist: '6km',
    harvest: '2 weeks ago', method: 'Organic', location: 'Satara, Maharashtra',
    desc: 'Split chickpea lentils with a nutty flavor. Great for dals, curries, and healthy snacks.',
    img: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=600&auto=format&fit=crop',
  },
  {
    cat: 'pulses', name: 'Moong Dal Yellow', farm: 'Sunrise Organics',
    price: 130, unit: 'kg', rating: 4.6, dist: '5.5km',
    harvest: '10 days ago', method: 'Organic', location: 'Pune, Maharashtra',
    desc: 'Split yellow moong dal — easy to digest and rich in protein. Perfect for khichdi, soups, and everyday dals.',
    img: '/moong dal.jpg',
  },

  // ─── Dairy ───
  {
    cat: 'dairy', name: 'Homemade Paneer', farm: 'Green Valley Dairy',
    price: 400, unit: 'kg', rating: 4.7, dist: '1km',
    harvest: 'Today', method: 'Traditional', location: 'Nashik, Maharashtra',
    desc: 'Fresh, soft paneer made from pure cow milk. Prepared daily in small batches without preservatives.',
    img: '/paneer.jpg',
  },
  {
    cat: 'dairy', name: 'Fresh Curd (Dahi)', farm: 'Green Valley Dairy',
    price: 80, unit: 'kg', rating: 4.8, dist: '1km',
    harvest: 'Today', method: 'Traditional', location: 'Nashik, Maharashtra',
    desc: 'Thick, creamy curd set from fresh cow milk. Rich in probiotics and ideal for everyday meals.',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop',
  },

  // ─── Organic ───
  {
    cat: 'organic', name: 'Organic Turmeric', farm: 'Local Roots Farm',
    price: 120, unit: 'kg', rating: 4.8, dist: '8km',
    harvest: '1 month ago', method: 'Organic', location: 'Sangli, Maharashtra',
    desc: 'Pure organic turmeric powder with high curcumin content. Stone-ground and free from additives.',
    img: '/turmeric.jpg',
  },
]

export default function Marketplace() {
  const [activeCat, setActiveCat] = useState('all')
const { count } = useCart()
  const visible = activeCat === 'all'
    ? allProducts
    : allProducts.filter(p => p.cat === activeCat)

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <nav className="bg-surface border-b border-outline-variant shadow-sm flex justify-between items-center w-full px-container-padding-mobile md:px-container-padding-desktop h-16 sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-headline-md font-bold text-primary">FarmDirect</Link>
          <div className="hidden md:flex gap-6 items-center ml-4">
            <Link className="text-on-surface-variant hover:text-primary font-body-md" to="/">Home</Link>
            <Link className="text-primary border-b-2 border-primary pb-1 font-body-md" to="/marketplace">Marketplace</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" style={{ fontSize: 20 }}>search</span>
            <input className="pl-10 pr-4 py-2 bg-surface-container-low border-[1.5px] border-outline-variant focus:border-primary focus:ring-0 rounded-full text-sm w-64 h-10 outline-none" placeholder="Search vegetables, fruits..." />
          </div>
                 <Link to="/cart" className="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-surface-container-high relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-error text-on-error rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-label-xs text-[10px] px-1 font-bold">
                {count}
              </span>
            )}
          </Link>
        </div>
      </nav>

      <main className="flex-grow w-full max-w-[1440px] mx-auto flex flex-col pb-safe md:pb-0">
        <section className="w-full px-container-padding-mobile md:px-container-padding-desktop py-12 flex flex-col items-center justify-center text-center bg-gradient-to-b from-surface-container-low to-background">
          <h1 className="font-display-lg text-display-lg text-on-surface mb-4 max-w-3xl">
            Fresh Produce.<br /><span className="text-primary">Directly From Farmers.</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant mb-8 max-w-2xl">
            Connect with local growers and get the freshest harvest delivered straight to your door.
          </p>
          <div className="w-full max-w-2xl px-4 sm:px-0">
            <div className="relative flex items-center w-full h-14 rounded-full bg-surface shadow-md border-[1.5px] border-outline-variant focus-within:border-primary overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-on-surface-variant pl-2">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="peer h-full w-full outline-none text-body-md pr-4 bg-transparent" placeholder="Search vegetables, fruits, grains..." />
              <button className="h-10 px-6 m-2 bg-primary hover:bg-surface-tint text-on-primary rounded-full font-label-sm whitespace-nowrap hidden sm:block">
                Find Produce
              </button>
            </div>
          </div>
        </section>

        <section className="px-container-padding-mobile md:px-container-padding-desktop py-stack-md w-full">
          <h2 className="font-headline-md text-on-surface mb-stack-sm">Browse Categories</h2>
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-stack-sm justify-items-center">
            {categories.map((c) => (
              <button key={c.id} onClick={() => setActiveCat(c.id)}
                className="flex flex-col items-center gap-2 group cursor-pointer w-full max-w-[100px]">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-sm ${
                  activeCat === c.id
                    ? 'bg-primary-container text-on-primary-container ring-2 ring-primary'
                    : 'bg-surface-container text-primary group-hover:bg-primary-container group-hover:text-on-primary-container'
                }`}>
                  <span className="material-symbols-outlined" style={{ fontSize: 32 }}>{c.icon}</span>
                </div>
                <span className={`font-label-sm text-center ${
                  activeCat === c.id ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-primary'
                }`}>{c.label}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="px-container-padding-mobile md:px-container-padding-desktop py-stack-md w-full mb-12">
          <div className="flex justify-between items-end mb-stack-sm">
            <div>
              <h2 className="font-headline-md text-on-surface">
                {activeCat === 'all' ? 'Farmers Near You' : categories.find(c => c.id === activeCat)?.label}
              </h2>
              <p className="font-body-md text-on-surface-variant">
                {activeCat === 'all' ? 'Fresh harvests within 15km' : `${visible.length} products available`}
              </p>
            </div>
            <Link to="/marketplace/search" className="text-primary font-label-sm hover:underline hidden sm:block">
              View All Map
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter-grid">
            {visible.map((p, i) => <ProductCard key={i} product={p} />)}
          </div>

          {visible.length === 0 && (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4 block">search_off</span>
              <p className="font-body-md text-on-surface-variant">Is category me abhi koi product nahi hai.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="w-full py-stack-lg px-container-padding-mobile md:px-container-padding-desktop flex flex-col md:flex-row justify-between items-center bg-surface-container-highest border-t border-outline-variant mb-16 lg:mb-0">
        <div className="font-headline-md font-bold text-primary mb-4 md:mb-0">FarmDirect</div>
        <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
          <a className="text-on-surface-variant hover:text-primary font-body-md" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary font-body-md" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary font-body-md" href="#">Farmer FAQ</a>
        </div>
        <div className="text-on-surface-variant font-body-md text-center md:text-right">
          © 2026 FarmDirect. Empowering local growers.
        </div>
      </footer>
    </div>
  )
}

function ProductCard({ product }) {
  const { name, farm, price, unit, rating, dist, img } = product
  const { addToCart } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }

  return (
    <Link
      to="/product"
      state={{ product }}
      className="bg-surface rounded-xl border border-outline-variant p-4 flex flex-col gap-3 ambient-shadow-1 card-hover h-full"
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden bg-surface-container-low">
        <img className="w-full h-full object-cover" alt={name} src={img} loading="lazy" />
        <div className="absolute top-2 left-2 bg-secondary-container text-primary px-2 py-1 rounded-md flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">verified</span>
          <span className="font-label-xs font-semibold">Verified</span>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-headline-md text-[18px] text-on-surface leading-snug">{name}</h3>
          <p className="font-body-md text-[14px] text-on-surface-variant mt-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">person</span> {farm}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center text-tertiary-container gap-1 bg-[rgba(245,124,0,0.1)] px-2 py-0.5 rounded-full w-fit">
              <span className="material-symbols-outlined text-[14px] icon-fill">star</span>
              <span className="font-label-xs">{rating}</span>
            </div>
            <span className="text-outline text-label-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span> {dist} away
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-surface-container-high">
          <div className="font-headline-md text-[20px] text-on-surface">
            ₹{price}
            <span className="font-body-md text-[14px] text-on-surface-variant">/{unit}</span>
          </div>
          <button
            onClick={handleAdd}
            className="bg-primary hover:bg-surface-tint text-on-primary rounded-lg px-4 py-2 font-label-sm transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span> Add
          </button>
        </div>
      </div>
    </Link>
  )
}