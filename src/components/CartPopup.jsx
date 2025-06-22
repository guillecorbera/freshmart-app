// src/components/CartPopup.jsx
import { useState, useEffect, createContext, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Load cart from localStorage or initialize empty
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems
        .map(item => (item.id === id ? { ...item, quantity } : item))
        .filter(item => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      <>
        {children}
        <CartPopupUI
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          subtotal={subtotal}
          tax={tax}
          total={total}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </>
    </CartContext.Provider>
  );
};

// UI Component for Cart Popup
const CartPopupUI = ({ isOpen, onClose, cartItems, subtotal, tax, total, updateQuantity, removeFromCart }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
            <button onClick={onClose} aria-label="Close Cart" className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map(item => (
                <li key={item.id} className="flex gap-4 border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-12 px-2 py-1 border rounded"
                      />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}

          {/* Cart Summary */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (Est. 5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded transition duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="border border-gray-300 hover:bg-gray-100 py-2 rounded transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};