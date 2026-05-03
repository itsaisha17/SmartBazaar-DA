import { useMemo, useState } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const CartPage = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Solace Watch", price: 6649.99, quantity: 1 },
    { id: 2, name: "Urban Street Jacket", price: 2499.0, quantity: 1 },
  ]);

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );
  const shipping = subtotal > 5000 ? 0 : 199;
  const totalPrice = (subtotal + shipping).toFixed(2);

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Cart overview</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Review your items before checkout</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            A cleaner cart layout makes quantities, pricing, and checkout choices easier to understand.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-8">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-500">Premium quality item with fast delivery eligibility.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                    <div className="flex items-center rounded-full border border-slate-200 bg-white p-1">
                      <button
                        className="h-10 w-10 rounded-full text-lg transition hover:bg-slate-100"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        className="h-10 w-10 rounded-full text-lg transition hover:bg-slate-100"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <span className="min-w-28 text-right text-lg font-semibold text-slate-900">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      className="rounded-full border border-rose-200 px-4 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-50"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Order Summary</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-slate-900">
                  {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated delivery</span>
                <span className="font-semibold text-slate-900">2-4 business days</span>
              </div>
              <div className="border-t border-dashed border-slate-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-slate-900">Total</span>
                  <span className="text-2xl font-semibold text-slate-900">₹{totalPrice}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="mt-8 w-full rounded-2xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Proceed to Checkout
            </button>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Secure payment options and delivery estimates are shown before final confirmation.
            </p>
          </aside>
        </div>
      </div>

      {isCheckoutOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold text-slate-900">Payment Method</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Choose a payment option to continue your secure checkout.
            </p>

            <div className="mt-6 grid gap-3">
              <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 font-medium transition hover:border-slate-900 hover:bg-slate-100">
                Credit Card
              </button>
              <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 font-medium transition hover:border-slate-900 hover:bg-slate-100">
                PayPal
              </button>
              <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 font-medium transition hover:border-slate-900 hover:bg-slate-100">
                UPI
              </button>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="mt-6 w-full rounded-2xl bg-rose-500 py-3 font-semibold text-white transition hover:bg-rose-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

