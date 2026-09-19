import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('fd_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('fd_cart', JSON.stringify(items))
  }, [items])

  const addToCart = (product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.name === product.name)
      if (existing) {
        return prev.map((it) =>
          it.name === product.name ? { ...it, qty: it.qty + qty } : it
        )
      }
      return [...prev, { ...product, qty }]
    })
  }

  const removeFromCart = (name) =>
    setItems((prev) => prev.filter((it) => it.name !== name))

  const updateQty = (name, qty) => {
    if (qty < 1) return
    setItems((prev) =>
      prev.map((it) => (it.name === name ? { ...it, qty } : it))
    )
  }

  const clearCart = () => setItems([])

  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  const count = items.reduce((sum, it) => sum + it.qty, 0)

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQty, clearCart, subtotal, count }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)